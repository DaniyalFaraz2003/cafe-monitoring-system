import React from "react";
import { Link } from "react-router-dom";
import './InnerNavbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/"  className="item">
        Home
      </Link>
      <Link to="/Dashboard"  className="item">
        Dashboard
      </Link>
      <Link to="/Report"  className="item">
        Report
      </Link>
    </div>
  );
};

export default Navbar;