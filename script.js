const gridContainer = document.querySelector(".grid-container");

function makeSquare() {
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "grid-square");
    gridSquare.addEventListener("mouseenter", () => {
        gridSquare.style.backgroundColor = "purple";
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