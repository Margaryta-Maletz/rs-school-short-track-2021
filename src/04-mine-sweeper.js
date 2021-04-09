/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  return matrix.map((item, i) => item.map((elem, j) => {
    let temp = 0;
    if (i !== 0) {
      if (j !== 0) {
        temp += matrix[i - 1][j - 1] ? 1 : 0;
      }
      if (j !== n - 1) {
        temp += matrix[i - 1][j + 1] ? 1 : 0;
      }
      temp += matrix[i - 1][j] ? 1 : 0;
    }
    if (j !== 0) {
      temp += matrix[i][j - 1] ? 1 : 0;
    }
    if (j !== n - 1) {
      temp += matrix[i][j + 1] ? 1 : 0;
    }
    if (i !== m - 1) {
      if (j !== 0) {
        temp += matrix[i + 1][j - 1] ? 1 : 0;
      }
      if (j !== n - 1) {
        temp += matrix[i + 1][j + 1] ? 1 : 0;
      }
      temp += matrix[i + 1][j] ? 1 : 0;
    }
    return temp;
  }));
}

module.exports = minesweeper;
