const usersData = require("../constraints/users.json");
const getRandomItemFromList = require("../utils/getRandomItemFromList");
const isObjectEmpty = require("../utils/isObjectEmpty");

/**
 * get user profile by selected fields
 * @param {Array} fields
 * @returns {object} matched given fields
 */
const getProfile = (fields = []) => {
  const randomUser = getRandomItemFromList(usersData, 0, usersData.length - 1);

  if (isObjectEmpty(randomUser)) return null;

  const matchedFields = {};

  for (let i = 0; i < fields.length; i++) {
    const key = fields[i];

    if (key in randomUser) {
      matchedFields[key] = randomUser[key];
    }
  }

  return matchedFields;
};

module.exports = { getProfile };
