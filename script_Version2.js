function scrollToDemo() {
    document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.tool-card, .testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });
});