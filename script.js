const gridContainer = document.querySelector(".grid-container");
const output = document.querySelector("output");
const gridSlider = document.querySelector(".grid-slider");
const colorPicker = document.querySelector(".color-picker");
const drawButton = document.querySelector(".draw");
const rainbowButton = document.querySelector(".rainbow");
const eraseButton = document.querySelector(".erase");
const clearButton = document.querySelector(".clear");

let color = "#242424";
let isDrawing = false;
let rainbowEnabled = false;

gridSlider.addEventListener("change", updateGrid);
gridSlider.addEventListener("input", displayOutput);
colorPicker.addEventListener("change", changeColor);
drawButton.addEventListener("click", enableDraw);
rainbowButton.addEventListener("click", enableRainbow);
eraseButton.addEventListener("click", enableErase);
clearButton.addEventListener("click", updateGrid);

function changeColor(e) {
    color = e.target.value;
}

function enableDraw() {
    resetModes();
    this.classList.add("active");
    color = colorPicker.value;  
}

function enableRainbow() {
    resetModes();
    this.classList.add("active");
    rainbowEnabled = true;
}

function enableErase() {
    resetModes();
    this.classList.add("active");
    color = "#F5F1ED";
}

function resetModes() {
    const modes = document.querySelectorAll(".mode");
    modes.forEach((button) => {
        if (button.classList.contains("active")) button.classList.remove("active");
    });
    rainbowEnabled = false;
}

function updateGrid() {
    let input = gridSlider.value;
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    for (let i = 0; i < input; i++) {
        let gridRow = makeRow();
        for (let j = 0; j < input; j++) {
            const gridSquare = makeSquare();
            gridRow.appendChild(gridSquare);
        }  
        gridContainer.appendChild(gridRow); 
    }
    drawButton.click();
}

function displayOutput(e) {
    let input = e.target.value;
    output.textContent = input + " x " + input;
}

function makeSquare() {
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "grid-square");
    gridSquare.addEventListener("mousedown", () => {
        isDrawing = true;
        gridSquare.style.backgroundColor = color;
        if (rainbowEnabled) {
            const r = (Math.round(Math.random()* 127) + 127).toString(16);
            const g = (Math.round(Math.random()* 127) + 127).toString(16);
            const b = (Math.round(Math.random()* 127) + 127).toString(16);
            color = '#' + r + g + b;
        }
    });
    gridSquare.addEventListener("mousemove", () => {
        if (isDrawing) gridSquare.style.backgroundColor = color;
        if (rainbowEnabled) {
            const r = (Math.round(Math.random()* 127) + 127).toString(16);
            const g = (Math.round(Math.random()* 127) + 127).toString(16);
            const b = (Math.round(Math.random()* 127) + 127).toString(16);
            color = '#' + r + g + b;
        }
    });
    gridSquare.addEventListener("mouseup", () => {
        isDrawing = false;
    });
    return gridSquare;
}

function makeRow() {
    const gridRow = document.createElement("div");
    gridRow.setAttribute("class", "grid-row");
    return gridRow;
}

updateGrid();