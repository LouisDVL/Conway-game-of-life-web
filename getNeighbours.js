const indicesAreOutOfBounds = require("./indicesAreOutOfBounds");

function getNeighbours(cellRow, cellColumn, board) {
  const up = [cellRow - 1, cellColumn];
  const upRight = [cellRow - 1, cellColumn + 1];
  const right = [cellRow, cellColumn + 1];
  const downRight = [cellRow + 1, cellColumn + 1];
  const down = [cellRow + 1, cellColumn];
  const downLeft = [cellRow + 1, cellColumn - 1];
  const left = [cellRow, cellColumn - 1];
  const upLeft = [cellRow - 1, cellColumn - 1];

  let coords = [up, upRight, right, downRight, down, downLeft, left, upLeft];

  let validCoords = coords.filter((coordinate) => {
    return !indicesAreOutOfBounds(coordinate[0], coordinate[1], board[0]);
  });

  let neighbours = validCoords.map(
    (coordinate) => board[coordinate[0]][coordinate[1]]
  );

  return neighbours;
}

module.exports = getNeighbours;
