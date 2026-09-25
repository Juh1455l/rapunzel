const topics = {
  visao: {
    icon:'◉',
    kicker:'O ponto de partida',
    title:'Perceber o planeta',
    description:'Sensores, satélites e pesquisas geram um retrato vivo do planeta. A IA organiza tudo isso para revelar padrões que os olhos humanos não conseguiriam encontrar sozinhos.',
    detail:'Cruza imagens de satélite, sensores e dados científicos em tempo real.',
    tags:['monitoramento','dados abertos']
  },
  oceano: {
    icon:'≈',
    kicker:'Oceano',
    title:'Oceanos vivos',
    description:'A IA acompanha a saúde dos mares, encontra áreas de pesca ilegal e ajuda a prever o caminho de vazamentos de óleo. Assim, equipes podem proteger a vida marinha com mais rapidez.',
    detail:'Identifica embarcações suspeitas e mapeia a presença de espécies.',
    tags:['vida marinha','poluição','pesca sustentável']
  },
  florestas: {
    icon:'♧',
    kicker:'Florestas',
    title:'Florestas de pé',
    description:'Modelos inteligentes analisam imagens aéreas para detectar desmatamento e incêndios no início. Também ajudam a escolher as espécies certas para restaurar cada território.',
    detail:'Detecta mudanças na cobertura vegetal e alerta comunidades locais.',
    tags:['biodiversidade','restauração','prevenção']
  },
  energia: {
    icon:'↯',
    kicker:'Energia',
    title:'Energia inteligente',
    description:'Ao prever o consumo e a geração de energia solar e eólica, a IA torna a rede mais eficiente. Menos desperdício significa menos emissões e uma transição mais acessível.',
    detail:'Equilibra oferta e demanda para aproveitar melhor as fontes renováveis.',
    tags:['renováveis','eficiência','clima']
  },
  cidades: {
    icon:'⌂',
    kicker:'Cidades',
    title:'Cidades resilientes',
    description:'Do trânsito às ilhas de calor, a IA ajuda a planejar cidades que usam menos recursos e protegem melhor as pessoas. Tecnologia e participação comunitária caminham juntas.',
    detail:'Simula cenários urbanos para orientar decisões mais inclusivas.',
    tags:['mobilidade','água','adaptação']
  }
};

const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#close-modal');

const openModal = (topic) => {
  const data = topics[topic];
  if (!data) return;

  document.querySelector('#modal-icon').textContent = data.icon;
  document.querySelector('#modal-kicker').innerHTML = `<span></span> ${data.kicker}`;
  document.querySelector('#modal-title').textContent = data.title;
  document.querySelector('#modal-description').textContent = data.description;
  document.querySelector('#modal-detail').textContent = data.detail;
  document.querySelector('#modal-tags').innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');

  modal.hidden = false;
  closeModal.focus();
  document.body.style.overflow = 'hidden';
};

const hideModal = () => {
  modal.hidden = true;
  document.body.style.overflow = '';
};

document.querySelectorAll('.flow-node').forEach(node => {
  node.addEventListener('click', () => openModal(node.dataset.topic));
});

closeModal.addEventListener('click', hideModal);
modal.addEventListener('click', event => {
  if (event.target === modal) hideModal();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.hidden) hideModal();
});
