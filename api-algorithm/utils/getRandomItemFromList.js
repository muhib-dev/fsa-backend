/**
 * get an item from array in between range
 * @param {Array} arr
 * @param {number} start
 * @param {number} end
 * @returns a found index value in range
 */

const getRandomItemFromList = (arr = [], start = 0, end = 10) => {
  const index = Math.floor(Math.random() * (end - start + 1) + start);
  return arr[index];
};

module.exports = getRandomItemFromList;
