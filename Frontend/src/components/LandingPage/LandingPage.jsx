// src/components/LandingPage.jsx
import React from "react";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="bluecontainer">
      <div className="logoname">
     <h1>Contour Software</h1>
      </div>
      <div className="landing-container">
        <Navbar />
        <Landing />
      </div>
    </div>
  );
};

export default LandingPage;
