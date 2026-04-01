// Add a simple scroll-reveal effect
window.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.profile-box');
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
        }
    });
});

// Initialize styles for animation
document.querySelectorAll('.profile-box').forEach(box => {
    box.style.opacity = "0";
    box.style.transform = "translateY(30px)";
    box.style.transition = "all 0.6s ease-out";
});