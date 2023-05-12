const randomService = require("../services/randomNumberService");

const createRandomNumberFromRange = (req, res, next) => {
  const { from, to } = req.query;

  try {
    const number = randomService.randomNumbeFromRange(from, to);

    res.json({ number, message: `generated from: ${from} To ${to}` });
  } catch (error) {
    next(error);
  }
};

module.exports = { createRandomNumberFromRange };
