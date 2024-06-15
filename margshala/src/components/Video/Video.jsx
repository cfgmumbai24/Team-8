import React from 'react';
import './Video.css'; // Import CSS for styling the video component

const Video = () => {
  return (
    <div className="container my-2">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="embed-responsive embed-responsive-16by9">
            <video className="embed-responsive-item" controls autoPlay muted loop>
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
