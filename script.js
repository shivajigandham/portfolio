document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for the main heading
    const textElement = document.getElementById('typing-text');
    const originalText = textElement.innerText;
    textElement.innerText = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            textElement.innerText += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);

    // Cursor Glow Effect
    const glow = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });

    // Smooth Scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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

    // Add scroll reveal animation (simple version)
    const revealOnScroll = () => {
        const sections = document.querySelectorAll('section');
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.transition = 'all 0.8s ease-out';
            }
        });
    };

    // Initial styles for reveal
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'hero') {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
        }
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load
});
