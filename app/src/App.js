// src/App.js
import React from 'react';
import './App.css';
import Signup from './Component/Signup';
import Signin from './Component/SignIn';
import JobForm from './Component/JobForm'; // Ensure the correct path to your JobForm component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Job Submission Form</h1>
      </header>
      <JobForm />
    </div>
  );
}

export default App;
