import React, { useState } from "react";
import { db } from '../firebase'; // Adjust the import path according to your folder structure
import { collection, addDoc } from "firebase/firestore";
import "../Css/JobForm.css"; // Adjust the import path for your CSS file

export default function JobForm() {
  const [jobName, setJobName] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [links, setLinks] = useState("");
  const [tagInput, setTagInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      jobName,
      jobDesc,
      tags,
      links,
    };

    try {
      await addDoc(collection(db, "JobRecords"), jobData);
      alert("Job Information Successfully Added");

      // Reset the form fields
      setJobName("");
      setJobDesc("");
      setTags([]);
      setLinks("");
      setTagInput("");
    } catch (error) {
      console.error("Error creating job entry:", error);
      alert("Something went wrong");
    }
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner-prop">
        <form onSubmit={handleSubmit}>
          <h3>Job Details</h3>

          <div className="mb-3">
            <label>Job Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter job name"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Job Description</label>
            <textarea
              className="form-control"
              placeholder="Enter job description"
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
            ></textarea>
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
            <label>Links</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter URL"
              value={links}
              onChange={(e) => setLinks(e.target.value)}
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
