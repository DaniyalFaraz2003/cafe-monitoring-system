// src/components/LandingPage.jsx
import React from "react";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import img1 from '../../assets/logo.png';
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="bluecontainer">
      <div className="logoname">
        <img src={img1} alt="Contour Software Logo" className="logo" />
      </div>
      <div className="landing-container">
        <Navbar />
        <Landing />
      </div>
    </div>
  );
};

export default LandingPage;
