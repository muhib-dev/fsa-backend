const userService = require("../services/userService");
const isObjectEmpty = require("../utils/isObjectEmpty");

const createProfile = (req, res, next) => {
  const selectedFields = Object.keys(req.query);

  try {
    const userProfile = userService.getProfile(selectedFields);

    if (isObjectEmpty(userProfile)) {
      return res
        .status(400)
        .json({ message: "user not found by given fields!" });
    }

    res.json(userProfile);
  } catch (error) {
    next(error);
  }
};

module.exports = { createProfile };
