/**
 * random number from min and max values
 * @param {number} min
 * @param {number} max
 * @returns {number} return random number from min and max value
 */

const randomNumbeFromRange = (min = 0, max = 100) => {
  // Swap min and max if min is greater than max
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = { randomNumbeFromRange };
