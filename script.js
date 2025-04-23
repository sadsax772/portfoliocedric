// Wait for DOM content to load
// Updated JavaScript with smooth scrolling, preloader, CV download, and scroll animations

document.addEventListener('DOMContentLoaded', () => {
    // Preloader fade out
    window.addEventListener('load', () => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
      }
    });
  
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.custom-navbar .nav li a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // CV Download button behavior
    const downloadBtn = document.querySelector('#download-cv');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('assets/Cedrick-Sepaela-CV.pdf', '_blank');
      });
    }
  
    // Intersection Observer animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    animatedElements.forEach(el => observer.observe(el));
  });
  