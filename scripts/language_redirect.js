// Language redirection logic
const userLang = navigator.language;
if (userLang.toLowerCase().startsWith('de')) {
  window.location.href = 'index_de.html'; // Redirect to German version
} else if (userLang.toLowerCase().startsWith('ru')) {
  window.location.href = 'index_ru.html'; // Redirect to Russian version
} else {
  window.location.href = 'index.html'; // Redirect to English version or default language
}
