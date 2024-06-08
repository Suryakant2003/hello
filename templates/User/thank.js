const bubbleContainer = document.querySelector('.bubble-container');

for (let i = 0; i < 100; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDelay = `${Math.random() * 3}s`;
    bubbleContainer.appendChild(bubble);
}