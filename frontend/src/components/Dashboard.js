// frontend/src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/create-student" className="button">Register Student</Link>
          </li>
          <li>
            <Link to="/create-teacher" className="button">Register Teacher</Link>
          </li>
          <li>
            <Link to="/user-list" className="button">View Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
