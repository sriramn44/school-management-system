// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CreateStudent from './components/CreateStudent';
import CreateTeacher from './components/CreateTeacher';
import UserList from './components/UserList'; // Import UserList component

import './App.css';


const App = () => {
  return (
    <Router>
      <div className='container'>
        <h1>School Management System</h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-student" element={<CreateStudent />} />
          <Route path="/create-teacher" element={<CreateTeacher />} />
          <Route path="/user-list" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
