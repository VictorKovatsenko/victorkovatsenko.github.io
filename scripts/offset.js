// Offset for navigation
function scrollToSection(event) {
	event.preventDefault();

	const target = document.querySelector(event.target.hash);
	const offset = parseInt(event.target.getAttribute('data-offset'));

	window.scroll({
		behavior: 'smooth',
		left: 0,
		top: target.offsetTop - offset
	});
}

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
	link.addEventListener('click', scrollToSection);
});