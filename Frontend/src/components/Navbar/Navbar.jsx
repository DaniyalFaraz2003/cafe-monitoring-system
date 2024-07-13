import React from "react";
import { Button } from "@material-tailwind/react";
import img1 from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-[#0a5282] shadow-md">
      <div className="flex items-center">
        <img src={img1} alt="Contour Logo" className="h-10 w-10" />
      </div>
      <div className="flex items-center space-x-4">
        <Button color="light-blue" variant="text">
          Home
        </Button>
        <Button color="light-blue" variant="text">
          Dashboard
        </Button>
        <Button color="light-blue" variant="text">
          Report
        </Button>
        <Button color="red" variant="text">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
