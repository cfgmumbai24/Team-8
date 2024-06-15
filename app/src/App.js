import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signin from './Component/SignIn';
import Signup from './Component/Signup';
import KMainPg from './Component/KMainPg';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignin = () => {
    setAuthenticated(true);
  };

  const handleSignout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {!authenticated && (
            <>
              <Route path="/signin" element={<Signin onSignin={handleSignin} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/*" element={<Navigate to="/signin" />} />
            </>
          )}
          {authenticated && (
            <>
              <Route path="/kmainpg" element={<KMainPg />} />
              <Route path="/*" element={<Navigate to="/kmainpg" />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
