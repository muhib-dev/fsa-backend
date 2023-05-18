const createError = require("../utils/createError");

const globalErrorHandler = (error, req, res, next) => {
  console.log("gloal error:", error);

  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }

  res.status(500).json({ message: "Internal server error" });
};

const notFoundErrorHandler = (req, res, next) => {
  const error = createError(
    `Can't find ${req.originalUrl} on this server!`,
    404
  );

  next(error);
};

module.exports = { globalErrorHandler, notFoundErrorHandler };
