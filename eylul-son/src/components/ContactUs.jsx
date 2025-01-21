import React from 'react';
import '../styles/ContactUs.css';
import oclockIcon from '../assets/oclock.png';
import locationIcon from '../assets/location.png';
import yellowcallIcon from '../assets/yellowcall.png';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="contact-info">
                <span className="badge">PROCESS</span>
                <h1>Contact Us. It's Easy.</h1>
                <p>
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.
                </p>

                <div className="contact-detail">
                    <div className="icon">
                        <img src={oclockIcon} alt="oclock Icon" className="oclock" />
                    </div>
              
                        <h2>Call Today</h2>
                        <p>+1 800 100 900</p>
                    
                </div>

                <div className="contact-detail">
                    <div className="icon">  <img src={yellowcallIcon} alt="yellowcall Icon" className="yellowcall" /></div>
                    <div>
                        <h2>Monday to Friday</h2>
                        <p>9AM - 5PM</p>
                    </div>
                </div>

                <div className="contact-detail">
                    <div className="icon">        <img src={locationIcon} alt="location Icon" className="location" /></div>
                    <div>
                        <h2>USA Office</h2>
                        <p>195 Devonshire St Boston, MA 02110</p>
                    </div>
                </div>
 
            </div>
            <div className="contact-form">
                <div className="form-group">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                </div>

                <div className="form-group">
                    <input type="text" placeholder="Phone" />
                    <input type="text" placeholder="Company (optional)" />
                </div>

                <div className="form-group">
                    <textarea placeholder="Briefly tell us about your project and your current goals. How can we help you?"></textarea>
                </div>

                <button className="send-message-btn">Send Message</button>
            </div>
        </div>
    );
};

export default ContactUs;
