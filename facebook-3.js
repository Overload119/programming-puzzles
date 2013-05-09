// Given a grid of any integer width and fixed height of 2, 
// find the maximum value of the sum of a 2x2 square in the grid.

var generateGrid = function(width, height, maxInteger) {
  var grid = [];
  for (var i = 0; i < width; i++) {
    grid[i] = [];
    for (var j = 0; j < height; j++) {
      grid[i][j] = Math.floor(Math.random() * (maxInteger || 100) + 1)
    }
  }
  return grid;
}


function sumGridAtCoordinates(grid, x, y) {
  return grid[x][y] + grid[x+1][y] + grid[x][y+1] + grid[x+1][y+1];
}

function findMax(grid) {
  var max = 0;
  for (var i = 0; i < grid.length - 1; i++) {
    var sum = sumGridAtCoordinates(grid, i, 0);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}
