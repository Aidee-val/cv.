// Las interacciones de tu CV van aquí.
const galleryImage = document.getElementById('gallery-image');
const imageCounter = document.getElementById('image-counter');
const prevButton = document.getElementById('prev-image');
const nextButton = document.getElementById('next-image');

const images = [
  { src: '/publico/img/muestras/article-html.svg', alt: 'HTML: dos corchetes angulares sobre fondo verde' },
  { src: '/publico/img/muestras/article-flexbox.svg', alt: 'CSS con flexbox: tres cajas acomodadas en una fila' },
  { src: '/publico/img/muestras/article-accessibility.svg', alt: 'Accesibilidad: un botón con el contorno de foco marcado' }
];
let current = 0;

function showImage(index) {
  if (index < 0) {
    index = images.length - 1;
  }
  if (index >= images.length) {
    index = 0;
  }
  current = index;
  galleryImage.src = images[current].src;
  galleryImage.alt = images[current].alt;
  imageCounter.textContent = `${current + 1} de ${images.length}`;
}
showImage(0);

nextButton.addEventListener('click', () => {
  showImage(current + 1);
});

// Evento para el botón anterior restaurado
prevButton.addEventListener('click', () => {
  showImage(current - 1);
});

const aboutSection = document.querySelector('#about');
const toggleButton = document.querySelector('#toggle-details');

const facts = ['Entiendo el ingles de manera media', 'Me interesa el diseño de paginas web', 'Interesada en bases de datos'];

toggleButton.addEventListener('click', () => {
  const list = aboutSection.querySelector('.details');
  if (list) {
    list.remove();
    toggleButton.textContent = 'Más sobre mí';
    toggleButton.setAttribute('aria-expanded', 'false');
    return;
  }
  const newList = document.createElement('ul');
  newList.className = 'details';
  for (const fact of facts) {
    const item = document.createElement('li');
    item.textContent = fact;
    newList.append(item);
  }
  toggleButton.after(newList);
  toggleButton.textContent = 'Menos sobre mí';
  toggleButton.setAttribute('aria-expanded', 'true');
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});
shareButton.addEventListener('click', () => {
  navigator.clipboard.writeText(location.href).then(() => {
    shareButton.textContent = 'Enlace copiado';
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    showImage(current + 1);
  }
  if (event.key === 'ArrowLeft') {
    showImage(current - 1);
  }
});

