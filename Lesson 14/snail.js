const snail = function (array) {
  // enjoy
  const result = [];
  let rowStart = 0,
    rowEnd = array.length - 1;
  let colStart = 0,
    colEnd = array[0].length - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // Traverse right
    for (let i = colStart; i <= colEnd; i++) {
      result.push(array[rowStart][i]);
    }
    rowStart++;

    // Traverse down
    for (let i = rowStart; i <= rowEnd; i++) {
      result.push(array[i][colEnd]);
    }
    colEnd--;
    // Traverse left
    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        result.push(array[rowEnd][i]);
      }
      rowEnd--;
    }

    // Traverse up
    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        result.push(array[i][colStart]);
      }
      colStart++;
    }
  }

  return result;
};
