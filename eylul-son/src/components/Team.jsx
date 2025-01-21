import React from 'react';
import '../styles/Team.css'; 
import consultorsIcon from "../assets/consultors.png";
import Title from './Title';
import  "../components/Section2";
import Section2 from './Section2';
import Footer from './Footer';
import handIcon from "../assets/hand.png";


const Team = () => {
  return (
    <div className='team-main4'>
        <img src={consultorsIcon} alt="consultors"  className='const-icon'/>
        <div className='team-title'>
        
        <div className='title-services-8'>
<Title title="TEAM " size="small" color="black" backgroundColor="#FFCC4A" />
</div>
        <h1 className='the'>The Consultors</h1>
        </div>
 


<Section2/>
<button className='section-button'>
    Join our team
</button>



<div class="contact-container1">
  <div class="contact-content">
    <span class="contact-tag">CONTACT</span>
    <h1 class="contact-title">Ready To Talk?</h1>
    <p class="contact-text">
      Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
      Massa placerat duis ultricies lacus sed turpis. Pellentesque
      pellentesque habitant morbi tristique.
    </p>
    <div class="contact-form1">
      <input
        type="email"
        class="contact-input"
        placeholder="your mail address"
      />
      <button class="contact-button1">Send Message</button>
    </div>
  </div>
  <div class="contact-image">
    <img
      src={handIcon}
      alt="Hands Circle"
    />
  </div>
</div>






<Footer/>

    </div>
  );
};

export default Team;  
