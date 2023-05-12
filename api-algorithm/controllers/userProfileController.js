const userService = require("../services/userService");

const createProfile = (req, res, next) => {
  const { selectedFields } = req.body;

  try {
    const userProfile = userService.getProfile(selectedFields);

    if (!userProfile) {
      return res.status(400).json("user not found by given fields!");
    }

    res.json(userProfile);
  } catch (error) {
    next(error);
  }
};

module.exports = { createProfile };
