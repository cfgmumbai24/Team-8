import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src="https://margshala.com/wp-content/uploads/2023/08/Margshala-Logo.png" width="150" height="60" alt="Margshala Logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/programs">Programs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/be-a-mentor">Be A Mentor</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact" target="_blank" rel="noopener noreferrer">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Header;
