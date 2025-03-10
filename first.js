const changeColorBtn = document.querySelector("#changeColor");
const colorValue = document.querySelector("#colorValue");
const textColorValue = document.querySelector("#value");

function changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Creating a hexadecimal color from RGB
    const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

    return hexColor;
}

changeColorBtn.addEventListener("click", function() {
    // Creating a new color for the background
    const newBackgroundColor = changeColor();

    // Creating a different new color for the text
    const newTextColor = changeColor();

    // Changing the background color
    document.body.style.backgroundColor = newBackgroundColor;

    // Changing the text color
    document.getElementById("colorValue").style.color = newTextColor;
    document.getElementById("text").style.color = newTextColor;

    // Updating the hexadecimal value for the background color
    colorValue.textContent = newBackgroundColor;
    
    // Updating the hexadecimal value for the text color
    textColorValue.textContent = newTextColor;
});
