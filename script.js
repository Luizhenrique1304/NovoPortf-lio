document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      const alturaHeader = document.querySelector('header').offsetHeight;
      const posicao = destino.getBoundingClientRect().top + window.scrollY - alturaHeader;

      window.scrollTo({
        top: posicao,
        behavior: 'smooth'
      });
    }
  });
});

const header = document.querySelector('header');
 
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
}, { threshold: 0.15 });
 
document.querySelectorAll('section').forEach(section => {
  section.classList.add('animacao-scroll');
  observer.observe(section);
});

