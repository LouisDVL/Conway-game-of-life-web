const getNeighbours = require("./getNeighbours");

function countAliveNeighbours(cellRow, cellColumn, board) {
  let neighbours = getNeighbours(cellRow, cellColumn, board);
  let totalAmountAlive = neighbours.reduce((accumulator, curr) => {
    if (curr) {
      accumulator = accumulator + 1;
    }
    return accumulator;
  }, 0);
  return totalAmountAlive;
}

module.exports = countAliveNeighbours;
