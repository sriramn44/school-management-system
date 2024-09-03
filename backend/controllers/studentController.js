// backend/controllers/studentController.js
const Student = require('../models/Student');

const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(201).json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createStudent, getStudents };
