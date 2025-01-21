import React from 'react';
import '../styles/ChangeLog.css';
import changelogbackIcon from "../assets/changelogback.png";
import "../components/Footer";
import Footer from '../components/Footer';
import Title from './Title';
import teamspiceIcon from "../assets/teamspice.png";

const ChangeLog = () => {
    return (
     <div className='ChangeLog'>
   <img src={changelogbackIcon} alt="changelogback"  className='change-icon'/>
            
   <div className='team-title2'>
        
   <div className='title-services-10'>
<Title title="UPDATE " size="small" color="black" backgroundColor="#FFCC4A" />
</div>
        <h1 className='change'>Changelog</h1>
        </div>


<div className='version1'>
<img src={teamspiceIcon} alt="teamspice1" className='teamspice1' />
    <h1>Version 01</h1>
    <div className='initial'> <p>Initial Consultalk Webflow Template Release</p></div>
</div>

<Footer/>
     </div>


    );
  };
  
  export default ChangeLog;
  