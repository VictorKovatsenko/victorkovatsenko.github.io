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
const headers_h3 = document.querySelectorAll('section h3');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Advantages icons
function checkAdvantages() {
    for (let i = 0; i < advantages.length; i++) {
        if (isElementInViewport(advantages[i])) {
            advantages[i].classList.add("visible");
        }
        // else {advantages[i].classList.remove("visible")} Option to remove
    }
}

//Section h3 elements
function checkHeaders() {
    for (let i = 0; i < headers_h3.length; i++) {
        if (isElementInViewport(headers_h3[i])) {
            headers_h3[i].classList.add("active");
        }
        else {headers_h3[i].classList.remove("active")}
    }
}

window.addEventListener('scroll', checkAdvantages);
window.addEventListener('scroll', checkHeaders);
