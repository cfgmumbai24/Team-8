import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import Contact from "../ContactUs/Contact.jsx";
import Mentor from "../Mentor/Mentor.jsx";
import Signup from "../Signup/Signup.jsx";
import Signin from "../Signin/SignIn.jsx";
import Kmainpg from "../KMainPg/KMainPg.jsx";
import SwarozgarForm from "../SwarojgarForm/SwarojgarForm.jsx";
import Interest from "../Interest/Interest.jsx";

function PageRoutes({ isAuthenticated, onSignin, onSignout }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header isAuthenticated={isAuthenticated} onSignout={onSignout} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin onSignin={onSignin} />} />
        <Route path="/kmainpg" element={isAuthenticated ? <Kmainpg /> : <Navigate to="/signin" />} />
        <Route path="/swarozgar" element={<SwarozgarForm />} />
        <Route path="/interest" element={<Interest />} />
      </Routes>
    </Router>
  );
}

export default PageRoutes;


