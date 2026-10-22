// Portfólio Pedro Henrique — PT (/) e EN (/en/)
const LANG = (document.documentElement.lang || 'pt').toLowerCase().startsWith('en') ? 'en' : 'pt';
const BASE = LANG === 'en' ? '../' : '';
const IMG = f => `${BASE}assets/img/${f}.webp`;

const T = {
  pt:{before:'Antes',now:'Agora',screens:'telas',caseBtn:'Estudo de caso',seeAll:n=>`Ver as ${n} telas`,highlights:'Destaques',stack:'Stack',of:'de',
      open:'Abrir',seeScreens:'Ver telas do',copied:'E-mail copiado',copy:'Copiar e-mail',selected:'Selecionado, use Ctrl+C',role:'Desenvolvedor Full-stack',visit:'Ver site'},
  en:{before:'Before',now:'Now',screens:'screens',caseBtn:'Case study',seeAll:n=>`See all ${n} screens`,highlights:'Highlights',stack:'Stack',of:'of',
      open:'Open',seeScreens:'See screens of',copied:'Email copied',copy:'Copy email',selected:'Selected, press Ctrl+C',role:'Full-stack Developer',visit:'Visit site'}
}[LANG];

const P = [
 {id:'owl',group:'case',kind:'Plataforma SaaS · NestJS, React, Postgres',title:'OWL by Vylo',when:'2026',
  before:'Cada marketplace no seu painel e os números consolidados em planilha',
  after:'Mercado Livre, Amazon, Shopee e Magalu num painel só, com ações sugeridas',
  desc:'Plataforma multi-marketplace e multi-tenant. Cada seller acompanha faturamento, pedidos, catálogo, logística e fiscal de todas as contas.',
  hl:['Curva ABC com Pareto','Central de ações com impacto estimado','XML fiscal em lote','Sync a cada 2h'],
  points:['Integração com Amazon SP-API, Mercado Livre, Shopee e Magazine Luiza','Faturamento líquido, previsão do mês, hora de pico e vendas por estado','Curva ABC com gráfico de Pareto por anúncio','Central de ações: anúncios sem venda, prejuízo e buy box perdido, com impacto estimado','Catálogo com margem, estoque e score por anúncio','XML fiscal em lote e resumo semanal por WhatsApp','Sync paralelizado a cada 2h e deduplicação de clientes por CPF/CNPJ mascarado'],
  tags:['NestJS','React','TypeScript','Prisma','PostgreSQL','Railway','Vercel'],
  imgs:[['owl-dashboard','Dashboard'],['owl-abc','Curva ABC'],['owl-acoes','Central de ações'],['owl-graficos','Faturamento diário, top produtos e vendas por estado'],['owl-logistica','Logística, hora de pico e dia da semana'],['owl-vendas','Vendas'],['owl-produtos','Produtos'],['owl-fiscal','Fiscal']]},
 {id:'rh',group:'case',kind:'Sistema de RH · Node, Express, Postgres',title:'FortSystem',when:'2026',
  before:'Controles de RH espalhados em planilhas e Apps Script',
  after:'Turnover, PDI, Nine Box e férias de 160+ colaboradores num sistema',
  desc:'O sistema de RH da Fortsun Brasil. Acompanha os colaboradores ativos de várias regionais, da admissão ao desligamento.',
  hl:['Turnover por mês, região e cargo','Nine Box e perfil comportamental','PDI, advertências e atestados','Banco de talentos'],
  points:['Dashboard com termômetro de vagas, turnover por mês, região e nível','Cadastro de colaboradores com filtros e exportação CSV','Turnover com rotatividade mensal, tempo de casa e motivos de desligamento','PDI, advertências, faltas e atestados','Nine Box e perfil comportamental em radar','Férias, aniversários, marcos de empresa e banco de talentos','Blacklist migrada de Apps Script, que engolia erros, para Postgres'],
  tags:['Node/Express','PostgreSQL','Vanilla JS','Railway','Vercel'],
  imgs:[['rh-dashboard','Dashboard'],['rh-turnover','Turnover'],['rh-ninebox','Nine Box'],['rh-colaboradores','Colaboradores'],['rh-evolucao','Evolução mensal e motivos de desligamento'],['rh-pdi','PDI e advertências'],['rh-perfil','Perfil comportamental'],['rh-ferias','Controle de férias'],['rh-aniversarios','Aniversários'],['rh-aniv-empresa','Aniversário de empresa'],['rh-talentos','Banco de talentos']]},
 {id:'bussola',group:'case',kind:'Next.js · Pipedrive · Google Drive',title:'Bússola de Clientes',when:'2026',
  before:'Vendedor atualizava o Pipedrive à mão depois de cada reunião',
  after:'A nota do Gemini vira atividade no Pipedrive sozinha',
  desc:'Lê as anotações do Gemini no Google Drive de cada vendedor, extrai os próximos passos e registra nota e follow-up no Pipedrive. O painel mostra o próximo passo de cada cliente, com atrasos em destaque.',
  hl:['Leitura do Drive de todo o time','Parsing sem custo de LLM','Painel ao vivo do Pipedrive','Deduplicação de reuniões'],
  points:['Service account com domain-wide delegation: lê o Drive do time sem autorização individual','Parsing com regex, sem custo de LLM','Sem banco próprio: o painel lê o Pipedrive ao vivo','Deduplicação para não registrar a mesma reunião duas vezes'],
  tags:['Next.js','TypeScript','Google Drive API','Pipedrive API','Vercel Cron'],imgs:[['bussola','Painel de clientes']]},

 {id:'hlinho',group:'sites',kind:'Site de loja · JavaScript',title:"H'Linho",
  before:'Pedidos da loja só pelo direct do Instagram, sem catálogo',
  after:'Catálogo com sacola que envia a reserva pronta pro WhatsApp',
  desc:"Site da H'Linho, loja de roupas de linho que vende na Feira da Madrugada, em Fortaleza. A cliente monta a sacola, informa quem vai retirar e envia a reserva pelo WhatsApp.",
  points:['Coleção com filtro por categoria: shorts, vestidos, macaquinhos e conjuntos','Sacola com subtotal e formulário de retirada (nome, outra pessoa retira, horário)','Reserva enviada pronta pro WhatsApp da loja, sem pagamento online','Layout responsivo com barra de sacola fixa no celular'],
  tags:['HTML','CSS','JavaScript','WhatsApp','Vercel'],
  imgs:[['hlinho-home','Página inicial'],['hlinho-colecao','Coleção com filtros'],['hlinho-sacola','Sacola e reserva']]},

 {id:'turatti',group:'case',kind:'Dashboard de BI · API IzzyWay',title:'Turatti Intelligence',when:'2026',
  before:'Números do restaurante espalhados no PDV e em relatórios exportados',
  after:'Faturamento, CMV, produtos e caixa de 3 unidades num painel ao vivo',
  desc:'Dashboard de BI para o grupo Turatti, que consome a API BI da IzzyWay (PDV) de cada estabelecimento. O dono acompanha faturamento, vendas, caixa, equipe, produtos, CMV, financeiro, estoque e compras com filtro por unidade e por mês.',
  hl:['3 estabelecimentos, filtro por unidade e mês','Mais e menos vendidos','CMV teórico x compras de insumos','10 telas de análise'],
  points:['Consome a API BI da IzzyWay com token por estabelecimento','KPIs de faturamento, vendas, ticket médio e margem bruta, com comparação ao período anterior','Faturamento por semana e participação por categoria','Ranking de mais e menos vendidos com quantidade e receita','CMV teórico pela ficha técnica comparado às compras de insumos, com alerta de desperdício','Itens com menor margem e itens sem custo cadastrado','Telas de caixa, equipe, financeiro, estoque, compras e movimentações'],
  tags:['JavaScript','API REST','IzzyWay','Vercel'],
  imgs:[['turatti-visao','Visão geral'],['turatti-produtos','Produtos: mais e menos vendidos'],['turatti-cmv','CMV e custos']]},

 {id:'anuncioia',group:'vendas',fit:true,kind:'Node · Gemini',title:'anuncioia',
  before:'Revisão de anúncio feita item por item pelo consultor',
  after:'Nota de 0 a 100 e diagnóstico com um clique no anúncio',
  desc:'Analisa título, descrição, imagens e ficha técnica de um anúncio do Mercado Livre e devolve nota, pontos fortes e pontos de melhoria.',
  points:['A API oficial do ML só lê anúncios da própria conta','Scraping e Puppeteer stealth foram bloqueados pelo antibot','Solução: um bookmarklet lê a página aberta e envia ao backend','Gemini analisa texto e imagem no tier gratuito'],
  tags:['Node.js','Express','Gemini API','Bookmarklet'],imgs:[['anuncioia','Diagnóstico de um anúncio']]},
 {id:'precifica',group:'vendas',kind:'JavaScript',title:'Precifica',
  before:'Conta de taxa e margem refeita para cada marketplace',
  after:'Preço de cadastro para 5 marketplaces, com a margem aberta',
  desc:'Calculadora para Shopee, Amazon, Magalu, Mercado Livre e TikTok Shop, com taxas editáveis campo a campo.',
  points:['Calcula por margem, por preço de venda ou por lucro desejado','Comissão por faixa de preço, taxa fixa, CNPJ x CPF e campanhas','Imposto, ROAS de ads, desconto de promoção e antecipação','Barra que mostra para onde vai cada real do preço'],
  tags:['JavaScript','5 marketplaces'],imgs:[['multipreco-1','Cálculo por margem'],['multipreco-2','Taxas específicas da Shopee']]},
 {id:'disparos',group:'vendas',kind:'n8n · Evolution API',title:'Disparos Pipedrive',
  before:'Lead novo distribuído e contatado na mão',
  after:'Consultor sorteado, WhatsApp enviado e nota no deal',
  desc:'Fluxo n8n que distribui leads entre consultores em round robin, envia a primeira mensagem por WhatsApp e atualiza o Pipedrive.',
  points:['Trigger por nova linha no Google Sheets','Round robin entre consultores','WhatsApp via Evolution API','Nota no deal e etiqueta atualizada no Pipedrive'],
  tags:['n8n','Pipedrive API','Evolution API'],imgs:[['n8n-fluxos','Fluxos completos'],['n8n-disparos','Fluxo de disparo']]},
 {id:'newsletter',group:'vendas',kind:'n8n · Gmail API',title:'Newsletter',
  before:'Só quem abria o n8n conseguia disparar',
  after:'Qualquer pessoa do time escreve, vê o preview e envia',
  desc:'Editor em Markdown com preview do e-mail na marca Vylo. O botão Enviar chama um webhook do n8n, que dispara para a base de leads.',
  points:['Envio pela API do Gmail, porque o Railway bloqueia SMTP de saída','Marca cada destinatário como enviado','Intervalo entre envios para não cair em spam'],
  tags:['n8n','Webhook','Gmail API','Markdown'],imgs:[['newsletter','Editor e preview'],['n8n-fluxos','Fluxo no n8n']]},
 {id:'decola',group:'vendas',fit:true,kind:'JavaScript · Sheets',title:'Ativação Decola',
  before:'Dados do seller copiados da planilha à mão',
  after:'Digita o CNPJ e o resto se preenche',
  desc:'Formulário de ativação de sellers que busca os dados pelo CNPJ na base de leads validados.',
  points:['Busca por CNPJ com Enter','Preenche estabelecimento, CustID, cidade e UF','Grava direto na planilha'],
  tags:['JavaScript','Google Sheets','Vercel'],imgs:[['decola','Formulário']]},
 {id:'chamados',group:'interno',kind:'Apps Script · Sheets',title:'Sistema de Chamados',
  before:'Pedidos chegando por WhatsApp e no corredor',
  after:'Fila com SLA, histórico e resposta por e-mail',
  desc:'Formulário de abertura, fila pública e painel de atendimento com indicadores para as demandas internas.',
  points:['SLA por prioridade contado só em dias úteis','Comentário no painel vira e-mail e a resposta volta como comentário','Indicadores de abertos, resolvidos, urgentes e atrasados'],
  tags:['Apps Script','Google Sheets','Gmail','Vercel'],imgs:[['chamados-painel','Painel de chamados'],['chamados-abrir','Abertura de chamado']]},
 {id:'cadastro',group:'interno',kind:'Flask · Google Drive',title:'Cadastro RH',
  before:'Envio de documentos falhava no meio em conexão ruim',
  after:'Upload arquivo por arquivo, com compressão e nova tentativa',
  desc:'Ficha de admissão em duas etapas. O backend gera PDF, organiza os documentos no Drive, registra na planilha e avisa por e-mail.',
  points:['Rota única dividida em envio de dados e upload por arquivo','Compressão de imagem no navegador antes do envio','Até 3 tentativas por arquivo'],
  tags:['Python','Flask','Gunicorn','Google Drive'],imgs:[['cadastro-docs','Etapa 2: documentos'],['cadastro-dados','Etapa 1: dados pessoais'],['cadastro-contato','Contato, dependentes e dados bancários']]},
 {id:'seti',group:'interno',kind:'HTML · JavaScript',title:'Portal SETI',
  before:'Links, prompts e planilhas espalhados entre favoritos e conversas',
  after:'Tudo do setor numa página com busca',
  desc:'Ponto de acesso às ferramentas do setor: sistemas, planilhas dos clientes, prompts prontos e bookmarklets de IA.',
  points:['Busca com atalho de teclado','Prompts com visualizar e copiar','Bookmarklets de diagnóstico e geração de imagem'],
  tags:['HTML','CSS','JavaScript'],imgs:[['seti','Página inicial']]}
];

// Traduções EN (caps = legendas das telas, na mesma ordem de imgs)
const EN = {
 owl:{kind:'SaaS platform · NestJS, React, Postgres',
  before:'Each marketplace in its own dashboard, with numbers merged by hand in spreadsheets',
  after:'Mercado Livre, Amazon, Shopee and Magalu in a single dashboard, with suggested actions',
  desc:'Multi-marketplace, multi-tenant platform. Each seller tracks revenue, orders, catalog, logistics and tax documents across all accounts.',
  hl:['ABC curve with Pareto chart','Action center with estimated impact','Bulk tax XML export','Sync every 2h'],
  points:['Integration with Amazon SP-API, Mercado Livre, Shopee and Magazine Luiza','Net revenue, monthly forecast, peak hours and sales by state','ABC curve with Pareto chart per listing','Action center: listings without sales, losses and lost buy box, with estimated impact','Catalog with margin, stock and score per listing','Bulk tax XML and weekly summary via WhatsApp','Parallel sync every 2h and customer deduplication by masked tax ID'],
  caps:['Dashboard','ABC curve','Action center','Daily revenue, top products and sales by state','Logistics, peak hour and weekday','Sales','Products','Tax']},
 rh:{kind:'HR system · Node, Express, Postgres',
  before:'HR controls scattered across spreadsheets and Apps Script',
  after:'Turnover, development plans, Nine Box and vacations for 160+ employees in one system',
  desc:'The HR system of Fortsun Brasil. Tracks active employees across several regional offices, from hiring to termination.',
  hl:['Turnover by month, region and role','Nine Box and behavioral profile','Development plans, warnings and medical leave','Talent pool'],
  points:['Dashboard with open-position gauge and turnover by month, region and level','Employee registry with filters and CSV export','Turnover with monthly rate, tenure and termination reasons','Development plans (PDI), warnings, absences and medical certificates','Nine Box and radar-chart behavioral profile','Vacations, birthdays, work anniversaries and talent pool','Blacklist migrated from Apps Script, which swallowed errors, to Postgres'],
  caps:['Dashboard','Turnover','Nine Box','Employees','Monthly evolution and termination reasons','Development plans and warnings','Behavioral profile','Vacation control','Birthdays','Work anniversaries','Talent pool']},
 bussola:{title:'Bússola de Clientes (Client Compass)',
  before:'Sales reps updated Pipedrive by hand after every meeting',
  after:'Gemini meeting notes become Pipedrive activities automatically',
  desc:'Reads each sales rep\'s Gemini notes in Google Drive, extracts next steps and logs a note and follow-up in Pipedrive. The dashboard shows each client\'s next step, highlighting overdue ones.',
  hl:['Reads the whole team\'s Drive','Parsing with no LLM cost','Live Pipedrive dashboard','Meeting deduplication'],
  points:['Service account with domain-wide delegation: reads the team\'s Drive without individual authorization','Regex parsing, no LLM cost','No database of its own: the dashboard reads Pipedrive live','Deduplication so the same meeting is never logged twice'],
  caps:['Client dashboard']},
 hlinho:{kind:'Store website · JavaScript',
  before:'Orders only through Instagram DMs, with no catalog',
  after:'Catalog with a bag that sends a ready-made reservation to WhatsApp',
  desc:"Website for H'Linho, a linen clothing store that sells at Fortaleza's Feira da Madrugada market. Customers fill a bag, say who will pick it up and send the reservation through WhatsApp.",
  points:['Collection filtered by category: shorts, dresses, rompers and sets','Bag with subtotal and pickup form (name, someone else picking up, time)','Reservation sent ready to the store\'s WhatsApp, no online payment','Responsive layout with a sticky bag bar on mobile'],
  caps:['Home page','Collection with filters','Bag and reservation']},
 turatti:{kind:'BI dashboard · IzzyWay API',
  before:'Restaurant numbers scattered across the POS and exported reports',
  after:'Revenue, COGS, products and cash for 3 locations in one live dashboard',
  desc:'BI dashboard for the Turatti restaurant group, consuming the IzzyWay (POS) BI API for each location. The owner tracks revenue, sales, cash, staff, products, COGS, finance, stock and purchases, filtered by location and month.',
  hl:['3 locations, filter by location and month','Best and worst sellers','Theoretical COGS vs. supply purchases','10 analysis screens'],
  points:['Consumes the IzzyWay BI API with a token per location','KPIs for revenue, sales, average ticket and gross margin, compared with the previous period','Weekly revenue and share by category','Best and worst sellers ranked by quantity and revenue','Theoretical COGS from recipes compared with supply purchases, flagging waste','Lowest-margin items and items with no cost registered','Cash, staff, finance, stock, purchases and transactions screens'],
  caps:['Overview','Products: best and worst sellers','COGS and costs']},
 anuncioia:{before:'Listing reviews done item by item by a consultant',
  after:'0–100 score and diagnosis with one click on the listing',
  desc:'Analyzes the title, description, images and specs of a Mercado Livre listing and returns a score, strengths and improvement points.',
  points:['The official Mercado Livre API only reads listings from your own account','Scraping and Puppeteer stealth were blocked by anti-bot protection','Solution: a bookmarklet reads the open page and sends it to the backend','Gemini analyzes text and images on the free tier'],
  caps:['Listing diagnosis']},
 precifica:{before:'Fee and margin math redone for every marketplace',
  after:'Listing price for 5 marketplaces, with the margin broken down',
  desc:'Pricing calculator for Shopee, Amazon, Magalu, Mercado Livre and TikTok Shop, with every fee editable.',
  points:['Calculates by margin, by selling price or by target profit','Commission by price range, fixed fee, company vs. individual seller and campaigns','Taxes, ads ROAS, promo discounts and early payout','A bar showing where every real of the price goes'],
  caps:['Margin-based calculation','Shopee-specific fees']},
 disparos:{title:'Pipedrive Lead Dispatch',
  before:'New leads assigned and contacted by hand',
  after:'Consultant assigned, WhatsApp sent and note added to the deal',
  desc:'n8n workflow that distributes leads among consultants in round robin, sends the first WhatsApp message and updates Pipedrive.',
  points:['Triggered by a new row in Google Sheets','Round robin among consultants','WhatsApp via Evolution API','Deal note and label updated in Pipedrive'],
  caps:['Full workflows','Dispatch workflow']},
 newsletter:{before:'Only people who could use n8n were able to send it',
  after:'Anyone on the team writes, previews and sends',
  desc:'Markdown editor with a branded email preview. The Send button calls an n8n webhook that delivers to the lead base.',
  points:['Sent through the Gmail API, since Railway blocks outbound SMTP','Marks each recipient as sent','Delay between sends to avoid spam filters'],
  caps:['Editor and preview','n8n workflow']},
 decola:{title:'Decola Activation',
  before:'Seller data copied from the spreadsheet by hand',
  after:'Type the company ID and the rest fills itself',
  desc:'Seller activation form that looks up data by company tax ID (CNPJ) in the validated lead base.',
  points:['CNPJ lookup on Enter','Fills business name, CustID, city and state','Writes straight to the spreadsheet'],
  caps:['Form']},
 chamados:{title:'Ticket System',
  before:'Requests arriving via WhatsApp and in the hallway',
  after:'Queue with SLA, history and email replies',
  desc:'Request form, public queue and support dashboard with metrics for internal requests.',
  points:['SLA by priority counted in business days only','A dashboard comment becomes an email, and the reply comes back as a comment','Metrics for open, resolved, urgent and overdue tickets'],
  caps:['Ticket dashboard','New ticket']},
 cadastro:{title:'HR Onboarding Form',
  before:'Document uploads failed halfway on poor connections',
  after:'File-by-file upload with compression and retries',
  desc:'Two-step onboarding form. The backend generates a PDF, organizes documents in Drive, logs to the spreadsheet and sends an email notice.',
  points:['Single route split into data submission and per-file upload','In-browser image compression before upload','Up to 3 retries per file'],
  caps:['Step 2: documents','Step 1: personal data','Contact, dependents and bank details']},
 seti:{before:'Links, prompts and spreadsheets scattered across bookmarks and chats',
  after:'Everything the team uses on one searchable page',
  desc:'Access point to the team\'s tools: systems, client spreadsheets, ready-made prompts and AI bookmarklets.',
  points:['Search with keyboard shortcut','Prompts with preview and copy','Diagnosis and image-generation bookmarklets'],
  caps:['Home page']}
};
if (LANG === 'en') P.forEach(p => {
  const e = EN[p.id]; if (!e) return;
  const {caps, ...rest} = e; Object.assign(p, rest);
  if (caps) p.imgs = p.imgs.map(([f, c], i) => [f, caps[i] || c]);
});

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/';
const TECH = [
  ['TypeScript','typescript/typescript-original.svg'],
  ['JavaScript','javascript/javascript-original.svg'],
  ['Node.js','nodejs/nodejs-original.svg'],
  ['NestJS','nestjs/nestjs-original.svg'],
  ['Express','express/express-original.svg',1],
  ['React','react/react-original.svg'],
  ['Next.js','nextjs/nextjs-original.svg',1],
  ['Python','python/python-original.svg'],
  ['Flask','flask/flask-original.svg',1],
  ['PostgreSQL','postgresql/postgresql-original.svg'],
  ['Prisma','prisma/prisma-original.svg',1],
  ['Apps Script','google/google-original.svg'],
  ['n8n',null,0,'n8n'],
  ['Vercel','vercel/vercel-original.svg',1],
  ['Railway','railway/railway-original.svg',1]
];

const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ba = p => `<dl class="ba"><div><dt>${T.before}</dt><dd><s>${p.before}</s></dd></div><div class="now"><dt>${T.now}</dt><dd>${p.after}</dd></div></dl>`;
const tags = t => `<ul class="tags">${t.map(x => `<li>${x}</li>`).join('')}</ul>`;

// Principais
const feat = document.getElementById('featured');
P.filter(p => p.group === 'case').forEach(p => {
  const el = document.createElement('article');
  el.className = 'fcard reveal';
  el.innerHTML = `
    <button class="fshot" data-open="${p.id}" aria-label="${T.seeScreens} ${esc(p.title)}">
      <img src="${IMG(p.imgs[0][0])}" alt="${esc(p.imgs[0][1])} · ${esc(p.title)}" loading="lazy">
      ${p.imgs.length > 1 ? `<span class="more">${p.imgs.length} ${T.screens}</span>` : ''}
    </button>
    <div class="fbody">
      <div class="fhead">
        <div class="top-line"><span class="mono">${p.kind}</span><span class="mono">${p.when}</span></div>
        <h3>${p.title}</h3>
        <span class="who">${T.role}</span>
      </div>
      ${ba(p)}
      <ul class="hl">${p.hl.map(h => `<li>${h}</li>`).join('')}</ul>
      ${tags(p.tags)}
      <div class="factions">
        <button class="btn primary sm" data-open="${p.id}">${T.caseBtn}</button>
        ${p.imgs.length > 1 ? `<button class="btn sm" data-open="${p.id}" data-i="1">${T.seeAll(p.imgs.length)}</button>` : ''}
        ${p.link ? `<a class="btn sm" href="${p.link}" target="_blank" rel="noopener">${T.visit} ↗</a>` : ''}
      </div>
    </div>`;
  feat.appendChild(el);
});

// Demais
const others = document.getElementById('others');
P.filter(p => p.group !== 'case').forEach(p => {
  const el = document.createElement('article');
  el.className = 'card reveal';
  el.dataset.group = p.group;
  el.innerHTML = `
    <button class="tile${p.fit ? ' fit' : ''}" data-open="${p.id}" aria-label="${T.open} ${esc(p.title)}">
      <img src="${IMG(p.imgs[0][0])}" alt="${esc(p.imgs[0][1])} · ${esc(p.title)}" loading="lazy">
      ${p.imgs.length > 1 ? `<span class="more">${p.imgs.length} ${T.screens}</span>` : ''}
    </button>
    <div class="card-b">
      <div><span class="mono">${p.kind}</span><h4>${p.title}</h4></div>
      ${ba(p)}
      ${tags(p.tags)}
      ${p.link ? `<a class="live" href="${p.link}" target="_blank" rel="noopener">${T.visit} ↗</a>` : ''}
    </div>`;
  others.appendChild(el);
});

// Filtros
document.querySelectorAll('.chip').forEach(ch => ch.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-selected', String(c === ch)));
  const f = ch.dataset.filter;
  others.querySelectorAll('.card').forEach(c => c.classList.toggle('out', f !== 'all' && c.dataset.group !== f));
}));

// Tecnologias
document.getElementById('techs').innerHTML = TECH.map(([n, src, inv, txt]) =>
  `<div class="tech">${src ? `<img src="${DI + src}" alt="" loading="lazy"${inv ? ' class="inv"' : ''} onerror="this.outerHTML='<span class=&quot;txt&quot;>${n.slice(0,2)}</span>'">` : `<span class="txt">${txt}</span>`}<span>${n}</span></div>`
).join('');

// Modal
const dlg = document.getElementById('modal'), img = document.getElementById('m-img'), cap = document.getElementById('m-cap'),
      th = document.getElementById('m-thumbs'), info = document.getElementById('m-info');
let cur = null, idx = 0;
function show(i) {
  idx = (i + cur.imgs.length) % cur.imgs.length;
  const [f, c] = cur.imgs[idx];
  img.src = IMG(f); img.alt = c;
  cap.textContent = `${idx + 1} ${T.of} ${cur.imgs.length}: ${c}`;
  [...th.children].forEach((b, j) => b.setAttribute('aria-current', String(j === idx)));
  th.children[idx] && th.children[idx].scrollIntoView({block:'nearest', inline:'nearest'});
  const multi = cur.imgs.length > 1;
  document.getElementById('m-prev').hidden = !multi;
  document.getElementById('m-next').hidden = !multi;
  th.hidden = !multi;
}
function openP(id, i) {
  cur = P.find(p => p.id === id); if (!cur) return;
  info.innerHTML = `<span class="mono">${cur.kind}</span><h2 id="m-title">${cur.title}</h2>${ba(cur)}<p>${cur.desc}</p>
    <h4>${T.highlights}</h4><ul class="pts">${cur.points.map(x => `<li>${x}</li>`).join('')}</ul>
    <h4>${T.stack}</h4>${tags(cur.tags)}${cur.link ? `<a class="btn primary sm" href="${cur.link}" target="_blank" rel="noopener" style="justify-self:start">${T.visit} ↗</a>` : ''}`;
  th.innerHTML = cur.imgs.map(([f, c]) => `<button aria-label="${esc(c)}"><img src="${IMG(f)}" alt="" loading="lazy"></button>`).join('');
  [...th.children].forEach((b, j) => b.onclick = () => show(j));
  show(i || 0);
  try { dlg.showModal(); } catch (e) { dlg.setAttribute('open', ''); }
}
document.addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) openP(b.dataset.open, +(b.dataset.i || 0)); });
document.getElementById('m-prev').onclick = () => show(idx - 1);
document.getElementById('m-next').onclick = () => show(idx + 1);
document.getElementById('m-close').onclick = () => dlg.close();
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener('keydown', e => { if (!cur) return; if (e.key === 'ArrowRight') show(idx + 1); if (e.key === 'ArrowLeft') show(idx - 1); });

// Copiar e-mail
document.getElementById('copy-mail').addEventListener('click', e => {
  const b = e.currentTarget, t = 'pedrohenrique21hz@gmail.com';
  const ok = () => { b.textContent = T.copied; setTimeout(() => b.textContent = T.copy, 2000); };
  const fail = () => { const r = document.createRange(); r.selectNodeContents(document.getElementById('mail-addr')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = T.selected; };
  try { navigator.clipboard.writeText(t).then(ok, fail); } catch (_) { fail(); }
});

// Tema
const root = document.documentElement;
try { const t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; } catch (_) {}
document.getElementById('theme').addEventListener('click', () => {
  const t = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = t;
  try { localStorage.setItem('theme', t); } catch (_) {}
});

// Menu mobile
const burger = document.getElementById('burger'), navEl = document.querySelector('.nav nav');
burger.addEventListener('click', () => { const o = navEl.classList.toggle('open'); burger.setAttribute('aria-expanded', String(o)); });
navEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { navEl.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));

// Header com borda ao rolar + link ativo
const hdr = document.getElementById('top');
addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 8), {passive:true});
const links = [...document.querySelectorAll('#menu a')];
const secIO = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
}), {rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main > section[id]').forEach(s => s.id !== 'inicio' && s.id !== 'home' && secIO.observe(s));

// Reveal
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), {threshold:.08});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Contadores
const cIO = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return; cIO.unobserve(en.target);
  const el = en.target, n = +el.dataset.count, suf = el.dataset.suffix || '';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const t0 = performance.now(), d = 1100;
  const step = t => { const k = Math.min(1, (t - t0) / d); el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}), {threshold:.6});
document.querySelectorAll('[data-count]').forEach(el => cIO.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
