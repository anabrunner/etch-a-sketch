// JavaScript for Etch-a-Sketch

// Determines the grid size.
let gridSize = 16;
makeDivs(gridSize);

// Selects the divs in the Sketch Grid container.
const divs = document.querySelectorAll("#sketchGrid div");
divs.forEach((div) => {
  div.addEventListener("mouseover", fillColor);
});

// Keeps track of whether the mouse is pressed down or not.
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Create a grid of square divs that is n x n.
// Create the divs.
function makeDivs(n) {
  const sketchGrid = document.getElementById('sketchGrid');
  for (let i = 1; i <= n ** 2; i++) {
    const newDiv = document.createElement('div');
    sketchGrid.appendChild(newDiv);
  }
  makeGrid(n, sketchGrid);
}
// Update the CSS grid.
function makeGrid(n, sketchGrid) {
  sketchGrid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
}

// Changes div color for drawing on sketch grid.
function fillColor(e) {
  let div = this;
  if (mouseDown) {
    div.style.backgroundColor = "black";
  }
}
