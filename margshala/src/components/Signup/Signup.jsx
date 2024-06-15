import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import './Signup.css'; // Correct path to the CSS file
import { Link } from 'react-router-dom';
import Select from 'react-select';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [education, setEducation] = useState('');
  const [interests, setInterests] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      const tagsCollection = collection(db, 'Tags');
      const tagsSnapshot = await getDocs(tagsCollection);
      const tagsList = tagsSnapshot.docs.map(doc => ({
        value: doc.data().tagName,
        label: doc.data().tagName
      }));
      setTags(tagsList);
    };

    fetchTags();
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Prepare user data
      const userData = {
        name,
        age,
        location,
        education,
        interests: interests.map(interest => interest.value),
        email: user.email,
      };

      // Add user data to Firestore
      await addDoc(collection(db, "Users"), userData);
      setMessage('User created and information added successfully!');
      setError(null);

      // Reset form fields
      setEmail('');
      setPassword('');
      setName('');
      setAge('');
      setLocation('');
      setEducation('');
      setInterests([]);
    } catch (error) {
      setError(error.message);
      setMessage(null);
    }
  };

  const handleInterestsChange = (selectedOptions) => {
    if (selectedOptions.length <= 3) {
      setInterests(selectedOptions);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner-prop">
        <form onSubmit={handleSignup}>
          <h3>Sign Up and User Details</h3>

          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          {message && <div className="alert alert-success" role="alert">{message}</div>}

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Age</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Education</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Interests (Select up to 3)</label>
            <Select
              isMulti
              value={interests}
              options={tags}
              onChange={handleInterestsChange}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Select interests"
              closeMenuOnSelect={false}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>

          <p>Already have an account? <Link to="/signin">Sign In</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
