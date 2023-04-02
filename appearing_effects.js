//Appearing when load
function animateSections() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add("animate");
        }
    });
}

window.addEventListener("load", animateSections);

// Details appearing
const advantages = document.querySelectorAll('.advantages-container li');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkAdvantages() {
    for (let i = 0; i < advantages.length; i++) {
        if (isElementInViewport(advantages[i])) {
            advantages[i].classList.add("visible");
        }
    }
}

window.addEventListener('scroll', checkAdvantages);
