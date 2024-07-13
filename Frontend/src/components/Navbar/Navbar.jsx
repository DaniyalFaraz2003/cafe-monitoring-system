import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import img1 from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#0a5282] shadow-md">
      <div className="flex items-center space-x-4 ml-auto">
        <Link to="/Login">
          <Button color="white" variant="text">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
