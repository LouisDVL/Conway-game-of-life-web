const getNeighbours = require("./getNeighbours");

function countAliveNeighbours(cellRow, cellColumn, board) {
  let neighbours = getNeighbours(cellRow, cellColumn, board);
  let totalAmountAlive = neighbours.reduce((accumulator, curr) => {
    if (curr) {
      accumulator++;
    }
    return accumulator;
  });
  return totalAmountAlive;
}

module.exports = countAliveNeighbours;
