const products = [
  {
    name: 'Reno grande',
    number: 'Nº 24 / 80',
    price: 'S/ 12',
    image: 'assets/nevaluz-brand/reno-hero-adapted.png',
    description: 'Una escena de bosque encendida para regalar con intención. Incluye tarjeta personalizable, yute y estrella de madera.',
    available: true
  },
  {
    name: 'Cabaña',
    number: 'Próximamente',
    price: 'Próximamente',
    image: 'assets/nevaluz-brand/cabana-detail-original.jpg',
    description: 'Un refugio de luz cálida que llegará en una próxima edición de NEVALUZ.',
    available: false
  },
  {
    name: 'Pack Pareja',
    number: 'Próximamente',
    price: 'Próximamente',
    image: 'assets/nevaluz-brand/collection-original.jpg',
    description: 'Una composición para compartir: dos paisajes, una misma luz y una edición por revelar.',
    available: false
  }
];

const modal = document.querySelector('.product-modal');
const modalImage = modal.querySelector('.modal-image img');
const modalTitle = modal.querySelector('h2');
const modalDescription = modal.querySelector('.modal-description');
const modalNumber = modal.querySelector('.modal-meta span');
const modalPrice = modal.querySelector('.modal-meta strong');
const modalCta = modal.querySelector('.modal-cta');

function openProduct(index) {
  const product = products[index] || products[0];
  modalImage.src = product.image;
  modalImage.alt = `${product.name} NEVALUZ`;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalNumber.textContent = product.number;
  modalPrice.textContent = product.price;
  modalCta.textContent = product.available ? 'Quiero esta pieza ↗' : 'Avisarme cuando llegue ↗';
  modalCta.href = `https://wa.me/51946374985?text=${encodeURIComponent(product.available ? `Hola NEVALUZ, quiero reservar ${product.name} ${product.number}` : `Hola NEVALUZ, quiero que me avisen cuando llegue ${product.name}`)}`;
  modal.showModal();
}

document.querySelectorAll('.quick-view').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    openProduct(Number(button.closest('.product-card').dataset.index));
  });
});

document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: .08 });
document.querySelectorAll('.product-card, .manifesto-grid, .principles, .size-switcher').forEach((element) => observer.observe(element));
