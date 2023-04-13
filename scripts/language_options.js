const languageSelector = document.getElementById("language-selector");

languageSelector.addEventListener("change", function () {
    const selectedValue = this.value.toLowerCase(); // convert to lowercase
    // Redirect to selected value
    if (selectedValue === "en") {
        window.location.href = "index.html";
    } else {
        window.location.href = "index_" + selectedValue + ".html";
    }
});