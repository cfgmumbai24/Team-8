// src/Signup.js
import React, { useState } from 'react';
import { auth } from 'C:/Users/Sanskruti/Desktop/Team-8/app/src/firebase.js'; // Ensure you import the auth instance
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setMessage('User created successfully!');
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setMessage(null);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}

export default Signup;
