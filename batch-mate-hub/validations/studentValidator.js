const createError = require("../utils/createError");

const postStudent = (req, _res, next) => {
  const { studentName, bloodGroup, presentAddress } = req.body;

  if (!studentName || !bloodGroup || !presentAddress) {
    const error = createError(
      "studentName, bloodGroup, presentAddress fields are required!",
      400
    );
    return next(error);
  }

  next();
};

const getStudentById = (req, _res, next) => {
  const { studentId } = req.params;

  if (!studentId) {
    const error = createError("a valid studentId required!", 400);
    return next(error);
  }

  if (isNaN(studentId)) {
    const error = createError("student id must be a number", 400);
    return next(error);
  }

  req.params.studentId = parseInt(studentId);
  next();
};

module.exports = { postStudent, getStudentById };
