import React from 'react';
import './Mentor.css';
import photo from '../../Image/mentor.png';


function Mentor() {
  return (
    <div className="mentor-form">
      <h1>Be a Mentor</h1>
      <div className="mentor-container">
        <div className="mentor-main">
          <div className="mentor-content">
            <h2>Sign Up to Be a Mentor</h2>
            <form action="#" method="post">
              <input type="text" name="name" placeholder="Enter Your Name" required />
              <input type="email" name="email" placeholder="Enter Your Email" required />
              <textarea name="message" placeholder="Expertise Field" required></textarea>
              <button type="submit" className="mentor-btn">
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="mentor-img">
            <img src={photo} alt="Mentor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentor;