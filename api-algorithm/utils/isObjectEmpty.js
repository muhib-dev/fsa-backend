/**
 * check object is null or empty
 * @param {Object} obj
 * @returns return true if object is null or empty
 */

const isObjectEmpty = (obj) => {
  if (!obj) return true;

  return Object.keys(obj).length === 0;
};

module.exports = isObjectEmpty;
