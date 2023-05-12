const createError = require("../utils/createError");
const isObjectEmpty = require("../utils/isObjectEmpty");

const validateInteger = (req, res, next) => {
  const fromValue = req.query.from;
  const toValue = req.query.to;

  if (!fromValue || !toValue) {
    const error = createError("from and to values are required", 400);
    return next(error);
  }

  if (isNaN(fromValue) || isNaN(toValue)) {
    const error = createError("from and to values must be numbers", 400);
    return next(error);
  }

  req.query.from = parseInt(fromValue);
  req.query.to = parseInt(toValue);

  next();
};

//! should be encoded to send this values
// Space: %20
// Plus sign (+): %2B
// Ampersand (&): %26
// Forward slash (/): %2F
// Question mark (?): %3F
// Equals sign (=): %3D
// Hash symbol (#): %23
// Comma (,): %2C
// Colon (:): %3A
// Semicolon (;): %3B
// Double quotes ("): %22
// Single quote ('): %27

const validateText = (req, res, next) => {
  const { text } = req.query;

  const trimedText = text ? text.trim() : null;

  if (!trimedText || !trimedText.length) {
    const error = createError("query text is required", 400);
    return next(error);
  }

  req.query.text = trimedText;

  next();
};

const validateFields = (req, res, next) => {
  if (isObjectEmpty(req.query)) {
    const error = createError("user selected fields required!", 400);
    return next(error);
  }

  next();
};

module.exports = { validateInteger, validateText, validateFields };
