import React from 'react';
import '../styles/Header.css'; 
import facebookIcon from '../assets/Facebook.png'; 
import instagramIcon from '../assets/Instagram.png';  
import twitterIcon from '../assets/Twitter.png'; 
import linkedInIcon from '../assets/LinkedIn.png'; 
import  saatIcon from '../assets/saat.png';
import  locIcon from '../assets/loc.png';


const Header = () => {
  return (
    <div className="cont">
      <div className="info">
      <div className="time-info">
    <img src={saatIcon} alt="saat Icon" className="time-info1" />
    <span className="time">Monday - Friday: 8AM - 9PM</span>
  </div>
        <div>
        <img src={locIcon} alt="loc Icon" className="loc-info" />
          <span className="time1">725 Park Ave, New York</span>
        </div>
        <div className='icons'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebookIcon} alt="Facebook Icon" className="icon" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={twitterIcon} alt="Twitter Icon" className="icon" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={linkedInIcon} alt="LinkedIn Icon" className="icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram Icon" className="icon" />
      </a>
        </div>

      </div>
      

    </div>
  );
}

export default Header;

