const nextCellState = require("./nextCellState");
const countAliveNeighbours = require("./countAliveNeighbours");
const createBoard = require("./createBoard");

function nextBoard(currentBoard) {
  // let newBoard = createBoard(currentBoard.length);
  let newBoard = currentBoard.map((row, rowIndex) => {
    let newRow = row.map((item, colIndex) => {
      let aliveNeighbours = countAliveNeighbours(
        rowIndex,
        colIndex,
        currentBoard
      );
      return nextCellState(item, aliveNeighbours);
    });
    return newRow;
  });

  return newBoard;
}

module.exports = nextBoard;
