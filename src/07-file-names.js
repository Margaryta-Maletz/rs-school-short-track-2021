/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];
  for (let i = 0; i < names.length; i++) {
    let str = names[i];
    const temp = i > 0 ? names.slice(0, i) : [];
    let len = temp.filter((item) => item === str).length;
    if (len > 0) {
      str = str.concat('(', len, ')');
    } else {
      len = res.filter((item) => item === str).length;
      if (len > 0) {
        str = str.concat('(', len, ')');
      }
    }
    res.push(str);
  }
  return res;
}

module.exports = renameFiles;
