import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header2.css'; 
import messageIcon from '../assets/message.png';
import callIcon from '../assets/call.png';

const Header2 = () => {
  return (
    <header className="header2">
      <div className="logo-container">
        <img src={messageIcon} alt="Message Icon" className="messsage" />
        <span className="brand-name">AskExperts</span>
      </div>

      <nav className="nav-menu">
        {/* Home Menü ve Alt Kategoriler */}
        <div className="menu-item">
          <Link to="/">Home</Link>
          <ul className="sub-menu">
            <li><Link to="/home/1">Sub Home 1</Link></li>
            <li><Link to="/home/2">Sub Home 2</Link></li>
          </ul>
        </div>

        {/* Pages Menü ve Alt Kategoriler */}
        <div className="menu-item">
          <Link to="/pages">Pages</Link>
          <ul className="sub-menu">
            <li><Link to="/pages/about">About</Link></li>
            <li><Link to="/pages/portfolio">Portfolio</Link></li>
          </ul>
        </div>

        {/* Services Menü ve Alt Kategoriler */}
        <div className="menu-item">
          <Link to="/Services">Services</Link>
          <ul className="sub-menu">
            <li><Link to="/Service/Single">Service Single</Link></li>
            <li><Link to="/services/development">Development</Link></li>
          </ul>
        </div>

        {/* Work Menü ve Alt Kategoriler */}
        <div className="menu-item">
          <Link to="/work">Work</Link>
          <ul className="sub-menu">
            <li><Link to="/work/projects">Projects</Link></li>
            <li><Link to="/work/case-studies">Case Studies</Link></li>
          </ul>
        </div>

        {/* Contact Menü ve Alt Kategoriler */}
        <div className="menu-item">
          <Link to="/contact">Contact</Link>
          <ul className="sub-menu">
            <li><Link to="/contact/form">Contact Form</Link></li>
            <li><Link to="/contact/locations">Locations</Link></li>
          </ul>
        </div>
      </nav>

      <div className="contact-info-tel">
        <img src={callIcon} alt="Call Icon" className="call" />
        <button className="button-tel">+ (888) 452 1505</button>
      </div>
    </header>
  );
};

export default Header2;


