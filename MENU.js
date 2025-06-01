// Mostrar / Ocultar menú
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show-menu');
  });
});


const navLinks = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.nav-list');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Eliminar 'active' de todos los enlaces
    navLinks.forEach(l => l.classList.remove('active'));
    
    // Añadir 'active' solo al clickeado
    this.classList.add('active');

    // Cerrar menú en móviles si está abierto
    navList.classList.remove('show-menu');
  });
});
