const gridContainer = document.querySelector(".grid-container");
const output = document.querySelector(".output");
const gridSlider = document.querySelector(".grid-slider");

gridSlider.addEventListener("change", updateGrid);

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
    gridSquare.addEventListener("mouseenter", () => {
        gridSquare.style.backgroundColor = "#B9CAC4";
    });
    gridSquare.addEventListener("mouseleave", () => {
        gridSquare.style.backgroundColor = "";
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
