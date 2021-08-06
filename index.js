const createBoard = require("./createBoard");
const nextBoard = require("./nextBoard");
const displayBoard = require("./displayBoard");

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

setInterval(() => {
  console.log("++++++++++++++++++++++++++++++++++");
  displayBoard(board);
  console.log("++++++++++++++++++++++++++++++++++");
  board = nextBoard(board);
}, refreshInteral);
