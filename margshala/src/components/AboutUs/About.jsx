import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>Welcome to Margshala</h2>
        <p className="intro-text">
          Decisions made at a young age often define the trajectory of our lives. If you are a youth from Uttarakhand who has been thinking of starting your own business, Margshala is just the program for you!
        </p>
        <p>
          <span className="highlight">Margshala will …</span>
        </p>
        <ul className="features-list">
          <li>help you develop your business idea. The world is bigger than we can imagine!</li>
          <li>give you the skills and seed fund you need to find success in the future world of business.</li>
          <li>introduce you to local mentors and role models who will personally guide you.</li>
          <li>make you part of a community ready to help and support you in your journey.</li>
        </ul>
        <p>
          Let us become a part of your startup journey. Apply today to get a chance to become one of Uttarakhand’s most promising youth entrepreneurs!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
