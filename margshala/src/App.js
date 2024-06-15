import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Video from './components/Video/Video.jsx';
import Card from './components/Cards/Cards.jsx';
import Footer from './components/Footer/Footer.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PageRoutes from './components/ReactRoutes/PageRoutes.jsx';
import ContactUs from './components/ContactUs/Contact.jsx';

function App() {
  return (
    <div className="App">
      <PageRoutes />
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
  );
}

export default App;
