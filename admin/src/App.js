import React, { useState } from 'react';
import './App.css';
import JobForm from '../../admin/src/Component/JobForm';
import CourseForm from '../../admin/src/Component/CourseForm';
import WorkshopForm from './Component/WorkshopForm';
function App() {
  const [showJobForm, setShowJobForm] = useState(true);
  const [showCourseForm, setShowCourseForm] = useState(false); // Corrected variable name
  const [showWorkshopForm, setShowWorkshopForm] = useState(false);

  const handleShowJobForm = () => {
    setShowJobForm(true);
    setShowCourseForm(false); // Reset other form flags
    setShowWorkshopForm(false);
  };

  const handleShowCourseForm = () => {
    setShowJobForm(false);
    setShowCourseForm(true);
    setShowWorkshopForm(false);
  };

  const handleShowWorkshopForm = () => {
    setShowJobForm(false);
    setShowCourseForm(false);
    setShowWorkshopForm(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Form Submission Page</h1>
        <div className="button-group">
          <button className="btn btn-primary me-2" onClick={handleShowJobForm}>
            Show Job Form
          </button>
          <button className="btn btn-primary me-2" onClick={handleShowCourseForm}>
            Show Course Form
          </button>
          <button className="btn btn-primary" onClick={handleShowWorkshopForm}>
            Show Workshop Form
          </button>
        </div>
      </header>
      {showJobForm && <JobForm />}
      {showCourseForm && <CourseForm />}
      {showWorkshopForm && <WorkshopForm />}
    </div>
  );
}

export default App;