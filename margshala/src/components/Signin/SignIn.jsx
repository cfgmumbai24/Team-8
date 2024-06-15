import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Signin({ onSignin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed in:', user);
        setError(null);
        localStorage.setItem('isAuthenticated', 'true'); // Store auth state
        onSignin();
        navigate('/kmainpg');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h2>Sign In</h2>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mb-3" onClick={handleSignin}>Sign In</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}

export default Signin;
