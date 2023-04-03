if (navigator.userAgent.match(/(instagram)/i))  {
    window.onload = function() {
        window.open("https://browsberlin.de", "_system");
		};

    document.getElementById("redirect-link-2").href = "https://instagram.com/berlin_lashes_brows/";
    document.getElementById("redirect-link-1").href = "https://instagram.com/berlin_lashes_brows/";
}  else {
    document.getElementById("redirect-link-2").href = "https://ig.me/m/berlin_lashes_brows/";
    document.getElementById("redirect-link-1").href = "https://ig.me/m/berlin_lashes_brows/";
}