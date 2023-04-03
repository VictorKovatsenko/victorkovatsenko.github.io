var isInstagramApp = (window.navigator.userAgent.includes('Instagram') || window.navigator.userAgent.includes('IGTV'));

if (isInstagramApp && /(android)/i.test(navigator.userAgent)) {
  // Instagram app on Android
  document.getElementById("redirect-link-2").href = "intent://app/@berlin_lashes_brows/#Intent;package=com.instagram.android;scheme=https;end";
} else if (isInstagramApp && /(iphone|ipad)/i.test(navigator.userAgent)) {
  // Instagram app on iOS
  document.getElementById("redirect-link-2").href = "instagram://user?username=berlin_lashes_brows";
} else {
  // Not browsing from Instagram app
  document.getElementById("redirect-link-2").href = "https://ig.me/m/berlin_lashes_brows/";
}