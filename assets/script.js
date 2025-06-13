  
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

    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      contactForm.reset();
    });

    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.service-card, .benefit-item, .portfolio-item, .program-item');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    document.querySelectorAll('.service-card, .benefit-item').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    document.addEventListener('DOMContentLoaded', function() {
      const animationConfig = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
    
      const animatedElements = document.querySelectorAll(
        '.partnership-text, .partnership-images, .service-card, .state-card, ' +
        '.portfolio-item, .program-item, .partner-logo, .benefit-item'
      );
    
      animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      });
    
      const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            if (entry.target.matches('.service-card, .state-card, .portfolio-item, .program-item, .benefit-item')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
            
            observer.unobserve(entry.target);
          }
        });
      };
    
      const observer = new IntersectionObserver(animateOnScroll, animationConfig);
    
      animatedElements.forEach(element => {
        observer.observe(element);
      });
    
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        
        setTimeout(() => {
          heroContent.style.opacity = '1';
          heroContent.style.transform = 'translateY(0)';
        }, 300);
      }
    
      const heroTextElements = document.querySelectorAll('.hero-content h1, .hero-content p, .cta-container');
      heroTextElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.8s ease-out ${index * 0.2}s, transform 0.8s ease-out ${index * 0.2}s`;
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
      });
    
      const cards = document.querySelectorAll('.service-card, .state-card, .benefit-item, .portfolio-item, .program-item');
      cards.forEach(card => {
        card.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease-out, opacity 0.6s ease-out, transform 0.6s ease-out';
      });
    });

      


    