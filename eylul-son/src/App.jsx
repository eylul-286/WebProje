import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Header2 from './components/Header2'; 
import Main1 from './components/Main1';
import About from './components/About';
import Services from './components/Services';
import ServiceSingle from "./components/ServiceSingle";
import Team from "./components/Team";
import TeamSingle from "./components/TeamSingle";
import CaseStudy from "./components/CaseStudy";
import ChangeLog from "./components/ChangeLog";
import Protection from "./components/Protection";
import Not from "./components/Not";




const App = () => {
  return (
    <Router>
      {/* Bu bileşenler her sayfada gösterilmek isteniyorsa Routes'ın dışına alınmalı */}
      <Header2 />
      <Header />
      
      <Routes>
        {/* Ana sayfa */}
        <Route path="/" element={<Main1 />} />
        
        {/* Yeni sayfa */}
        <Route path="/About" element={<About />} />

        <Route path="/Services" element={<Services />} />
        <Route path="/ServiceSingle" element={<ServiceSingle />} />
        <Route path="/guest" element={<guest />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/TeamSingle" element={<TeamSingle />} />
        <Route path="/CaseStudy" element={<CaseStudy />} />
        <Route path="/ChangeLog" element={<ChangeLog />} />
        <Route path="/Protection" element={<Protection />} />
        <Route path="/Not" element={<Not />} />

      
      </Routes>
    </Router>
  );
};

export default App;




