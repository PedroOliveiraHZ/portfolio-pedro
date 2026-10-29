// Efeitos 3D: onda de dados no topo + inclinação 3D nos cards e na foto. Sem dependências.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer: fine)').matches;

  /* ---------- Onda de dados (canvas 2D com projeção em perspectiva) ---------- */
  const cv = document.getElementById('hero3d');
  if (cv && cv.getContext) {
    const ctx = cv.getContext('2d');
    const host = cv.parentElement;
    const small = innerWidth < 760;
    const COLS = small ? 44 : 76, ROWS = small ? 24 : 34;
    const SX = 28, SZ = 28;                 // espaçamento entre pontos
    let W = 0, H = 0, dpr = 1, t = 0, running = false, raf = 0, visible = true;
    let mx = 0, my = 0, tx = 0, ty = 0;     // mouse suavizado (-1..1)
    let color = '227,105,144', dark = true;

    const readColor = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      const m = v.match(/^#?([0-9a-f]{6})$/i);
      if (m) { const n = parseInt(m[1], 16); color = `${n >> 16 & 255},${n >> 8 & 255},${n & 255}`; }
      dark = document.documentElement.dataset.theme !== 'light';
    };
    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = host.clientWidth; H = host.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!running) draw();
    };

    const PX = new Float32Array(COLS * ROWS), PY = new Float32Array(COLS * ROWS), PA = new Float32Array(COLS * ROWS), PR = new Float32Array(COLS * ROWS);
    const BUCKETS = 10;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      const yaw = -0.32 + mx * 0.22, pitch = 0.5 + my * 0.08;
      const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      const fov = Math.min(W, 1400) * 0.95, camZ = 720;
      const ox = W * (small ? 0.5 : 0.6), oy = H * (small ? 0.66 : 0.6);
      const halfX = (COLS - 1) * SX / 2, halfZ = (ROWS - 1) * SZ / 2;
      const strength = dark ? 1 : 0.6;
      let n = 0;
      for (let j = 0; j < ROWS; j++) {
        for (let i = 0; i < COLS; i++, n++) {
          const x = i * SX - halfX, z = j * SZ - halfZ;
          const d = Math.hypot(x - mx * 380, z + my * 180);
          const y = Math.sin(x * 0.011 + t) * 30 + Math.cos(z * 0.017 + t * 0.8) * 24
                  + Math.sin(d * 0.03 - t * 2.2) * 22 * Math.exp(-d / 420);
          const x1 = x * cy - z * sy, z1 = x * sy + z * cy;
          const y2 = y * cp - z1 * sp, z2 = y * sp + z1 * cp;
          const depth = z2 + camZ;
          if (depth < 40) { PA[n] = 0; continue; }
          const s = fov / depth;
          PX[n] = ox + x1 * s; PY[n] = oy + y2 * s;
          const k = Math.max(0, Math.min(1, 1.35 - depth / 1400));
          const lift = Math.max(0, Math.min(1, (y + 45) / 100));
          // atenua atrás do texto (esquerda/alto) para não brigar com a leitura
          const fx = small ? 1 : Math.min(1, 0.35 + PX[n] / W * 1.1);
          PA[n] = (0.16 + 0.8 * k) * (0.5 + 0.5 * lift) * fx * strength;
          PR[n] = Math.max(0.8, 2.1 * s * (0.75 + 0.45 * lift));
        }
      }
      // malha: linhas ao longo de cada fileira e coluna
      ctx.strokeStyle = `rgb(${color})`; ctx.lineWidth = 1;
      for (let j = 0; j < ROWS; j++) {
        const base = j * COLS; let sum = 0;
        ctx.beginPath();
        for (let i = 0; i < COLS; i++) { const q = base + i; if (!PA[q]) continue; i && PA[q - 1] ? ctx.lineTo(PX[q], PY[q]) : ctx.moveTo(PX[q], PY[q]); sum += PA[q]; }
        ctx.globalAlpha = Math.min(0.5, sum / COLS * 0.32); ctx.stroke();
      }
      for (let i = 0; i < COLS; i += 2) {
        let sum = 0; ctx.beginPath();
        for (let j = 0; j < ROWS; j++) { const q = j * COLS + i; if (!PA[q]) continue; j && PA[q - COLS] ? ctx.lineTo(PX[q], PY[q]) : ctx.moveTo(PX[q], PY[q]); sum += PA[q]; }
        ctx.globalAlpha = Math.min(0.4, sum / ROWS * 0.22); ctx.stroke();
      }
      // pontos agrupados por opacidade (menos trocas de estilo = mais rápido)
      ctx.fillStyle = `rgb(${color})`;
      for (let b = 1; b <= BUCKETS; b++) {
        const lo = (b - 1) / BUCKETS, hi = b / BUCKETS;
        ctx.globalAlpha = hi; ctx.beginPath();
        for (let q = 0; q < n; q++) { const a = PA[q]; if (a > lo && a <= hi) { const r = PR[q]; ctx.rect(PX[q] - r / 2, PY[q] - r / 2, r, r); } }
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    function loop() {
      mx += (tx - mx) * 0.04; my += (ty - my) * 0.04;
      t += 0.012;
      draw();
      raf = running ? requestAnimationFrame(loop) : 0;
    }
    const start = () => { if (reduce || running || !visible || document.hidden) return; running = true; raf = requestAnimationFrame(loop); };
    const stop = () => { running = false; cancelAnimationFrame(raf); };

    readColor(); resize();
    addEventListener('resize', resize, {passive: true});
    if (finePointer) addEventListener('pointermove', e => { tx = e.clientX / innerWidth * 2 - 1; ty = e.clientY / innerHeight * 2 - 1; }, {passive: true});
    new IntersectionObserver(es => { visible = es[0].isIntersecting; visible ? start() : stop(); }).observe(host);
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
    // tema trocado → nova cor
    new MutationObserver(() => { readColor(); if (!running) draw(); }).observe(document.documentElement, {attributes: true, attributeFilter: ['data-theme']});
    start();
  }

  /* ---------- Inclinação 3D com brilho ---------- */
  if (!finePointer || reduce) return;
  const add = (el, max) => {
    if (el.dataset.tilt) return; el.dataset.tilt = '1';
    el.classList.add('tilt');
    const glare = document.createElement('span'); glare.className = 'glare'; glare.setAttribute('aria-hidden', 'true');
    el.appendChild(glare);
    let frame = 0;
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.classList.add('tilting');
        el.style.setProperty('--rx', ((0.5 - py) * max).toFixed(2) + 'deg');
        el.style.setProperty('--ry', ((px - 0.5) * max).toFixed(2) + 'deg');
        el.style.setProperty('--gx', (px * 100).toFixed(1) + '%');
        el.style.setProperty('--gy', (py * 100).toFixed(1) + '%');
      });
    });
    el.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      el.classList.remove('tilting');
      el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg');
    });
  };
  const scan = () => {
    document.querySelectorAll('.portrait').forEach(el => add(el, 14));
    document.querySelectorAll('.fcard').forEach(el => add(el, 4));
    document.querySelectorAll('.card').forEach(el => add(el, 8));
  };
  scan();
  // cards são criados pelo script.js; garante que todos recebam o efeito
  new MutationObserver(scan).observe(document.body, {childList: true, subtree: true});
})();
