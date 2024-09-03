// backend/models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  student_id: { type: String, required: true, unique: true }, // Unique identifier for the student
  name: { type: String, required: true },
  grade: { type: String, required: true },
  user_id: { 
    type: String, 
    required: true, 
    ref: 'User' // Reference to the user_id in the User model
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

