// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Loading animation
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.getElementById('loading-bar');
    const loadingBarGlow = document.querySelector('.loading-bar-glow');
    const loadingPercentage = document.getElementById('loading-percentage');
    
    let progress = 0;
    const duration = 2; // seconds
    const interval = 20; // milliseconds
    
    const loadingTimer = setInterval(() => {
        progress += 100 / ((duration * 1000) / interval);
        
        if (progress >= 100) {
            clearInterval(loadingTimer);
            progress = 100;
            
            // Hide loading screen after a small delay
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 200);
        }
        
        loadingBar.style.width = `${progress}%`;
        loadingBarGlow.style.width = `${progress}%`;
        loadingPercentage.textContent = `${Math.round(progress)}%`;
    }, interval);
    
    // Custom cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // Add a slight delay to the outline for a trailing effect
        setTimeout(() => {
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        }, 50);
    });
    
    // Make cursor bigger when hovering over links and buttons
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
    
    // Hide cursor when mouse leaves window
    document.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null) {
            cursorDot.style.opacity = '0';
            cursorOutline.style.opacity = '0';
        }
    });
    
    document.addEventListener('mouseover', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        if (mobileMenu.classList.contains('active')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for navbar
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Interactive shapes
    const shapesContainer = document.getElementById('interactive-shapes');
    const shapes = [
        { type: 'circle', size: 50 },
        { type: 'square', size: 40 },
        { type: 'triangle', size: 60 },
        { type: 'circle', size: 30 },
        { type: 'square', size: 50 },
        { type: 'triangle', size: 40 }
    ];
    
    shapes.forEach((shape, index) => {
        const element = document.createElement('div');
        element.classList.add('shape');
        
        if (shape.type === 'circle') {
            element.style.borderRadius = '50%';
        }
        
        if (shape.type === 'triangle') {
            element.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        }
        
        element.style.width = `${shape.size}px`;
        element.style.height = `${shape.size}px`;
        element.style.position = 'absolute';
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.background = `linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))`;
        element.style.transition = 'transform 0.3s ease';
        
        shapesContainer.appendChild(element);
    });
    
    // Move shapes on mouse move
    document.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.shape');
        const { clientX, clientY } = e;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            const x = (window.innerWidth - clientX * speed) / 100;
            const y = (window.innerHeight - clientY * speed) / 100;
            
            shape.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
    
    // Animated boxes for hero section
    const animatedBoxesContainer = document.getElementById('animated-boxes');
    const boxCount = Math.floor((window.innerWidth * window.innerHeight) / 80000) + 2;
    
    for (let i = 0; i < boxCount; i++) {
        const box = document.createElement('div');
        const size = Math.random() * 20 + 10;
        const x = (Math.random() * 0.6 + 0.2) * window.innerWidth;
        const y = (Math.random() * 0.6 + 0.2) * window.innerHeight;
        const delay = Math.random() * 5;
        
        box.style.position = 'absolute';
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.left = `${x}px`;
        box.style.top = `${y}px`;
        box.style.backgroundColor = 'rgba(209, 213, 219, 0.1)';
        box.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`;
        box.style.animationDelay = `${delay}s`;
        
        animatedBoxesContainer.appendChild(box);
    }
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress-bar');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (barPosition < screenPosition) {
                const width = bar.getAttribute('data-width');
                bar.style.width = `${width}%`;
            }
        });
    };
    
    // Initial check for elements in view
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to console
        console.log('Form submission:', { name, email, message });
        
        // Show success message (you could create a toast notification here)
        alert('Message sent successfully!');
        
        // Reset form
        contactForm.reset();
    });
    
    // Add fade-in and slide-up animations to elements as they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-title, .subsection-title, .profile-container, .timeline-item, .skill-category, .service-card, .project-card, .contact-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                if (!element.classList.contains('fade-in')) {
                    element.classList.add('fade-in');
                    
                    // Add slide-up animation to certain elements
                    if (element.classList.contains('service-card') || 
                        element.classList.contains('project-card') || 
                        element.classList.contains('timeline-item')) {
                        element.classList.add('slide-up');
                    }
                }
            }
        });
    };
    
    // Initial check for elements in view
    setTimeout(animateOnScroll, 500); // Slight delay to ensure page is fully loaded
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Disable right-click on images to prevent easy saving
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('contextmenu', e => e.preventDefault());
    });
    
    // Create placeholder images for missing images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="' + 
                      (this.width || 300) + '" height="' + (this.height || 150) + 
                      '" viewBox="0 0 300 150"%3E%3Crect fill="%23374151" width="300" height="150"/%3E%3Ctext fill="%23ffffff" font-family="sans-serif" font-size="30" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3EImage%3C/text%3E%3C/svg%3E';
        });
    });
});