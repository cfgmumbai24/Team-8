import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Contact from "../ContactUs/Contact.jsx";
import Mentor from "../Mentor/Mentor.jsx";


function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentor" element={<Mentor />} />
      </Routes>
    </Router>
  );
}

export default PageRoutes;
