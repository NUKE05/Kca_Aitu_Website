/*change font size*/
function changeFontSize(element, increase) {
    // Get the current font size
    var currentSize = parseInt(window.getComputedStyle(element).fontSize);

    // Set the new font size based on whether to increase or decrease
    var newSize = increase ? currentSize + 3 : currentSize - 3;

    // Apply the new font size to the element
    element.style.fontSize = newSize + "px";
}

/*scrool to section*/
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
/*scroll to top*/
const scrollToTopButton = document.getElementById("scrollToTopButton");

function toggleScrollToTopButton() {
    if (window.pageYOffset > 475) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

window.addEventListener("scroll", toggleScrollToTopButton);

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

toggleScrollToTopButton();