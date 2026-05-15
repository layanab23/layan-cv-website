document.addEventListener('DOMContentLoaded', function () {
  const year = new Date().getFullYear();
  document.querySelector('footer').innerHTML += `<p>&copy; ${year} Layan Abdullah Alshayban</p>`;
  const sections = document.querySelectorAll('section');
  
  function showSectionOnScroll() {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', showSectionOnScroll);
  showSectionOnScroll();
  document.getElementById('contactBtn').addEventListener('click', function () {
    const contactForm = document.getElementById('contactForm');
    contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';
  });
});
