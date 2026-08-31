function setLanguage(language) {
  const englishElements = document.querySelectorAll(".english");
  const hindiElements = document.querySelectorAll(".hindi");

  if (language === "hi") {
    englishElements.forEach((element) => {
      element.style.display = "none";
    });

    hindiElements.forEach((element) => {
      element.style.display = "block";
    });

    document.documentElement.lang = "hi";
    localStorage.setItem("konyak-language", "hi");
  } else {
    hindiElements.forEach((element) => {
      element.style.display = "none";
    });

    englishElements.forEach((element) => {
      element.style.display = "block";
    });

    document.documentElement.lang = "en";
    localStorage.setItem("konyak-language", "en");
  }
}

function changeLanguage(language) {
  setLanguage(language);
}

const languageToggle = document.getElementById("languageToggle");

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang || "en";
    setLanguage(currentLanguage === "en" ? "hi" : "en");
  });
}

const savedLanguage = localStorage.getItem("konyak-language") || "en";
setLanguage(savedLanguage);
