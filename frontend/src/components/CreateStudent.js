// frontend/src/components/CreateStudent.js
import React, { useState } from 'react';
import { createStudent } from '../services/api';

import '../App.css';

const CreateStudent = () => {
  const [formData, setFormData] = useState({
    student_id: '',
    name: '',
    grade: '',
    user_id: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudent(formData);
      alert('Student created successfully!');
      setFormData({ student_id: '', name: '', grade: '', user_id: '' });
    } catch (error) {
      console.error('Error creating student:', error);
      alert('Failed to create student.');
    }
  };

  return (
    <div className="container">
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="student_id"
          placeholder="Student ID"
          value={formData.student_id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="user_id"
          placeholder="User ID"
          value={formData.user_id}
          onChange={handleChange}
          required
        />
        <button type="submit" className="button">Create Student</button>
      </form>
    </div>
  );
};

export default CreateStudent;
