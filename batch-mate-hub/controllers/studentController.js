const studentService = require("../services/studentService");

// create a new student
const signupStudent = (req, res, next) => {
  const { studentName, email, bloodGroup, photo, occupation, presentAddress } =
    req.body;

  try {
    const createdStudent = studentService.createStudent({
      studentName,
      email,
      bloodGroup,
      photo,
      occupation,
      presentAddress,
    });

    res.json(createdStudent);
  } catch (error) {
    next(error);
  }
};

// get all students
const getAllStudents = (_req, res, next) => {
  try {
    const students = studentService.getAllStudents();

    res.json(students);
  } catch (error) {
    next(error);
  }
};

// get student by id
const getStudentById = (req, res, next) => {
  const { studentId } = req.params;

  try {
    const student = studentService.findStudentById(studentId);
    if (!student)
      return res.status(404).json({ message: "student not found!" });

    res.json(student);
  } catch (error) {
    next(error);
  }
};

// find student by name
const searchStudent = (req, res, next) => {
  const { search } = req.query;

  try {
    const students = studentService.getAllStudents();

    const foundStudents = students.filter((student) => {
      return (
        student.studentName.includes(search) ||
        student.bloodGroup.includes(search)
      );
    });
    console.log(foundStudents);
    res.json(foundStudents);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signupStudent,
  getAllStudents,
  getStudentById,
  searchStudent,
};
