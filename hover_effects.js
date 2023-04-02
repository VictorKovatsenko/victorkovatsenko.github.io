// Detect touch screen devices
if ('ontouchstart' in document.documentElement) {
    // Add hover effect when touched
    const elements = document.querySelectorAll('.image-container, tr, a, .instagram-btn');

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('touchstart', function() {
            this.classList.add('active');
        });

        elements[i].addEventListener('touchend', function() {
            this.classList.remove('active', 'hover');
        });
    }
}

// Turn off hover when touches anywhere outside the items
document.addEventListener('touchstart', function() {
    // Remove all hover effects
    const hoveredElements = document.querySelectorAll(':hover');
    hoveredElements.forEach(element => {
        element.classList.remove('active', 'hover');
    });
});