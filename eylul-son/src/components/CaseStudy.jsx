import React from 'react';
import '../styles/CaseStudy.css';
import CaseStudyBackIcon from "../assets/CaseStudyBack.png";
import "../components/Footer";
import Footer from '../components/Footer';
import Title from './Title';
import InfoCardPictures from "../components/InfoCardPictures";
import taxes1Icon from '../assets/taxes1.png';
import taxes2Icon from '../assets/taxes2.png';
import taxes3Icon from '../assets/taxes3.png';
import taxes4Icon from '../assets/taxes4.png';
import taxes5Icon from '../assets/taxes5.png';
import PlusIcon from '../assets/Plus.png';
import ContactUs from './ContactUs';


const CaseStudy = () => {
    return (
     <div className='CaseStudy'>
   <img src={CaseStudyBackIcon} alt="CaseStudyBack"  className='case-icon'/>
            
   <div className='team-title1'>
        
   <div className='title-services-9'>
<Title title="CASE STUDIES " size="small" color="black" backgroundColor="#FFCC4A" />
</div>
        <h1 className='case'>Case Studies</h1>
        </div>

<div className='bank'>
    <ul>
        <li className='all'>All</li>
        <li>Taxes & Efficiency</li>
        <li>Investment banking</li>
        <li>Financial Plan</li>
        <li>Audit & Evaluation</li>
    </ul>
</div>






        <div className='dis-cerceve1'>
          <div className="pictures">
            <div className='bela'>
            <InfoCardPictures backgroundImg={taxes1Icon} width="330px" height="300px" title1="Taxes & Efficiency"
              h2="Business" icon={PlusIcon} />
              <h2>Taxes & Efficiency</h2>
              <p>Business</p>
</div>
            <InfoCardPictures backgroundImg={taxes2Icon} width="330px" height="300px" />
            <InfoCardPictures backgroundImg={taxes3Icon} width="330px" height="300px" />
            <InfoCardPictures backgroundImg={taxes4Icon} width="330px" height="300px" />
            <InfoCardPictures backgroundImg={taxes5Icon} width="330px" height="300px" />
            <InfoCardPictures backgroundImg={taxes5Icon} width="330px" height="300px" />
          </div>
        </div>

<ContactUs/>
<Footer/>
     </div>


    );
  };
  
  export default CaseStudy;
  