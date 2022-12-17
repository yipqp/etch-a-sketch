const gridContainer = document.querySelector(".grid-container");
const output = document.querySelector(".output");
const gridSlider = document.querySelector(".grid-slider");
const colorPicker = document.querySelector(".color-picker");
const drawButton = document.querySelector(".draw");
const eraseButton = document.querySelector(".erase");
const clearButton = document.querySelector(".clear");

let color = "#242424";
let isDrawing = false;

gridSlider.addEventListener("change", updateGrid);
colorPicker.addEventListener("change", changeColor);
drawButton.addEventListener("click", enableDraw);
eraseButton.addEventListener("click", enableErase);
clearButton.addEventListener("click", updateGrid);

function changeColor(e) {
    color = e.target.value;
}

function enableDraw() {
    color = colorPicker.value;
}

function enableErase() {
    color = "#F5F1ED";
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

for (let i = 0; i < 16; i++) {
    let gridRow = makeRow();
    for (let j = 0; j < 16; j++) {
        const gridSquare = makeSquare();
        gridRow.appendChild(gridSquare);
    }  
    gridContainer.appendChild(gridRow); 
}
