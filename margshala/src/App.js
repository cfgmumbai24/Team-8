import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Video from './components/Video/Video.jsx';
import Card from './components/Cards/Cards.jsx';

function App() {
  return (
    <div className="App">
      <Header />
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
    </div>
  );
}

export default App;
