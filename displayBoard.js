function displayBoard(board) {
  // eslint-disable-next-line no-console
  // board.forEach((row) => {
  //   console.log(row);
  // });
  let newBoard = board.map((row, rowIndex) => {
    let newRow = row.map((item, index) => {
      let returnValue;
      if (item == true) {
        returnValue = "X";
      } else {
        returnValue = " ";
      }
      return returnValue;
    });
    return newRow;
  });

  newBoard.forEach((row) => {
    console.log(row);
  });
}

module.exports = displayBoard;
