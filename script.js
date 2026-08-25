// Language Toggle Function

function toggleLanguage() {
    const englishElements = document.querySelectorAll(".english");
    const hindiElements = document.querySelectorAll(".hindi");

    englishElements.forEach(function(element) {
        element.style.display = 
        element.style.display === "none" ? "block" : "none";
    });

    hindiElements.forEach(function(element) {
        element.style.display = 
        element.style.display === "none" ? "block" : "none";
    });
}


// Image Loading Animation

window.onload = function() {
    const images = document.querySelectorAll("img");

    images.forEach(function(image) {
        image.style.opacity = "1";
    });
};
