// App.js
import React, { useState, useEffect } from "react";
import PageRoutes from "./components/ReactRoutes/PageRoutes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage for authentication status on component mount
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Store auth state in local storage
  };

  const handleSignout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove auth state from local storage
  };

  return (
    <div className="App">
      <PageRoutes isAuthenticated={isAuthenticated} onSignin={handleSignin} onSignout={handleSignout} />
    </div>
  );
}

export default App;
