import React, { useState } from "react";
import { db, storage } from '../firebase'; // Import storage from firebase
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase storage functions
import "../Css/CourseForm.css";

export default function CourseForm() {
  const [courseName, setCourseName] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [tags, setTags] = useState([]);
  const [link, setLink] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [image, setImage] = useState(null); // State for holding the uploaded image file
  const [imageUrl, setImageUrl] = useState(""); // State for holding the image URL after upload
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if an image is selected
    if (!image) {
      setErrorMessage("Please select an image.");
      return;
    }

    const courseData = {
      courseName,
      courseDesc,
      courseLevel,
      tags,
      link,
      imageUrl: "", // Placeholder for now; will be updated after image upload
    };

    try {
      // Upload image to Firebase Storage
      const storageRef = ref(storage, `courseImages/${image.name}`);
      await uploadBytes(storageRef, image);

      // Get download URL for the image
      const url = await getDownloadURL(storageRef);
      courseData.imageUrl = url; // Update course data with the image URL

      // Check if the course already exists based on name and link
      const courseQuery = query(collection(db, "CourseRecords"),
        where("courseName", "==", courseData.courseName),
        where("link", "==", courseData.link)
      );

      const courseSnapshot = await getDocs(courseQuery);

      if (!courseSnapshot.empty) {
        throw new Error("Course with the same name and link already exists!");
      }

      // Add course if it doesn't exist
      await addDoc(collection(db, "CourseRecords"), courseData);

      // Add tags to Tags collection
      const tagsCollection = collection(db, "Tags");
      for (const tag of tags) {
        const tagQuery = query(tagsCollection, where("tagName", "==", tag));
        const tagSnapshot = await getDocs(tagQuery);

        if (tagSnapshot.empty) {
          // Add the tag if it doesn't exist
          await addDoc(tagsCollection, { tagName: tag });
        }
      }

      alert("Course Information Successfully Added");

      // Reset the form fields
      setCourseName("");
      setCourseDesc("");
      setCourseLevel("");
      setTags([]);
      setLink("");
      setTagInput("");
      setImage(null);
      setImageUrl("");

    } catch (error) {
      console.error("Error creating course entry:", error);
      setErrorMessage(error.message); // Set the error message state
    }
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner-prop">
        <form onSubmit={handleSubmit}>
          <h3>Course Details</h3>

          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <div className="mb-3">
            <label>Course Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter course name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Course Description</label>
            <textarea
              className="form-control"
              placeholder="Enter course description"
              value={courseDesc}
              onChange={(e) => setCourseDesc(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label>Course Level</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter course level"
              value={courseLevel}
              onChange={(e) => setCourseLevel(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Tags</label>
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a tag and press Add"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
              />
              <button className="btn btn-secondary ms-2" onClick={handleAddTag}>
                Add
              </button>
            </div>
            <div className="mt-2">
              {tags.map((tag, index) => (
                <span key={index} className="badge bg-primary me-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label>Link</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter course link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Course Image</label>
            <input
              type="file"
              className="form-control"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
