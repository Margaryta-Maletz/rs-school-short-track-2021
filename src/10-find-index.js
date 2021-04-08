/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i = Math.round(array.length / 2);
  let interval = i;
  while (!(array[i] === value)) {
    interval = Math.round(interval / 2);
    if (array[i] < value) {
      i += interval;
    } else {
      i -= interval;
    }
  }
  return i;
}

module.exports = findIndex;
