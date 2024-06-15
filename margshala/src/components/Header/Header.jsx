import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Card from '../Cards/Cards'
import Footer from '../Footer/Footer'
import Video from '../Video/Video'
const Header = () => {
  return (
    <>
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
            <a className="nav-link" href="/contact" rel="noopener noreferrer">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className='App'>
    <br/>
      <Video />
      <br/><br/>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Explore Our Programs</h2>
      <br/>
      <div className="container-cards d-flex justify-content-center">
        <Card
          frontContent="Find Your Interests"
          backContent="We will help you find your interests"
        />
        <Card
          frontContent="Khojshala"
          backContent="We help you find possible paths and directions to achieve your interests"
        />
        <Card
          frontContent="Swarozgar Fellowship"
          backContent="We help you build your business"
        />
      </div>
      <br/><br/><br/>
      <Footer/>
    </div>
    </>
  );
};

export default Header;
