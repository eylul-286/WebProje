import React from 'react';
import aboutIcon from "../assets/about.png";
import "../styles/about.css";
import "../components/Title";
import Title from './Title';
import Number from './Number';
import ourIcon from "../assets/our.png";
import tikIcon from "../assets/tik.png";
import InfoCard from "../components/InfoCard";
import grow1Icon from "../assets/grow1.png";
import grow2Icon from "../assets/grow2.png";
import grow3Icon from "../assets/grow3.png";
import grow4Icon from "../assets/grow4.png";
import videoIcon from "../assets/video.png";
import  "../components/Section";
import Section from './Section';
import ConsultCard from './ConsultCard';
import "../components/Footer";
import Footer from '../components/Footer';











const AnotherPage = () => {
  return (
    <div className='services'>



      <div className='picture'>
        <img src={aboutIcon} alt="aboutIcon" className='about-pic' />
        <div className='picture-main'>
          <div className='title-services'>

            <Title title="SERVİCES" size="small" color="black" backgroundColor="#FFCC4A" />

          </div>
          <h1 className='crea'>Creative Services For Boost <br /> Your Business Growth</h1>
        </div>
      </div>

      <div className='our-vision'>

        <div className='title-services-a'>

          <Title title="OUR VISION" size="small" color="black" backgroundColor="#4EAF4E" />

        </div>
        <div className='main'>
          <img src={ourIcon} alt="ourIcon" className='our' />
          <h1>Turn your ideas into reality.</h1>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. <br /> Override the digital divide with additional from DevOps.</p>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. <br /> At the end of the day.</p>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity <br /> to beta test override the digital.</p>
          <img src={tikIcon} alt="tikIcon" className='tik' /> <br />
          <img src={tikIcon} alt="tikIcon" className='tik1' />
        </div>
      </div>

      <div className='num'>
        <Number />
      </div>


<div className='creative'>

 <div className='title-services-b'>

          <Title title="GROWİNG WITH OUR CLİENTS" size="small" color="black" backgroundColor="#FFCC4A" />

        </div>
<h1>Our core values & principles</h1>
<p className='capit'>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. <br /> Override the digital divide with additional from DevOps.</p>


<div className='orta'>
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

<div className='cont'>
<div className='title-services-c'>

<Title title="OUR HİSTORY" size="small" color="White" backgroundColor="#FFCC4A" />
</div>
<h1>Better Website Means A <br /> User Experience</h1>
<p>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused <br /> on excellent productivity, customer satisfaction, respect for team and individual achievements.</p>
<img src={videoIcon} alt="videoIcon"  className='video'/>

</div>

<Section/>

<ConsultCard/>

<Footer/>












    </div>

  );
};

export default AnotherPage;
