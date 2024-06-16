import React, { useState } from 'react';
import './Interest.css';

function Interest() {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="interest-app">
      {isPopupVisible && (
        <div className="popup">
          <h2>Enter your location</h2>
          <input type="text" placeholder="Location" id="locationInput" />
          <button onClick={closePopup}>Submit</button>
        </div>
        
      )}
      {!isPopupVisible && (
        <>
        <h1>LOCAL OPPORTUNITIES</h1>
        <div className="gallery" >
          <div className="card">
            <a href="https://www.youtube.com/watch?v=Yk5YF1gvSEA" target="_blank" rel="noopener noreferrer">
              <img src="https://images.pexels.com/photos/221016/pexels-photo-221016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Farming" />
              <h3>Farming</h3>
              <p>Learn about sustainable farming practices.</p>
            </a>
          </div>
          <div className="card">
            <a href="https://www.youtube.com/watch?v=2cuGFRS-MhQ" target="_blank" rel="noopener noreferrer">
              <img src="https://images.pexels.com/photos/22823/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pottery" />
              <h3>Pottery</h3>
              <p>Explore the art of pottery making.</p>
            </a>
          </div>
          <div className="card">
            <a href="https://www.youtube.com/watch?v=1cj9-Y73Y3Q" target="_blank" rel="noopener noreferrer">
              <img src="https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Weaving" />
              <h3>Weaving</h3>
              <p>Discover traditional weaving techniques.</p>
            </a>
          </div>
          <div className="card">
            <a href="https://www.youtube.com/watch?v=ZG5qZsu7N2Y" target="_blank" rel="noopener noreferrer">
              <img src="https://images.pexels.com/photos/4792077/pexels-photo-4792077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Macramé" />
              <h3>Macramé</h3>
              <p>Get creative with macramé crafts.</p>
            </a>
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default Interest;
