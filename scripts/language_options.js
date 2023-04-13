const languageSelector = document.getElementById("language-selector");
languageSelector.addEventListener("change", function() {
  const selectedValue = this.value.toLowerCase(); // convert to lowercase
  const scriptElement = document.querySelector('script[src="language_redirection.js"]'); // script disabling

  // Disable automatic redirection on page loading
  if (scriptElement) {
    // Remove the script element from the DOM
    scriptElement.parentNode.removeChild(scriptElement);
  }

  // Redirect to selected value
  if (selectedValue === "en") {
    window.location.href = "index.html";
  } else {
    window.location.href = "index_" + selectedValue + ".html";
  }
});