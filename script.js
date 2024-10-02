// Animated counter for jackpot
function animateJackpot() {
    const jackpotElement = document.getElementById('jackpot-counter');
    let currentAmount = 1000000;
    
    setInterval(() => {
        currentAmount += Math.floor(Math.random() * 1000);
        jackpotElement.textContent = '$' + currentAmount.toLocaleString();
    }, 1500);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add dynamic card animation
function animateCards() {
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach(card => {
        setInterval(() => {
            const randomX = Math.random() * 20 - 10;
            const randomY = Math.random() * 20 - 10;
            const randomRotate = Math.random() * 10 - 5;
            card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
        }, 3000);
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    animateJackpot();
    animateCards();
});

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.animation = `rise ${Math.random() * 5 + 5}s linear infinite`;
    document.querySelector('.particles').appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);
}

setInterval(createParticle, 200);
