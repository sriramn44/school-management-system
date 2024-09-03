const express = require('express');
const router = express.Router();
const { createTeacher, getTeachers } = require('../controllers/teacherController');


// Create teacher
router.post('/', createTeacher);

// Get all teachers
router.get('/', getTeachers);

module.exports = router;
