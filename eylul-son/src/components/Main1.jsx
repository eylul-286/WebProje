import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import '../styles/Main1.css';
import anaekranIcon from '../assets/anaekran.png'; // İmi (icon) görselini buraya ekleyin
import notIcon from '../assets/not.png';
import a1Icon from '../assets/a1.png';
import a2Icon from '../assets/a2.png';
import a3Icon from '../assets/a3.png';
import a4Icon from '../assets/a4.png';
import a5Icon from '../assets/a5.png';
import a6Icon from '../assets/a6.png';
import businessIcon from '../assets/business.png';
import happyIcon from '../assets/happy.png';
import teamIcon from '../assets/team.png';
import marketIcon from '../assets/market.png';
import photo2Icon from '../assets/photo2.png';
import InfoCard from "../components/InfoCard";
import b1Icon from "../assets/b1.png";
import b2Icon from "../assets/b2.png";
import b3Icon from "../assets/b3.png";
import b4Icon from "../assets/b4.png";
import b6Icon from "../assets/b6.png";
import b7Icon from "../assets/b7.png";
import Title from './Title';
import no1Icon from '../assets/no1.png';
import no2Icon from '../assets/no2.png';
import no3Icon from '../assets/no3.png';
import grow1Icon from '../assets/grow1.png';
import grow2Icon from '../assets/grow2.png';
import grow3Icon from '../assets/grow3.png';
import grow4Icon from '../assets/grow4.png';
import InfoCardPictures from "../components/InfoCardPictures";
import BackgroundProccIcon from "../assets/BackgroundProcc.png";
import taxes1Icon from '../assets/taxes1.png';
import taxes2Icon from '../assets/taxes2.png';
import taxes3Icon from '../assets/taxes3.png';
import taxes4Icon from '../assets/taxes4.png';
import taxes5Icon from '../assets/taxes5.png';
import PlusIcon from '../assets/Plus.png';
import manIcon from '../assets/man.png';
import Number from './Number';
import EllipseblackIcon from '../assets/Ellipseblack.png';
import EllipseyellowIcon from '../assets/Ellipseyellow.png';
import ConsultCard from './ConsultCard';
import bookBackIcon from '../assets/bookBack.png';
import blog1Icon from '../assets/blog1.png';
import blog2Icon from '../assets/blog2.png';
import johnIcon from '../assets/john.png';
import nayraIcon from '../assets/nayra.png';
import ContactUs from './ContactUs';
import Footer from './Footer';




const Main1 = () => {
  return (
    
    <div className="card-container">

      <img src={anaekranIcon} alt="Anaekran Icon" className="icon-A" />

      {/* Kart İçeriği */}
      <div className="card">
        <h2 className="card-title">Your small business <br />
          growth advisors</h2>
        <p className="card-paragraph">
          Get help from Alex Moore, a professional business coach with <br /> advanced experience on growth and business scaling.
        </p>

        {/* Butonlar */}
        <div className="card-buttons">
          <button className="button-service">Our Service</button>
          <button className="button-not">
            <img src={notIcon} alt="Not Icon" className="not-icon" />
            Book a Meeting
          </button>
        </div>

      </div>
      <div className='marka'>
        <img src={a1Icon} alt="a1 Icon" className='a1' />
        <img src={a2Icon} alt="a2 Icon" className='a2' />
        <img src={a3Icon} alt="a3 Icon" className='a3' />
        <img src={a4Icon} alt="a4 Icon" className='a4' />
        <img src={a5Icon} alt="a5 Icon" className='a5' />
        <img src={a6Icon} alt="a6 Icon" className='a6' />
      </div>

      <div className="about-us-container">
        <div className="about-us">
          <div className="about-text">
            <span className="about-label">ABOUT US</span>
            <h3>About our Consulting <br />Agency Team</h3>
            <p className='parag1'>We create experiences and build products that <br />
              make businesses grow.</p>
            <p className='parag2'>Get help from Alex Moore, a professional business coach <br />with advanced experience on growth and business scaling.</p>

            <hr className='horizontal-line'></hr>
            <div className="service-info">
              <div className="service-item">
                <img src={businessIcon} alt="Business Icon" className='business-icon' />
                <span className='dort'>400+ </span>
                <span className='bus'>Business Services</span>
              </div>
              <hr class="vertical-line"></hr>

              <div className="service-item">
                <img src={happyIcon} alt="Happy Icon" className='happy-icon' />
                <span className='yuz'>100+ </span>
                <span className='hap'>Happy Customer</span>
              </div>
            </div>
            <div className="about-image">
              <div className='photo2'>
                <img src={photo2Icon} alt="Photo Icon" className='photo-icon' />
              </div>
              <img src={teamIcon} alt="Team Icon" className='team-icon' />
              <div className="market-experience">
                <img src={marketIcon} alt="Market Icon" className='market-icon' />
                <p className='elli'>50+</p>
                <span className='market-title'>Market <br />
                  Experiences</span>
              </div>
            </div>
          </div>


        </div>
      </div>





      <div className='main-services'>
        <div className='title-servicess'>
          <Title title="SERVİCES" backgroundColor="#4EAF4E" size="small" color="white" />
        </div>
        <div className='titleü'>
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


      <div className='MainPG'>
        <div className='mainP'>
        <div className='proccess-1'>

<Title title="PROCCESS" backgroundColor="#4EAF4E" size="small" color="white"  />
</div>
          <div> 
     

            <h2>There have some easy <br /> steps to join with us!</h2>

            <p>Leverage agile frameworks to provide a robust synopsis for high level <br /> overviews. Iterative approaches to corporate strategy foster <br /> collaborative thinking to further the overall value proposition.</p>
            <div className='number'>
              <div className='no1'>
                <div class="horizontal-line"></div>
                <img src={no1Icon} alt="No1 Icon" className='no1-icon' />
                <h4>Setup Account</h4>
                <p>We understand the importance of approaching each work integrally.
                </p>
                <div class="horizontal-line"></div>
              </div>
              <div className='no2'>
                <img src={no2Icon} alt="No2 Icon" className='no2-icon' />
                <h4>Setup Account</h4>
                <p>We understand the importance of approaching each work integrally.
                </p>
                <div class="horizontal-line"></div>
              </div>
              <div className='no3'>
                <img src={no3Icon} alt="No3 Icon" className='no3-icon' />

                <h4>Setup Account</h4>
                <p>We understand the importance of approaching each work integrally.
                </p>
                <div class="horizontal-line"></div>
              </div>
            </div>
          </div>

        </div>



        <div className='mainG'>
          <div className='growing'>
            <Title title="GROWİNG WİTH OUR CLİENTS" backgroundColor="#FFCC4A" size="small" color="black"
            />
          </div>
          <h2>30 Years of Experience</h2>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta <br /> test. Override the digital divide with additional from DevOps. <br />
            Leverage agile frameworks to provide a robust synopsis for high level <br /> overviews. Iterative approaches to corporate strategy foster collaborative <br /> thinking to further the overall value proposition.</p>

          <div className='grow-card'>

            <InfoCard
              title="Consistency"
              description="Podcasting operational change management  workflow."
              icon={grow1Icon}
              backgroundColor="#FAFAFA"
              textColor="#595566"
            />
            <InfoCard
              title="Improvement"
              description="Podcasting operational change management  workflow."
              icon={grow2Icon}
              backgroundColor="#FAFAFA"
              textColor="#595566"
            />
            <InfoCard
              title="Branching"
              description="Podcasting operational change management  workflow."
              icon={grow3Icon}
              backgroundColor="#FAFAFA"
              textColor="#595566"
            />
            <InfoCard
              title="Company Growth"
              description="Podcasting operational change management  workflow."
              icon={grow4Icon}
              backgroundColor="#FAFAFA"
              textColor="#595566"
            />



          </div>

        </div>




      </div>


      <div className="example-page">
        <div className='back'>
          <img src={BackgroundProccIcon} alt="BackgroundProcc" className='BackgroundProcc-icon' /></div>

        <h2>Our client, global analytical techno  <br />company, wanted to build market.</h2>
        <div className='proccess-z'>
          <Title title="PROCCESS" backgroundColor="#4EAF4E" size="small" color="white" />
        </div>



        <div className='dis-cerceve'>
          <div className="pictures">
            <InfoCardPictures backgroundImg={taxes1Icon} width="330px" height="300px" title1="Taxes & Efficiency"
              h2="Business" icon={PlusIcon} />

            <InfoCardPictures backgroundImg={taxes2Icon} width="330px" height="300px" />
            <InfoCardPictures backgroundImg={taxes3Icon} width="330px" height="300px" />
            <InfoCardPictures backgroundImg={taxes4Icon} width="330px" height="300px" />
            <InfoCardPictures backgroundImg={taxes5Icon} width="330px" height="300px" />
            <InfoCardPictures backgroundImg={taxes5Icon} width="330px" height="300px" />
          </div>
        </div>
      </div>


      <div>
        <Number />
      </div>

      <div className='feedback'>
        <div className='proccess-a'>

          <Title title="CLİENT FEEDBACK" backgroundColor="#4EAF4E" size="small" color="white" />
        </div>
        <div class="container1">
          <div class="content">
            <p class="paragraph">
              Lorem ipsum dolor sit amet, <br />
              <span class="highlight-gray">adipiscing elit</span>,
              <span class="highlight-gray">sed do <br />eiusmod</span> tempor incididunt ut labore et dolore
            </p>
          </div>

          <div class="image-container1">
            <button class="prev-btn">
              <img src={EllipseyellowIcon} alt="Ellipseyellow" className='Ellipseyellow-icon' />
              <p>Prev</p></button>
            <div class="image-circle">
              
              <img src={manIcon} alt="man" class="man-icon" />
         
            </div>
            <button class="next-btn">
              <img src={EllipseblackIcon} alt="Ellipseblack" className='Ellipseblack-icon' />
              <p>Next</p></button>
          </div>
          <h4>Kathleen Smith
            <br />Web Designer
          </h4>
          </div>
     
        </div>
<div> <ConsultCard/></div>


<div className="main-container">
      <div className="header">
        <span className="badge">BLOG</span>
        <h1>Take a look at our latest <br /><a href="/"> articles & resources</a></h1>
        <button className="more-news-btn">More News</button>
      </div>

      <div className="articles-grid">
        {/* İlk Kart */}
        <div className="article-card">
          <img src={blog1Icon} alt="blog1" className="blog1-icon" />
          <h2>Consulting Fees Study 2019 (And How To Raise Your Rates)</h2>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to 
            corporate strategy foster collaborative thinking to further the overall value proposition.
          </p>
          <div className="author-info">
            <img src={johnIcon} alt="john" className="john-icon" />
            <div className="author-details">
              <span>John Carter</span> | <span>September 1, 2022</span>
            </div>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        {/* İkinci Kart */}
        <div className="article-card">
          <img src={blog2Icon} alt="blog2 " className="blog2-icon" />
          <h2>What is growth hacking and how to apply it to your startup</h2>
          <p>
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to 
            corporate strategy foster collaborative thinking to further the overall value proposition.
          </p>
          <div className="author-info">
            <img src={nayraIcon} alt="nayra" className="nayra-icon" />
            <div className="author-details">
              <span>Nayra Melson</span> | <span>September 1, 2022</span>
            </div>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>


<ContactUs/>

<Footer/>


























    </div>







  );
};

export default Main1;
