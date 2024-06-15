import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Contact from "../ContactUs/Contact.jsx";

function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default PageRoutes;
