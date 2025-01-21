import React from "react";
import '../styles/ConsultCard.css'; 
import bookBackIcon from '../assets/bookBack.png';

const ConsultCard = () => {
  return (
    <div className="consult-card">
      <div className="left-content">
        <button className="book-now-button">BOOK NOW</button>
        <h1>Better Consult, <span>Better </span><br />Results </h1>
        <p>
          Our software development agency has a growth up to 30% per each year.
          If you are result-oriented, not afraid to take initiative – drop us a note and join our team!
        </p>
        <div className="contact">
  
          <div className="contact-number">+800 1234 654</div>
        </div>
      </div>

      <div className="right-content">
        <img src={bookBackIcon} alt="bookBack" className="bookBack" />
      </div>
    </div>
  );
};

export default ConsultCard;
