if (navigator.userAgent.match(/(instagram)/i))  {
    document.getElementById("redirect-link-2").href = "instagram://send?text=Hi%20Berlin%20Lashes%20Brows!";
    document.getElementById("redirect-link-1").href = "instagram://send?text=Hi%20Berlin%20Lashes%20Brows!";
}  else {
    document.getElementById("redirect-link-2").href = "https://ig.me/m/berlin_lashes_brows/";
    document.getElementById("redirect-link-1").href = "https://ig.me/m/berlin_lashes_brows/";
}