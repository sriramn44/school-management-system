// frontend/src/services/api.js
const API_URL = 'https://lambent-croquembouche-a4ea29.netlify.app/api';

// Student API functions
export const createStudent = async (studentData) => {
  const response = await fetch(`${API_URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentData),
  });
  if (!response.ok) throw new Error('Failed to create student');
  return response.json();
};

export const getStudents = async () => {
  const response = await fetch(`${API_URL}/students`);
  if (!response.ok) throw new Error('Failed to fetch students');
  // console.log("1");
  // console.log(response.json())
  return response.json();
};

// Teacher API functions
export const createTeacher = async (teacherData) => {
  const response = await fetch(`${API_URL}/teachers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(teacherData),
  });
  if (!response.ok) throw new Error('Failed to create teacher');
  return response.json();
};

export const getTeachers = async () => {
  const response = await fetch(`${API_URL}/teachers`);
  if (!response.ok) throw new Error('Failed to fetch teachers');
  return response.json();
};

