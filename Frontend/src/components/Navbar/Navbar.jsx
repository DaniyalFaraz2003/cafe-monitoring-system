// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/Login"  className="item">
        Login
      </Link>
      <Link to="/Dashboard" className="item">
        Dashboard
      </Link>
    </div>
  );
};

export default Navbar;
