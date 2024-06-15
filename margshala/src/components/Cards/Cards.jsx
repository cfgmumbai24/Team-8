// import React from 'react';
// import './Cards.css'; // Import CSS for styling the card component

// const Card = ({ frontContent, backContent }) => {
//   return (
//     <div className="flip-card">
//       <div className="flip-card-inner">
//         <div className="flip-card-front">
//           <p>{frontContent}</p>
//         </div>
//         <div className="flip-card-back">
//           <p>{backContent}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

// Card.jsx
import React from 'react';
import './Cards.css'; // Import CSS for styling the card component

const Card = ({ frontContent, backContent, onClick }) => {
  return (
    <div className="flip-card" onClick={onClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>{frontContent}</p>
        </div>
        <div className="flip-card-back">
          <p>{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
