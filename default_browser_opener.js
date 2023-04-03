// Add an event listener to all links on the page
if (navigator.userAgent.match(/(instagram)/i)) {
  var anchors = document.getElementsByTagName('a');
  for (var i = 0; i < anchors.length; i++) {
    {
      anchors[i].addEventListener('click', function (e) {
        e.preventDefault();
        window.open(this.href, '_system');
      });
    }
  }
}
