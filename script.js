'use strict';

/**
 * Oak-Wood Business Logic
 * Focused on performance and enhancing the minimalist user experience.
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initContactForm();
});

/**
 * Navigation Logic
 * Handles active state management and mobile menu interactions
 */
function initNavigation() {
    const header = document.querySelector('.main-header');
    const navLinks = document.querySelectorAll('.main-nav a');
    const currentPath = window.location.pathname;

    // Sticky Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.8rem 0';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '1.5rem 0';
            header.style.boxShadow = 'none';
        }
    });

    // Active Link Highlighting
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.includes(href) && href !== 'index.html') {
            link.classList.add('active');
        } else if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
            if (href === 'index.html') link.classList.add('active');
        }
    });
}

/**
 * Scroll Animations
 * Progressive enhancement for a premium feel as users scroll through the portfolio
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.gallery-item, .philosophy-text, .philosophy-image, .card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
}

/**
 * Contact Form Logic
 * Basic validation and feedback for the contact section
 */
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.innerText;
        
        // Simple UI Feedback Pattern
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call (since this is a static site)
        setTimeout(() => {
            alert('Thank you for reaching out to Oak-Wood. We will respond to your inquiry within 48 hours.');
            contactForm.reset();
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }, 1200);
    });
}

/**
 * Utility: Smooth Scroll for Anchor Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});