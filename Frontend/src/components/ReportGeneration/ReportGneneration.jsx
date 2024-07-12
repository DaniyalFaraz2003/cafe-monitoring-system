// src/components/Dashboard.jsx
import React from "react";
import logo from "../../assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { Table } from "./ReportElements/Table";
import { Button } from "@material-tailwind/react";
const ReportGeneration = () => {
  return (
    <div className="w-full h-full p-10">
      <nav className="w-full flex flex-row items-center justify-center">
        <img src={logo} alt="" className="h-[15%] w-[15%] basis-1/5" />
        <div className="w-full basis-3/5 flex flex-col">
          <h2 className="text-3xl font-bold text-center text-gray-500 my-5">
            View Reports
          </h2>
          <p className="text-xl font-bold text-center">City: Islamabad</p>
        </div>
        <Button className="flex items-center gap-2 bg-[#0a5282]" size="sm">
          LogOut
          <IconButton aria-label="logout">
            <LogoutIcon />
          </IconButton>
        </Button>
      </nav>
      <div className="mt-10">
        <Table />
      </div>
    </div>
  );
};

export default ReportGeneration;
