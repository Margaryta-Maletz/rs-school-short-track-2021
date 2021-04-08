/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((sum, item, index, arr) => {
    let temp = sum;
    for (let i = 0; i < arr[index].length; i++) {
      if (index === 0 || !(arr[index - 1][i] === 0)) {
        temp += arr[index][i];
      }
    }
    return temp;
  }, 0);
}

module.exports = getMatrixElementsSum;
