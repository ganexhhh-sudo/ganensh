// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== Simple Fade-in Animation on Scroll =====
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

// ===== Dynamic Year in Footer =====
const footer = document.querySelector('.footer p');
const currentYear = new Date().getFullYear();
footer.innerHTML = `© ${currentYear} Ganesh Gupta. All Rights Reserved.`;

// ===== Welcome Message (Runs Once) =====
window.addEventListener('load', () => {
    console.log('Welcome to Ganesh Gupta\'s personal profile website');
});
