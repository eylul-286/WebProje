 // src/components/Services.jsx
import React from 'react';
import "../styles/Services.css";
import ServicesIcon from "../assets/Services.png";
import "../components/Title";
import Title from './Title';
import "../components/InfoCard";
import InfoCard from '../components/InfoCard';
import b1Icon from "../assets/b1.png";
import b2Icon from "../assets/b2.png";
import b3Icon from "../assets/b3.png";
import b4Icon from "../assets/b4.png";
import b6Icon from "../assets/b6.png";
import b7Icon from "../assets/b7.png";
import tradingIcon from "../assets/trading.png";
import tradIcon from "../assets/trad.png";
import bankIcon from "../assets/bank.png";
import transportIcon from "../assets/transport.png";
import basicanaIcon from "../assets/basicana.png";
import ContactUs from './ContactUs';
import Footer from './Footer';

const Services = () => {
  return (
    <div className='services'>



      <div className='picture'>
        <img src={ServicesIcon} alt="ServicesIcon" className='Services' />
        <div className='picture-main'>
          <div className='title-services-3'>

            <Title title="SERVİCES" size="small" color="black" backgroundColor="#FFCC4A" />

          </div>
          <h1 className='crea'>Creative Services For Boost <br /> Your Business Growth</h1>
        </div>
      </div>

      <div className='title-services-4'>
          <Title title="SERVİCES" backgroundColor="#4EAF4E" size="small" color="white" />
        </div>
      <div className='main-services-3'>
    
        <div className='title1'>
          Get Control Over Your Business I take <br />your finance to next level
        </div>
        <div className='info-card-container'>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", justifyContent: "center" }}>
            <InfoCard
              title="The Balance Sheet"
              description="Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
              icon={b1Icon}
              backgroundColor="#EBEBEB"
              textColor="#181818"


            />
            <InfoCard
              title="Financial Projections"
              description="Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling."
              icon={b2Icon}
              backgroundColor="#000000"
              textColor="#FFFFFF"
            />
            <InfoCard
              title="Funds and investments"
              description="Cash flow tracks the inflow and outflow of cash within a business."
              icon={b3Icon}
              backgroundColor="#EBEBEB"
              textColor="#181818"
            />
            <InfoCard
              title="Finance & Restructuring"
              description="Cash flow tracks the inflow and outflow of cash within a business."
              icon={b4Icon}
              backgroundColor="#EBEBEB"
              textColor="#181818"
            />
            <InfoCard
              title="Taxes & Efficiency"
              description="Cash flow tracks the inflow and outflow of cash within a business."
              icon={b6Icon}
              backgroundColor="#EBEBEB"
              textColor="#181818"
            />
            <InfoCard
              title="Investment banking"
              description="Cash flow tracks the inflow and outflow of cash within a business."
              icon={b7Icon}
              backgroundColor="#EBEBEB"
              textColor="#181818"
            />
          </div>
        </div>
      </div>



<div className='trading'>
<div className='title-services-5'>
          <Title title="PROCCESS" backgroundColor="#FFCC4A" size="small" color="BLACK" />
        </div>
<img src={tradingIcon} alt="trading" className='trading-icon' />
<h1>Our Consuting Service <br /> Development
<div className='bank1'>
  <img src={bankIcon} alt="bank1" className='bank-icon'/>
  <h4>Banking and Finance</h4>
  <p>Professionally fashion wireless leadership rather than <br /> prospective experiences my cardinate clicks-and-mortar <br /> testing whereas.</p>
</div>
<div className='transport'> 
<img src={transportIcon} alt="transport" className='transport-icon'/>
  <h4> Logistic and Transportation </h4>
  <p>Compellingly embrace empowered e-business after user <br /> friendly intellectual capital. Interactively actualize front- <br /> end processes.
</p>
</div>
<div className='trad'>
<img src={tradIcon} alt="trad" className='trad-icon' />
  <h4> Trading </h4>
  <p>Uniquely matrix economically sound value through <br />cooperative technology parallel task fully researched data <br /> and enterprise.</p>
</div>
</h1>
</div>



    <div className="pricing-section">
    <div className='title-services-6'>
          <Title title="PRİCİNG" backgroundColor="#4EAF4E" size="small" color="WHİTE" />
        </div>
      <h2 className="pricing-title">Our Pricing Plan</h2>
      <div className="pricing-cards">
        {/* Basic Plan */}
        <div className="pricing-card basic-plan">
          <div className='basic-ana'>
            <img src={basicanaIcon} alt="basicana" className='basic-icon' />
          <div className="pricing-card-header">
            <h3>Basic Plan</h3>
            <p>The argument in favor of using to filler text goes something.</p>
          </div>
          <div className="pricing-card-price">
            <h1>$35</h1>
            <p>MONTHLY</p>
          </div>
          </div>

          <ul className="pricing-card-features">
            <li>24/7 system monitoring</li>
            <li>Security management</li>
            <li>Secure finance backup</li>
            <li>Remote support</li>
          </ul>
          <button className="pricing-button">Get This Plan</button>
        </div>

        {/* Standard Plan */}
        <div className="pricing-card standard-plan">
          <div className='basic-ana'>
          <img src={basicanaIcon} alt="basic-ana" className='basic-icon'/>
          <div className="pricing-card-header">
            <h3>Standard Plan</h3>
            <p>The argument in favor of using to filler text goes something.</p>
          </div>
          <div className="pricing-card-price">
            <h1>$56</h1>
            <p className='mont'>MONTHLY</p>
          </div>
          </div>
          <ul className="pricing-card-features">
            <li>24/7 system monitoring</li>
            <li>Security management</li>
            <li>Secure finance backup</li>
            <li>Remote support</li>
          </ul>
          <button className="pricing-button">Get This Plan</button>
       
        </div>
        {/* Premium Plan */}
        <div className="pricing-card premium-plan">
          <div className='basic-ana'>
          <img src={basicanaIcon} alt="basic-ana"  className='basic-icon' />
          <div className="pricing-card-header">
            <h3>Standard Plan</h3>
            <p>The argument in favor of using to filler text goes something.</p>
          </div>
          <div className="pricing-card-price">
            <h1>$75</h1>
            <p>MONTHLY</p>
          </div>
          </div>
          <ul className="pricing-card-features">
            <li>24/7 system monitoring</li>
            <li>Security management</li>
            <li>Secure finance backup</li>
            <li>Remote support</li>
          </ul>
          <button className="pricing-button">Get This Plan</button>
        
      </div>
      </div>
    </div>


<ContactUs/>
<Footer/>

 














    </div>

  );
};

export default Services;

