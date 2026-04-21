document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        cursorOutline.animate({
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        }, { duration: 500, fill: 'forwards' });
    });
    
    document.querySelectorAll('a, button, input, textarea').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
    
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(13, 13, 13, 0.98)';
        } else {
            header.style.background = 'rgba(13, 13, 13, 0.9)';
        }
    });
    
    console.log('Developer Portfolio Loaded');
});