
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    const animateElements = () => {
      const elements = document.querySelectorAll('.animated');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    document.querySelectorAll('.animated').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateElements);
    window.addEventListener('load', animateElements);
    
    document.addEventListener('DOMContentLoaded', function() {
  // Verificar se estamos em um dispositivo móvel
  const isMobile = window.innerWidth <= 768;
  
  // Configurar animações específicas para mobile
  if (isMobile) {
    // Reduzir duração das animações para melhor performance
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.setAttribute('data-aos-duration', '500');
    });
    
    // Desativar algumas animações complexas
    document.querySelectorAll('.animated').forEach(el => {
      el.style.animation = 'none';
      el.style.opacity = '1';
    });
  }
  
  // Suavizar rolagem para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Ajustar timeline para mobile
  function adjustTimeline() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    if (window.innerWidth <= 992) {
      timeline.classList.add('mobile-view');
    } else {
      timeline.classList.remove('mobile-view');
    }
  }
  
  // Executar ao carregar e redimensionar
  window.addEventListener('load', adjustTimeline);
  window.addEventListener('resize', adjustTimeline);
});