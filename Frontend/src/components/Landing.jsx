import React from "react";
import img from "../images/foodpic.png";
function Landing() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to Cafe Monitoring System</h1>
      <p className="landing-description">
        This is a system that helps you monitor your cafe and manage your
        customers efficiently.
      </p>
      <div className="pic">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Landing;
