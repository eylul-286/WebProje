import React from 'react';
import '../styles/Not.css';

import "../components/Footer";
import Footer from '../components/Footer';
import noktalıIcon from "../assets/noktalı.png";
import yesilIcon from "../assets/yesil.png";



const Not = () => {
    return (
     <div className='Not'>
     
        <img src={noktalıIcon} alt="noktalı"  className='noktalı'/>
        <img src={yesilIcon} alt="yesil"  className='yesil'/>
<div className='notf'>
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>This Page Doesn't or was removed! We <br /> suggest you back to home</p>
    <button className='a-404'>Back to home</button>
</div>

<Footer/>
     </div>


    );
  };
  
  export default Not;