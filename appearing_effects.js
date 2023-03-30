function animateSections() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add("animate");
        }
    });
}

window.addEventListener("load", animateSections);
window.addEventListener("scroll", animateSections);