// JavaScript for Etch-a-Sketch

const slider = document.getElementById("gridSize");
const sliderValue = document.getElementById("gridValue");
const sketchGrid = document.getElementById('sketchGrid');

const DEFAULT_GRID = 16;
makeDivs(DEFAULT_GRID);

// Determines the grid size using the slider.
slider.addEventListener("input", newGrid);

// Keeps track of whether the mouse is pressed down or not.
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Clears the grid of the previous divs, then calls function to make new divs.
function newGrid(e) {
  sketchGrid.innerHTML = "";
  let n = this.value;
  sliderValue.textContent = `${n} x ${n}`
  makeDivs(n);
}
// Create a grid of square divs that is n x n.
// Create the divs.
function makeDivs(n) {
  for (let i = 1; i <= n ** 2; i++) {
    const newDiv = document.createElement('div');
    sketchGrid.appendChild(newDiv);
  }
  makeGrid(n, sketchGrid);
}
// Update the CSS grid.
function makeGrid(n, sketchGrid) {
  sketchGrid.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  selectDivs();
}
// Selects the divs in the Sketch Grid container.
function selectDivs() {
  const divs = document.querySelectorAll("#sketchGrid div");
  divs.forEach((div) => {
    div.addEventListener("mouseover", fillColor);
  });
}

// Changes div color for drawing on sketch grid.
function fillColor(e) {
  let div = this;
  if (mouseDown) {
    div.style.backgroundColor = "black";
  }
}
