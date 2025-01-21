import React from 'react';
import '../styles/Protection.css';
import changelogbackIcon from "../assets/changelogback.png";
import "../components/Footer";
import Footer from '../components/Footer';
import Title from './Title';
import teamspiceIcon from "../assets/teamspice.png";

const Protection = () => {
    return (
     <div className='Protection'>
   <img src={changelogbackIcon} alt="changelogback"  className='change-icon'/>
            
   <div className='team-title3'>
        
   <div className='title-services-11'>
<Title title="PROTECTİON " size="small" color="black" backgroundColor="#FFCC4A" />
</div>
        <h1 className='protection'>Password Protection</h1>
        </div>


<div className='version2'>
<img src={teamspiceIcon} alt="teamspice2" className='teamspice2' />
    <h1>Enter Password</h1>
    <div className='submit-pro'> <p>Enter Your Password</p>
  </div>
  <button>    Submit</button>
</div>

<Footer/>
     </div>


    );
  };
  
  export default Protection;