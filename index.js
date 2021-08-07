// const createBoard = require("./createBoard");
// const nextBoard = require("./nextBoard");
// const displayBoard = require("./displayBoard");

const size = 5;
const refreshInteral = 1000;

// let board = createBoard(size);

let board = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, true, false],
  [false, true, false, true, false],
  [false, false, true, true, false],
];

// setInterval(() => {
//   console.log("++++++++++++++++++++++++++++++++++");
//   displayBoard(board);
//   console.log("++++++++++++++++++++++++++++++++++");
//   board = nextBoard(board);
// }, refreshInteral);

//functions will have to be manually put in because client side does not support require

function nextBoard(currentBoard) {
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

function nextCellState(cellState, neighbourCount) {
  if (isOverPopulated(neighbourCount)) {
    return false;
  } else if (isUnderPopulated(neighbourCount)) {
    return false;
  } else if (isRessurectable) {
    return true;
  } else if (neighbourCount === 2) {
    return cellState;
  }
}

function isOverPopulated(neighbourCount) {
  if (neighbourCount > 3) {
    return true;
  }
  return false;
}

function isUnderPopulated(neighbourCount) {
  if (neighbourCount < 2) {
    return true;
  }
  return false;
}

function isRessurectable(neighbourCount) {
  if (neighbourCount === 3) {
    return true;
  }
  return false;
}
