import React from "react";
import '../styles/Section.css'; 
import sarahIcon from "../assets/sarah.png";
import johnCIcon from "../assets/johnC.png";
import daisyIcon from "../assets/daisy.png";


const TeamSection = () => {
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
  ];

  return (
    <section className="team-section">
      <div className="team-header">
        <span className="team-label">OUR TEAM</span>
        <h2>We champion the bold to <br /> achieve the extraordinary</h2>
     <p>Ippsum is the result of synergy between our teams and our customers. Our company culture <br /> is focused on excellent productivity, customer satisfaction, respect for team.</p>
      </div>
      <div className="team-grid">
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

export default TeamSection;
