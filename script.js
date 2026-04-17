document.addEventListener('DOMContentLoaded', () => {
    const cursorGlow = document.querySelector('.cursor-glow');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const fadeElements = document.querySelectorAll('.fade-in');
    const progressBars = document.querySelectorAll('.progress-fill');
    
    let lastScrollTop = 0;
    let ticking = false;
    
    if (window.innerWidth > 900) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
        
        cursorGlow.style.opacity = '1';
    } else {
        cursorGlow.style.display = 'none';
    }
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
        if (entry.isIntersecting) {
            fadeObserver.unobserve(entry.target);
        }
    }, observerOptions);
    
    fadeElements.forEach(el => fadeObserver.observe(el));
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.dataset.progress;
                setTimeout(() => {
                    bar.style.width = progress + '%';
                }, 300);
                progressObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => progressObserver.observe(bar));
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.section === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        if (section.id) {
            sectionObserver.observe(section);
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.dataset.section;
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const heroSection = document.getElementById('hero');
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    document.body.classList.add('scrolled-down');
                } else {
                    document.body.classList.remove('scrolled-down');
                }
                
                lastScrollTop = scrollTop;
                ticking = false;
            });
            ticking = true;
        }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });
    
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });
    
    console.log('CV website loaded successfully!');
});
