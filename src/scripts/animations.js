/**
 * Animations script for Construcciones Silva Baron website
 * This script handles scroll-triggered animations for various elements on the page
 */

document.addEventListener('DOMContentLoaded', () => {
  // Add animation classes to section titles and content
  const sectionTitles = document.querySelectorAll('.section-title h2');
  sectionTitles.forEach(title => {
    title.classList.add('animate-on-scroll', 'animate-slideUp');
  });

  // Add animation classes to specific sections
  const aboutContent = document.querySelector('.about-content');
  if (aboutContent) {
    aboutContent.classList.add('animate-on-scroll', 'animate-fadeIn');
  }

  const projectsGrid = document.querySelector('.projects-grid');
  if (projectsGrid) {
    projectsGrid.classList.add('animate-on-scroll', 'animate-fadeIn');
  }

  const servicesGrid = document.querySelector('.services-grid');
  if (servicesGrid) {
    servicesGrid.classList.add('animate-on-scroll', 'animate-fadeIn');
  }

  const testimonialsSlider = document.querySelector('.testimonials-slider');
  if (testimonialsSlider) {
    testimonialsSlider.classList.add('animate-on-scroll', 'animate-fadeIn');
  }

  const contactContent = document.querySelector('.contact-content');
  if (contactContent) {
    contactContent.classList.add('animate-on-scroll', 'animate-fadeIn');
  }

  const ctaContent = document.querySelector('.cta-content');
  if (ctaContent) {
    ctaContent.classList.add('animate-on-scroll', 'animate-fadeIn');
  }

  // Add staggered animations to grid items
  const addStaggeredAnimations = (selector, animationClass, delay = 0.1) => {
    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
      item.classList.add('animate-on-scroll', animationClass);
      item.style.animationDelay = `${index * delay}s`;
    });
  };

  // Add staggered animations to various grid items
  addStaggeredAnimations('.value-item', 'animate-scaleIn');
  addStaggeredAnimations('.project-item', 'animate-slideUp');
  addStaggeredAnimations('.service-item', 'animate-slideUp');
  addStaggeredAnimations('.testimonial-item', 'animate-slideUp');
  addStaggeredAnimations('.contact-item', 'animate-slideInLeft');

  // Set up the Intersection Observer to trigger animations when elements come into view
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when at least 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'animate' class to trigger the animation
        entry.target.style.animationPlayState = 'running';
        // Unobserve the element after animating it
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with the animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
});