function changeFontSize(element, increase) {
    // Get the current font size
    var currentSize = parseInt(window.getComputedStyle(element).fontSize);

    // Set the new font size based on whether to increase or decrease
    var newSize = increase ? currentSize + 3 : currentSize - 3;

    // Apply the new font size to the element
    element.style.fontSize = newSize + "px";
}
function changeStyle(element, hover) {
    if (hover) {
        element.style.color = "cornsilk";
    } else {
        
        element.style.color = "white";
    }
}