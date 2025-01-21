import React from 'react';
import "../styles/ServiceSingle.css";
import "../components/Title";
import Title from './Title';
import servicesingleIcon from "../assets/servicesingle.png";
import grow1Icon from "../assets/grow1.png";
import grow2Icon from "../assets/grow2.png";
import grow3Icon from "../assets/grow3.png";
import grow4Icon from "../assets/grow4.png";
import InfoCard from '../components/InfoCard';
import videoIcon from "../assets/video.png";
import tikIcon from "../assets/tik.png";
import ourIcon from "../assets/our.png";
import a1Icon from '../assets/a1.png';
import a2Icon from '../assets/a2.png';
import a3Icon from '../assets/a3.png';
import a4Icon from '../assets/a4.png';
import a5Icon from '../assets/a5.png';
import a6Icon from '../assets/a6.png';
import ssIcon from "../assets/ss.png";
import "../components/Footer";
import Footer from '../components/Footer';
import ContactUs from './ContactUs';
import ContactUIcon from "../assets/ContactU.png";
import Guest from './Guest';
import "../components/Guest";

const ServiceSingle = () => {
  return (
    
    <div className="service-single">
      
       
    <img src={servicesingleIcon} alt="servicesingle" className='ser-icon'/>
   <div className='service-4'>
   <div className='title-services-7'>
<Title title="SERVİCE SİNGLE" size="small" color="black" backgroundColor="#FFCC4A" />
</div>
<h1>Services Details</h1>


   </div>
    

   <div className='creative-service'>

<div className='title-services-s'>

         <Title title="GROWİNG WITH OUR CLİENTS" size="small" color="black" backgroundColor="#FFCC4A" />

       </div>
<h1>Our core values & principles</h1>
<p className='capit'>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. <br /> Override the digital divide with additional from DevOps.</p>
<button className='get'>Get in touch</button>

<div className='orta-service'>
     <InfoCard
     title="Creative Ideas"
     description={
       <>
         Lorem ipsum dolor sit amet,<br />
         consectetur adipiscing elit.<br />
         Mauris eget accumsan augue.<br />
         Donec aliquam.
       </>
     }
     icon={grow2Icon}
     backgroundColor="#FAFAFA"
     textColor="#595566"
   />
     
     <InfoCard
     
       title="Best Features"
       description={
         <>
           Lorem ipsum dolor sit amet,<br />
           consectetur adipiscing elit.<br />
         
         </>
       }
       icon={grow3Icon}
       backgroundColor="#FAFAFA"
       textColor="#595566"
     
     />

        
       <InfoCard
       title="Experience"
      
 description={
   <>
     Lorem ipsum dolor sit amet,<br />
     consectetur adipiscing elit.<br />
     Mauris eget accumsan augue.<br />
     Donec aliquam.
   </>
 }
 icon={grow1Icon}
 backgroundColor="#FAFAFA"
 textColor="#595566"
/>

       
         <InfoCard
       title="Easy Solutions"
       description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
       icon={grow4Icon}
       backgroundColor="#FAFAFA"
       textColor="#595566"
     />
     </div>
</div>




<div className='main-s'>
          <img src={ourIcon} alt="ourIcon" className='our-s' />
          <h1>Turn your ideas into reality.</h1>
          <div className='p'>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. <br /> Override the digital divide with additional from DevOps.</p>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. <br /> At the end of the day.</p>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity <br /> to beta test override the digital.</p>
          </div>
          <img src={tikIcon} alt="tikIcon" className='tik2' /> <br />
          <img src={tikIcon} alt="tikIcon" className='tik3' />
    
      </div>




      <div className='marka-s'>
        <img src={a1Icon} alt="a1 Icon" className='a1' />
        <img src={a2Icon} alt="a2 Icon" className='a2' />
        <img src={a3Icon} alt="a3 Icon" className='a3' />
        <img src={a4Icon} alt="a4 Icon" className='a4' />
        <img src={a5Icon} alt="a5 Icon" className='a5' />
        <img src={a6Icon} alt="a6 Icon" className='a6' />
      </div>

<div className='cont-s'>
<div className='title-services-s'>

<Title title="OUR HİSTORY" size="small" color="White" backgroundColor="#4EAF4E" />
</div>
<h1>Strategy for Every Stage in <br /> the Client's Journey</h1>

<img src={ssIcon} alt="ssIcon"  className='ss'/>

</div>

<div className='contactU'><ContactUs/></div>

<img src={ContactUIcon} alt="ContactU" className='contacticon' />


<Guest/>

  





<Footer/>

    </div>
  );
}

export default ServiceSingle;

  
  