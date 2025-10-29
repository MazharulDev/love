document.getElementById('agree').addEventListener('click', function() {
    // Add heart effect when clicking
    createHeartEffect(this);
    setTimeout(() => {
        window.location.href = "inside.html";
    }, 800);
});

const noButton = document.getElementById('sure');
noButton.addEventListener('click', function() {
    // Add heart effect when clicking
    createHeartEffect(this);
    setTimeout(() => {
        window.location.href = "inside.html";
    }, 800);
});

// Make the NO button move away when mouse approaches it
document.addEventListener('mousemove', function(e) {
    const buttonRect = noButton.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate distance between mouse and button center
    const distance = Math.sqrt(
        Math.pow(mouseX - (buttonRect.left + buttonRect.width/2), 2) +
        Math.pow(mouseY - (buttonRect.top + buttonRect.height/2), 2)
    );
    
    // If mouse is within 200px of the button, move it
    if (distance < 200) {
        moveButtonToRandomPosition();
    }
});

// Periodically move the button to make it more challenging
let moveInterval;
noButton.addEventListener('mouseenter', function() {
    // Start moving the button periodically when mouse is near
    moveInterval = setInterval(moveButtonToRandomPosition, 300);
});

noButton.addEventListener('mouseleave', function() {
    // Stop periodic movement when mouse moves away
    if (moveInterval) {
        clearInterval(moveInterval);
    }
});

// Function to move the button to a random position within the viewport
function moveButtonToRandomPosition() {
    // Get viewport dimensions (ensure button stays within bounds)
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;
    
    // Generate random position within the viewport (properly bounded)
    const randomX = Math.max(0, Math.min(maxX, Math.random() * maxX));
    const randomY = Math.max(0, Math.min(maxY, Math.random() * maxY));
    
    // Apply new position to button
    noButton.style.position = 'fixed';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
    
    // Add a little bounce effect
    noButton.style.transform = 'scale(1.1)';
    setTimeout(() => {
        noButton.style.transform = 'scale(1)';
    }, 200);
}

// Add hover effects to buttons
document.getElementById('agree').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
});

document.getElementById('agree').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

noButton.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
});

noButton.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Function to create heart effects
function createHeartEffect(element) {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Create multiple hearts
    for (let i = 0; i < 15; i++) {
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
    const colors = ['#ff6b6b', '#ff8e8e', '#ff5252', '#d32f2f', '#e91e63', '#f44336', '#9c27b0', '#673ab7'];
    return colors[Math.floor(Math.random() * colors.length)];
}