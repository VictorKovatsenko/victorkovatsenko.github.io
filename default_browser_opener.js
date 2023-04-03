// Add an event listener to all links on the page
var links = document.querySelectorAll('a');
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.open(this.href, '_system');
  });
});