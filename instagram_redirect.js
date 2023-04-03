if (navigator.userAgent.match(/(instagram)/i))  {
    document.getElementById("redirect-link-2").addEventListener('click', function(e) {
        e.preventDefault();
        window.open("https://instagram.com/berlin_lashes_brows/", '_system');
    });
    document.getElementById("redirect-link-1").addEventListener('click', function(e) {
        e.preventDefault();
        window.open("https://instagram.com/berlin_lashes_brows/", '_system');
    });
}  else {
    document.getElementById("redirect-link-2").addEventListener('click', function(e) {
        e.preventDefault();
        window.open("https://ig.me/m/berlin_lashes_brows/", '_system');
    });
    document.getElementById("redirect-link-1").addEventListener('click', function(e) {
        e.preventDefault();
        window.open("https://ig.me/m/berlin_lashes_brows/", '_system');
    });
}