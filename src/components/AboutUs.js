import React from "react";
import "./AboutUs.css";

const AboutUs = ({ companyName, description, yearFounded }) => {
  return (
    <div className="about-us">
      <h2 className="about-us__heading">About {companyName}</h2>
      <p className="about-us__description">{description}</p>
    </div>
  );
};

export default AboutUs;
