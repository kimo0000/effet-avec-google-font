const spanPixel = document.querySelector(".span_pixel");
const valueInput = document.querySelector(".value_input");

let baseValue = 54;
valueInput.value = baseValue;
spanPixel.innerText = `${baseValue}px`;

backgroundRange((100 * baseValue) / 300);

valueInput.addEventListener("input", updaterange);

function updaterange (e) {
    const value = e.target.value;
    const percentage = (100 * value) / 300;
    spanPixel.innerText = `${value}px`;

    backgroundRange(percentage);
    updateSize(value);
}

function updateSize (textSize) {
     document.querySelector("html").style.setProperty("--font-size", `${textSize}px`);
}

function backgroundRange (percentage) {
    valueInput.style.background = `linear-gredient(90deg, blue ${percentage}%, violet ${percentage}%)`;
}