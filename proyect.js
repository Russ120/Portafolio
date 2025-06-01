const projects = [
  {
    id: 1,
    title: 'Sistema de Conteo de Activos',
    img: '/img/proyecto1.png',
    description: `Lideré el levantamiento y desarrollo de un sistema de conteo de activos entregado exitosamente, utilizando C# y Blazor. 
    Implementé funcionalidades clave para el control eficiente de inventarios y activos fijos.`,
    btnText: 'Ver más',
    btnLink: '#'
  },
  {
    id: 2,
    title: 'Cartas de Ruta',
    img: '/img/proyecto2.png',
    description: `Participé en mejoras y corrección de errores en el sistema de Cartas de Ruta con JavaScript y metodologías ágiles SCRUM. 
    Trabajé colaborativamente usando Jira y Bitbucket para la gestión del proyecto.`,
    btnText: 'Ver más',
    btnLink: '#'
  },
  {
    id: 3,
    title: 'ERP Corporativo',
    img: '/img/proyecto3.png',
    description: `Desarrollo y mantenimiento de módulos ERP con metodologías ágiles y control de versiones usando Bitbucket y Jira. 
    Mejoré la experiencia del usuario y la integración con bases de datos.`,
    btnText: 'Ver más',
    btnLink: '#'
  },
  {
    id: 4,
    title: 'Aplicación Flutter',
    img: '/img/proyecto4.png',
    description: `Desarrollé una aplicación móvil con Flutter para la gestión de pedidos, incluyendo notificaciones en tiempo real y diseño responsive.`,
    btnText: 'Ver más',
    btnLink: '#'
  },
  {
    id: 5,
    title: 'Calculadora Personalizada',
    img: '/img/proyecto5.png',
    description: `Calculadora web con funciones avanzadas, diseño moderno y responsive, creada con JavaScript y CSS personalizado.`,
    btnText: 'Ver más',
    btnLink: '#'
  }
];

const projectGrid = document.querySelector('.project-grid');
const detailContainer = document.querySelector('.project-detail-container');

function loadProjectDetail(id) {
  const project = projects.find(p => p.id === id);
  if (!project) return;

  detailContainer.innerHTML = `
    <h3>${project.title}</h3>
    <img src="${project.img}" alt="${project.title}" />
    <p>${project.description}</p>
    <a href="${project.btnLink}" class="btn" target="_blank" rel="noopener">${project.btnText}</a>
  `;

  detailContainer.classList.add('active');
}

// Listener en cada tarjeta para cargar detalle
projectGrid.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = Number(card.getAttribute('data-id'));
    loadProjectDetail(id);
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const id = Number(card.getAttribute('data-id'));
      loadProjectDetail(id);
    }
  });
});

// Opcional: cargar el primer proyecto al inicio
loadProjectDetail(projects[0].id);
