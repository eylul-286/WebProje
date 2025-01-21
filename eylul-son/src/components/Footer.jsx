import React from 'react';
import '../styles/Footer.css';
import messageIcon from '../assets/message.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* Sol Bölüm */}
        <div className="footer-section">
          <div className="logo-section">
            <div className="icon-mes">
            <img src={messageIcon}alt="Message Icon" className="messsage" />
            </div>
            <div className="company-name">AskExperts</div>
          </div>
          <div className="social-media">
            <p>Fb. / Ig. / Tw. / Be.</p>
          </div>
        </div>

        {/* Ürünler Bölümü */}
        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li>Service</li>
            <li>FAQ</li>
            <li>Single Service</li>
            <li>Get Quote</li>
            <li>Prices</li>
          </ul>
        </div>

        {/* Şirket Bölümü */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>News</li>
            <li>Contacts</li>
            <li>Testimonials</li>
            <li>Our Team</li>
            <li>Our Approach</li>
          </ul>
        </div>

        {/* Adres Bölümü */}
        <div className="footer-section">
          <h3>Address</h3>
          <p>1700 W Blancke St, Kiev, port south USA, America</p>
          <button className="appointment-btn">Book an Appointment</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2022 Consultalk. All rights reserved | Terms of Service | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
