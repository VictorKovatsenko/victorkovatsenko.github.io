if (navigator.userAgent.match(/(instagram|iPhone|iPod|iPad)/i))  {
    document.getElementById("redirect-link-2").href = "instagram://direct?recipient=berlin_lashes_brows/";
    document.getElementById("redirect-link-1").href = "instagram://direct?recipient=berlin_lashes_brows/";
} else {
    document.getElementById("redirect-link-2").href = "https://ig.me/m/berlin_lashes_brows/";
    document.getElementById("redirect-link-1").href = "https://ig.me/m/berlin_lashes_brows/";
}