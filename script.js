// script.js
// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const nav = document.getElementById('nav');

mobileToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    mobileToggle.innerHTML = nav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(contactForm);
        let name = formData.get("name");
        let email = formData.get("email");
        let phone = formData.get("phone");
        let service = formData.get("service");
        let message = formData.get("message");

        // WhatsApp number (international format, no + or spaces)
        let phoneNumber = "27645192556"; 

        // Build WhatsApp message
        let whatsappMessage = `Hello, I would like to inquire:\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Service:* ${service}\n*Message:* ${message}`;
        
        // Open WhatsApp chat
        let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, "_blank");

        // Reset form
        contactForm.reset();
    });
}

// Animation on scroll
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .about-text, .about-img, .contact-info, .contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.animation = 'fadeIn 0.8s ease forwards';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
// Initialize on page load
window.addEventListener('load', animateOnScroll);
