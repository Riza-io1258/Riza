const navbarNav = document.querySelector
('.navbar-nav');

document.querySelector('#menu').
onclick = () => {
  navbarNav.classList.toggle('active');
};

const menu = document.querySelector
('#menu');

document.addEventListener('click', function(e) {
  if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active')
  }
});

const particleContainer = document.querySelector('.particle-container');

for (let i = 0; i < 100; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDelay = `${Math.random() * 5}s`;
  particleContainer.appendChild(particle);
}

const cardContainer = document.querySelector('.card-container');

window.addEventListener('scroll', () => {
  const rect = cardContainer.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    cardContainer.classList.add('animate');
  }
});

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('animate');
  });
});
const aboutRow = document.querySelector('.About .row');

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    aboutRow.classList.add('animate');
  } else {
    aboutRow.classList.remove('animate');
  }
}, {
  threshold: 0.5,
});

observer.observe(aboutRow);

