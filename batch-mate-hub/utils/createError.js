/**
 * create error by custom message and status
 * @param {string} message
 * @param {number} status
 * @returns {Error} - return error
 */
const createError = (message = "Internal Server Error", status = 500) => {
  const error = new Error(message);
  error.status = status;
  error.statusCode = status;

  return error;
};

module.exports = createError;
