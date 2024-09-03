// frontend/src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { getStudents,getTeachers } from '../services/api';

import '../App.css';

const UserList = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const student = await getStudents();
        console.log(student)
        setStudents(student);
        const teacher = await getTeachers();
        console.log(teacher)
        setTeachers(teacher)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h2>Students List</h2>
      <p>student name - student grade</p>
      <ul>
        {students.map(user => (
          <li key={user._id}>
            {user.name} - {user.grade}
          </li>
        ))}
      </ul>
      <h2>Teachers List</h2>
      <p>teacher name - teacher subject</p>
      <ul>
        {teachers.map(user => (
          <li key={user._id}>
            {user.name} - {user.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
