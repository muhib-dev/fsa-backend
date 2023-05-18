const express = require("express");

const studentsController = require("../controllers/studentController");
const studentValidator = require("../validations/studentValidator");

const router = express.Router();

// api/students/:studentId
router.get(
  "/:studentId",
  studentValidator.getStudentById,
  studentsController.getStudentById
);

// api/students/q/find?search=""
router.get("/q/find", studentsController.searchStudent);

// api/students
router
  .route("/")
  .get(studentsController.getAllStudents)
  .post(studentValidator.postStudent, studentsController.signupStudent);

module.exports = router;
