const Student = require("../models/Students");

/**
 * create a new student by student object
 * @param {object} student
 * @returns {object} a create student
 */
const createStudent = (student) => {
  return Student.create(student);
};

/**
 * find all students
 * @returns {Array} all students
 */
const getAllStudents = () => {
  const students = Student.findAll();

  return students;
};

/**
 * find a student by id
 * @param {number} studentId
 * @returns {object} a found student object
 */
const findStudentById = (studentId) => {
  const student = Student.findById(studentId);

  return student;
};

module.exports = { getAllStudents, createStudent, findStudentById };
