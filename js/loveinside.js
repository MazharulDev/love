// Add romantic effects when clicking names
document.getElementById('my-name').addEventListener('click', function() {
    // Add a heart effect
    createHeartEffect(this);
    setTimeout(() => {
        window.location.href = "mazharul.html";
    }, 1000);
});

document.getElementById('her-name').addEventListener('click', function() {
    // Add a heart effect
    createHeartEffect(this);
    // Change text temporarily
    const originalText = this.textContent;
    this.textContent = "My Love";
    setTimeout(() => {
        this.textContent = originalText;
    }, 2000);
});

document.getElementById('my-name-signature').addEventListener('click', function() {
    // Add a heart effect
    createHeartEffect(this);
});

// Function to create heart effects
function createHeartEffect(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Create multiple hearts
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.color = getRandomColor();
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.opacity = '0';
        
        document.body.appendChild(heart);
        
        // Animate the heart
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 100;
        const duration = 1 + Math.random() * 2;
        
        const animation = heart.animate([
            { 
                transform: 'translate(0, 0) scale(0)',
                opacity: 1
            },
            { 
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1.5)`,
                opacity: 0.8
            },
            { 
                transform: `translate(${Math.cos(angle) * distance * 2}px, ${Math.sin(angle) * distance * 2 - 50}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: duration * 1000,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => {
            heart.remove();
        };
    }
}

// Helper function to get random romantic colors
function getRandomColor() {
    const colors = ['#ff6b6b', '#ff8e8e', '#ff5252', '#d32f2f', '#e91e63', '#f44336'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add floating hearts to the page
function createFloatingHearts() {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '-1';
    document.body.appendChild(container);
    
    // Create 15 floating hearts
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'absolute';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.color = getRandomColor();
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.animation = `float${Math.floor(Math.random() * 3)} ${10 + Math.random() * 20}s linear infinite`;
        
        // Create unique animations
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes float${Math.floor(Math.random() * 3)} {
                0% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg); }
                50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg); }
                75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg); }
                100% { transform: translate(0, 0) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        container.appendChild(heart);
    }
}

// Initialize floating hearts when page loads
document.addEventListener('DOMContentLoaded', createFloatingHearts);