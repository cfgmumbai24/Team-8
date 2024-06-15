// src/Signin.js
import React, { useState } from 'react';
import { auth } from 'C:/Users/Sanskruti/Desktop/Team-8/app/src/firebase.js'; // Ensure you import the auth instance
import { signInWithEmailAndPassword } from 'firebase/auth';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed in:', user);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>Sign In</h2>
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
      <button onClick={handleSignin}>Sign In</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Signin;
