import React from 'react';
import './Video.css'; // Import CSS for styling the video component

const Video = () => {
  return (
    <div className="container my-2">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="embed-responsive embed-responsive-16by9">
            <video className="embed-responsive-item" controls autoPlay muted loop>
              <source src="C:\Users\Ishita\OneDrive\Desktop\gg\Team-8\margshala\src\components\assets\big_buck_bunny_720p_1mb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;