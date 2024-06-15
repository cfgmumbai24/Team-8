import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PageRoutes from './components/ReactRoutes/PageRoutes.jsx';
import ContactUs from './components/ContactUs/Contact.jsx';

function App() {
  return (
    <div className="App">
      <PageRoutes />
    </div>
  );
}

export default App;
