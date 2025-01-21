import React from "react";
import PropTypes from "prop-types";
import '../styles/InfoCardPictures.css';

const InfoCardPictures= ({ backgroundImg, width, height ,title1}) => {
  return (
    <div
      className="info-card-pictures"
      style={{
        backgroundImage: backgroundImg ? `url(${backgroundImg})` : "none", // Arka plan resmi
        backgroundSize: "cover", // Resmin kartın boyutunu doldurması için
        backgroundPosition: "center", // Resmin ortalanması
        width,
        height,
        title1,
      }}
    ></div>
  );
};

InfoCardPictures.propTypes = {
  backgroundImg: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]), // Arka plan resmi
  width: PropTypes.string, // Genişlik (örn: "300px" veya "50%")
  height: PropTypes.string, // Yükseklik (örn: "200px")
  title1:PropTypes.string,
};

InfoCardPictures.defaultProps = {
  width: "300px", // Varsayılan genişlik
  height: "auto", // Varsayılan yükseklik
  title:"15px",
};

export default InfoCardPictures;
