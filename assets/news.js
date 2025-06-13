document.addEventListener('DOMContentLoaded', function() {
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

    const articles = document.querySelectorAll('.news-article');
    
    const animateArticles = () => {
      articles.forEach((article, index) => {
        setTimeout(() => {
          article.style.opacity = '1';
          article.style.transform = 'translateY(0)';
        }, index * 150);
      });
    };

    articles.forEach(article => {
      article.style.opacity = '0';
      article.style.transform = 'translateY(20px)';
      article.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    setTimeout(animateArticles, 300);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateArticles();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(document.querySelector('.news-container'));
  });