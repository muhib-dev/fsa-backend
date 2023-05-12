const createError = require("../utils/createError");

const notFoundErrorHandler = (req, res, next) => {
  const error = createError(
    `Can't find ${req.originalUrl} on this server!`,
    404
  );

  next(error);
};

module.exports = notFoundErrorHandler;
