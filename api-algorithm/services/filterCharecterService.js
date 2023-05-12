/**
 * filter Charecters if contains letters,numerics, symbols
 * @param {string} text
 * @returns {object} return { letters: 0, numerics: 0, symbols: 0 }
 */

const filterCharecters = (text = "") => {
  const letters = (text.match(/[a-zA-Z]/g) || []).length;
  const numerics = (text.match(/\d/g) || []).length;
  const symbols = (text.match(/[^\w\s]/g) || []).length;

  return { letters, numerics, symbols };
};

module.exports = { filterCharecters };
