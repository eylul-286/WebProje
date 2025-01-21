import React from "react";
import PropTypes from "prop-types";
import '../styles/Title.css'; 

const Title = ({ title, backgroundColor, size ,color}) => {
  return (
    <div className={`custom-box ${size}`} style={{ backgroundColor,color }}>
      <span className="custom-box-title">{title}</span>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired, // Başlık zorunlu
  backgroundColor: PropTypes.string, // Arka plan rengi
  size: PropTypes.oneOf(["small", "medium", "large"]), // Boyut
  color:PropTypes.string
};

export default Title;