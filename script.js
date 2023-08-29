// JavaScript for Etch-a-Sketch

// Determines the grid size.
let gridSize = 16;
makeDivs(gridSize);

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
