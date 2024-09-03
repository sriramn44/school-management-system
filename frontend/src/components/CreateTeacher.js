// frontend/src/components/CreateTeacher.js
import React, { useState } from 'react';
import { createTeacher } from '../services/api';

import '../App.css';

const CreateTeacher = () => {
  const [formData, setFormData] = useState({
    teacher_id: '',
    name: '',
    subject: '',
    user_id: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTeacher(formData);
      alert('Teacher created successfully!');
      setFormData({ teacher_id: '', name: '', subject: '', user_id: '' });
    } catch (error) {
      console.error('Error creating teacher:', error);
      alert('Failed to create teacher.');
    }
  };

  return (
    <div className="container">
      <h2>Create Teacher</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="teacher_id"
          placeholder="Teacher ID"
          value={formData.teacher_id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Teacher Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
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
        <button type="submit" className="button">Create Teacher</button>
      </form>
    </div>
  );
};

export default CreateTeacher;
