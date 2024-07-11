import React from "react";
import img from "../assets/foofpic.png";
function Landing() {
  return (
    <>
    <div className="inner-container">

   <div className="text">

      <h1 className="landing-title">Welcome to Cafe Monitoring System</h1>
      <p className="landing-description">
        This is a system that helps you monitor your cafe and manage your
        customers efficiently.
      </p>
   </div>
      <div className="pic">
        <img src={img} alt="" />
      </div>
    </div>
    </>
  );
}

export default Landing;
