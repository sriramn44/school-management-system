// backend/models/Teacher.js
const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  teacher_id: { type: String, required: true, unique: true }, // Unique identifier for the teacher
  name: { type: String, required: true },
  subject: { type: String, required: true },
  user_id: { 
    type: String, 
    required: true, 
    ref: 'User' // Reference to the user_id in the User model
  },
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
