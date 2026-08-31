function setLanguage(language) {
  document.body.classList.remove("english-mode", "hindi-mode");

  if (language === "hi") {
    document.body.classList.add("hindi-mode");
    document.documentElement.lang = "hi";
    localStorage.setItem("konyak-language", "hi");
  } else {
    document.body.classList.add("english-mode");
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
