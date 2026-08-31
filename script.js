const englishElements = document.querySelectorAll(".english");
const hindiElements = document.querySelectorAll(".hindi");
const languageToggle = document.getElementById("languageToggle");

function setLanguage(language) {
  const showHindi = language === "hi";

  englishElements.forEach((element) => {
    element.style.display = showHindi ? "none" : "";
  });

  hindiElements.forEach((element) => {
    element.style.display = showHindi ? "" : "none";
  });

  document.documentElement.lang = showHindi ? "hi" : "en";
  localStorage.setItem("konyak-language", language);
}

function changeLanguage(language) {
  setLanguage(language);
}

languageToggle.addEventListener("click", () => {
  const current = document.documentElement.lang || "en";
  setLanguage(current === "en" ? "hi" : "en");
});

const savedLanguage = localStorage.getItem("konyak-language");
setLanguage(savedLanguage === "hi" ? "hi" : "en");
