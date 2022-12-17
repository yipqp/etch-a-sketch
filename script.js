const gridContainer = document.querySelector(".grid-container");
const output = document.querySelector("output");
const gridSlider = document.querySelector(".grid-slider");
const colorPicker = document.querySelector(".color-picker");
const drawButton = document.querySelector(".draw");
const eraseButton = document.querySelector(".erase");
const clearButton = document.querySelector(".clear");

let color = "#242424";
let isDrawing = false;
let drawEnabled = true;

gridSlider.addEventListener("change", updateGrid);
gridSlider.addEventListener("input", displayOutput);
colorPicker.addEventListener("change", changeColor);
drawButton.addEventListener("click", enableDraw);
eraseButton.addEventListener("click", enableErase);
clearButton.addEventListener("click", updateGrid);

function changeColor(e) {
    color = e.target.value;
}

function enableDraw() {
    color = colorPicker.value;
    eraseButton.classList.remove("active");
    this.classList.add("active");
}

function enableErase() {
    color = "#F5F1ED";
    drawButton.classList.remove("active");
    this.classList.add("active");
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

    });
    gridSquare.addEventListener("mousemove", () => {
        if (isDrawing) gridSquare.style.backgroundColor = color;
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