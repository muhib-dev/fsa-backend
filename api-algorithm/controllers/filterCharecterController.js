const filterCharecterService = require("../services/filterCharecterService");

const filterCharecters = (req, res, next) => {
  const { text } = req.query;

  try {
    const result = filterCharecterService.filterCharecters(text);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { filterCharecters };
