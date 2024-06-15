import React, { useState } from "react";
import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import "../Css/WorkshopForm.css";

export default function WorkshopForm() {
  const [workshopName, setWorkshopName] = useState("");
  const [workshopDesc, setWorkshopDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [date, setDate] = useState("");
  const [mentor, setMentor] = useState("");
  const [mentorSite, setMentorSite] = useState("");
  const [type, setType] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workshopData = {
      workshopName,
      workshopDesc,
      tags,
      date,
      mentor,
      mentorSite,
      type,
    };

    try {

      const workshopQuery = query(collection(db, "WorkshopRecords"), 
        where("workshopName", "==", workshopData.workshopName),
        where("date", "==", workshopData.date)
      );

      const workshopSnapshot = await getDocs(workshopQuery);

      if (!workshopSnapshot.empty) {
        throw new Error("Workshop with the same name and date already exists!");
      }

      // Add workshop if it doesn't exist
      await addDoc(collection(db, "WorkshopRecords"), workshopData);

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

      alert("Workshop Information Successfully Added");

      // Reset the form fields
      setWorkshopName("");
      setWorkshopDesc("");
      setTags([]);
      setDate("");
      setMentor("");
      setMentorSite("");
      setType("");
      setTagInput("");
    } catch (error) {
      console.error("Error creating workshop entry:", error);
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

  return (
    <div className="auth-wrapper">
      <div className="auth-inner-prop">
        <form onSubmit={handleSubmit}>
          <h3>Workshop Details</h3>

          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <div className="mb-3">
            <label>Workshop Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter workshop name"
              value={workshopName}
              onChange={(e) => setWorkshopName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Workshop Description</label>
            <textarea
              className="form-control"
              placeholder="Enter workshop description"
              value={workshopDesc}
              onChange={(e) => setWorkshopDesc(e.target.value)}
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
            <label>Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter workshop date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Mentor</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter mentor name"
              value={mentor}
              onChange={(e) => setMentor(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Mentor Website</label>
            <input
              type="url"
              className="form-control"
              placeholder="Enter mentor website"
              value={mentorSite}
              onChange={(e) => setMentorSite(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Type</label>
            <select 
              className="form-control"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
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
