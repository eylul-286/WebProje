import React from "react";
import '../styles/Section2.css'; 

import sarahIcon from "../assets/sarah.png";
import johnCIcon from "../assets/johnC.png";
import daisyIcon from "../assets/daisy.png";

import mayaIcon from "../assets/maya.png";
import ryanIcon from "../assets/ryan.png";
import lillyIcon from "../assets/lilly.png";


const TeamSection2 = () => {
  const teamMembers = [
    {
      name: "Sarah Jasmine",
      title: "CEO at Company",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        image: sarahIcon,
      social: ["instagram", "facebook", "twitter"],
    },
    {
      name: "John Carter",
      title: "Manager",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      image: johnCIcon,
      social: ["instagram", "facebook", "twitter"],
    },
    {
      name: "Daisy Stella",
      title: "CEO at Company",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
        image:daisyIcon
      ,
      social: ["instagram", "facebook", "twitter"],
    },
    {
        name: "Maya Elizabeth",
        title: "CEO at Company",
        description:
          "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
          image:mayaIcon
        ,
        social: ["instagram", "facebook", "twitter"],
      },
      {
        name: "Ryan Jackson",

        description:
          "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
          image:ryanIcon
        ,
        social: ["instagram", "facebook", "twitter"],
      },
      {
        name: "Lilly Victoria",
  
        description:
          "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
          image:lillyIcon
        ,
        social: ["instagram", "facebook", "twitter"],
      },
  ];

  return (
    <section className="team-section">
      <div className="team-header">
        <span className="team-label">OUR TEAM</span>
        <h2>Meet Our Great Team</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation.</p>
      </div>
      <div className="team-grid1">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-image">
              <img src={member.image} alt={member.name} />
              <span className="team-role">{member.title}</span>
            </div>
            <h3>{member.name}</h3>
            <p>{member.description}</p>
            <div className="team-social">
              {member.social.map((platform, i) => (
                <a key={i} href={`#${platform}`} className={`icon-${platform}`}>
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default TeamSection2;
