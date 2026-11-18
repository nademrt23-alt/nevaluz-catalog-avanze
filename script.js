const products = [
  {name:'Cabaña', number:'Nº 10 / 80', price:'S/ 8', image:'assets/nevaluz-brand/cabana-detail-original.jpg', description:'Una escena de refugio entre pinos, tallada a mano en capas 3D sobre vidrio recuperado. Edición numerada y lista para regalar.'},
  {name:'Reno', number:'Nº 24 / 80', price:'S/ 12', image:'assets/nevaluz-brand/reno-real.jpg', description:'La pieza que convierte un regalo secreto en un recuerdo. Incluye tarjeta personalizable, yute y estrella de madera.'},
  {name:'La pareja', number:'Cabaña + Reno', price:'S/ 20', image:'assets/nevaluz-brand/collection-original.jpg', description:'Dos modelos para una escena completa: una cabaña cálida y un reno entre pinos. Un dúo de edición limitada.'}
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
  modalCta.href = `https://wa.me/51946374985?text=${encodeURIComponent(`Hola NEVALUZ, quiero reservar ${product.name} ${product.number}`)}`;
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

const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.product-card');
filters.forEach((filter) => filter.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('active'));
  filter.classList.add('active');
  const value = filter.dataset.filter;
  cards.forEach((card) => {
    const matches = value === 'all' || card.dataset.model === value;
    card.style.display = matches ? '' : 'none';
    if (matches) {
      card.animate([{opacity:0, transform:'translateY(16px)'}, {opacity:1, transform:'translateY(0)'}], {duration:500, easing:'cubic-bezier(.2,.75,.2,1)'})
    }
  });
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, {threshold:.08});
document.querySelectorAll('.product-card, .manifesto-grid, .principles').forEach((element) => observer.observe(element));
