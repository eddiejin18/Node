const textToType = "Node is the link between you and something greater.";
const typedTextElement = document.getElementById('typed-text');
const cursorElement = document.getElementById('cursor');
const footerElement = document.querySelector('.footer');

let currentIndex = 0;
const typingSpeed = 50; // milliseconds per character

function typeText() {
    if (currentIndex < textToType.length) {
        typedTextElement.textContent += textToType[currentIndex];
        currentIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        // Mark as completed in sessionStorage
        sessionStorage.setItem('typingCompleted', 'true');
        // Keep cursor flashing and fade in footer
        setTimeout(() => {
            // Fade in footer
            footerElement.classList.add('visible');
        }, 500);
    }
}

function showCompletedState() {
    // Show the full text immediately
    typedTextElement.textContent = textToType;
    // Show the footer
    footerElement.classList.add('visible');
}

// Check if typing has already been completed
window.addEventListener('load', () => {
    const typingCompleted = sessionStorage.getItem('typingCompleted');
    
    if (typingCompleted === 'true') {
        // Already completed, show immediately
        showCompletedState();
    } else {
        // Not completed yet, start typing animation
        setTimeout(typeText, 500); // Small delay before starting
    }
});

