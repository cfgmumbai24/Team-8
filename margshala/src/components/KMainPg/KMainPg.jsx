import React, { useState, useEffect } from 'react';
import { db, auth } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './KMainPg.css';

function KMainPg() {
  const [jobs, setJobs] = useState([]);
  const [courses, setCourses] = useState([]);
  const [userInterests, setUserInterests] = useState([]);

  useEffect(() => {
    const fetchUserInterests = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = collection(db, 'Users');
        const userSnapshot = await getDocs(query(userRef, where('email', '==', user.email)));
        if (!userSnapshot.empty) {
          const userData = userSnapshot.docs[0].data();
          setUserInterests(userData.interests);
        }
      }
    };

    const fetchRecords = async () => {
      if (userInterests.length === 0) return;

      const jobsRef = collection(db, 'JobRecords');
      const coursesRef = collection(db, 'CourseRecords');

      const jobsSnapshot = await getDocs(jobsRef);
      const coursesSnapshot = await getDocs(coursesRef);

      const jobsData = jobsSnapshot.docs
        .map(doc => doc.data())
        .filter(job => job.tags.some(tag => userInterests.includes(tag)));

      const coursesData = coursesSnapshot.docs
        .map(doc => doc.data())
        .filter(course => course.tags.some(tag => userInterests.includes(tag)));

      setJobs(jobsData);
      setCourses(coursesData);
    };

    fetchUserInterests().then(fetchRecords);
  }, [userInterests]);

  return (
    <div className="main-container">
      <h2>Courses</h2>
      <div className="card-container">
        {courses.map((course, index) => (
          <div key={index} className="card">
            <img src={course.imageUrl} alt={course.courseName} className="course-image" />
            <div className="card-body">
              <h3>{course.courseName}</h3>
              <p>Level: {course.courseLevel}</p>
              <a href={course.link} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          </div>
        ))}
      </div>

      <h2>Jobs</h2>
      <div className="card-container">
        {jobs.map((job, index) => (
          <div key={index} className="card">
            <h3>{job.jobName}</h3>
            <p>{job.jobDesc}</p>
            <a href={job.links} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KMainPg;
