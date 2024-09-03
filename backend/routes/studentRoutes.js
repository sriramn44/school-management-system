const express = require('express');
const router = express.Router();
const { createStudent, getStudents } = require('../controllers/studentController');


// Create student
router.post('/', createStudent);

// Get all students
router.get('/', getStudents);

module.exports = router;


