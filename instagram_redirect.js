var isInstagramApp = (window.navigator.userAgent.includes('instagram') || window.navigator.userAgent.includes('IGTV'));

if (isInstagramApp && /(android)/i.test(navigator.userAgent)) {
  // Instagram app on Android
  document.getElementById("redirect-link-2").href = "https://instagram.com/berlin_lashes_brows/";
} else if (isInstagramApp && /(iphone|ipad)/i.test(navigator.userAgent)) {
  // Instagram app on iOS
  document.getElementById("redirect-link-2").href = "https://instagram.com/berlin_lashes_brows/";
} else {
  // Not browsing from Instagram app
  document.getElementById("redirect-link-2").href = "https://ig.me/m/berlin_lashes_brows/";
}