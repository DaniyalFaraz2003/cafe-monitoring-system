import React from "react";
import "./ReportDashboardNavbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function ReportDashboardNavbar() {
  return (
    <div className="header">
      <div className="logoimg">
        <img src={logo} alt="" className="logoimg" />
      </div>
      <div className="navbarreport">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/Login" className="item">
          Login
        </Link>
        <Link to="/UserEntryForm" className="item">
          Entry
        </Link>
        <Link to="/Dashboard" className="item">
          Dashboard
        </Link>
      </div>
    </div>
  );
}

export default ReportDashboardNavbar;
