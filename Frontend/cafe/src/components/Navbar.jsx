// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/Login" style={{ textDecoration: "none",color:"#6c584c" }} className="item">
        Login
      </Link>
      <Link to="/SignUp" style={{ textDecoration: "none" ,color:"#6c584c"}} className="item">
        Signup
      </Link>
      <Link to="/Dashboard" style={{ textDecoration: "none" ,color:"#6c584c"}} className="item">
        Dashboard
      </Link>
    </div>
  );
};

export default Navbar;
