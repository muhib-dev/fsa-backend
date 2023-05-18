const detaultStudents = require("../constraints/students.json");

class Students {
  constructor() {
    (() => {
      this.students = detaultStudents || [];
    })();
  }

  create(student = {}) {
    student.studentId = this.students.length + 1;
    this.students.push(student);

    return student;
  }

  findAll() {
    return this.students;
  }

  findById(studentId) {
    return this.students.find((student) => student.studentId === studentId);
  }
}

const studentsModel = new Students();

module.exports = studentsModel;
