function createBoard(size) {
  let board = Array(size).fill(0);
  let newBoard = board.map((row) => {
    return Array(size).fill(false);
  });
  return newBoard;
}

module.exports = createBoard;
