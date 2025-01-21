import React from 'react';
import '../styles/TeamSingle.css'; 
import Footer from './Footer';
import TeamSingleIcon from "../assets/TeamSingle.png";
import FacebookblackIcon from '../assets/Facebookblack.png'; 
import InstagramblackIcon from '../assets/Instagramblack.png';  
import TwitterblackIcon from '../assets/Twitterblack.png'; 
import LinkedInblackIcon from '../assets/LinkedInblack.png'; 
import teamspiceIcon from '../assets/teamspice.png';


const TeamSingle = () => {
    return (
     <div className='TeamSingle'>
   
            <img src={TeamSingleIcon} alt="TeamSingle"  className='team-single'/>
            <div className='parfe'>
            <div className='iconss'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={FacebookblackIcon} alt="Facebook Icon" className="icons" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={TwitterblackIcon} alt="Twitter Icon" className="icons" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={LinkedInblackIcon} alt="LinkedIn Icon" className="icons" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={InstagramblackIcon} alt="Instagram Icon" className="icons" />
      </a>
        </div>
            <h2> Sarah Jasmine</h2> 
            <p>CEO at Company</p>
            <br />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br /> pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit sed do.</p>

             <h2>Past experience</h2>
             <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br /> pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <br /> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</div>

<div className='subscribe'>
    <img src={teamspiceIcon} alt="teamspice" className='teamspice' />
    <h1>Subscribe Our Newsletter</h1>
    <p>Build stronger Customer Relationships with Consultalk</p>

 <div className='button-subscribe'><input type="email" id="email" name="email" placeholder="Enter your email" input/> </div> 
  <button className='subscribe-buttons'type="button">Subscribe</button>
</div>




<Footer/>
     </div>


    );
  };
  
  export default TeamSingle;
  