// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import PieChart from "../DashboardElements/PieChart";
import BarChart from "../DashboardElements/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState("daily");
  return (
    <div className="w-full h-full p-10">
      <nav className="w-full flex flex-row items-center justify-center">
        <img src={logo} alt="" className="h-[15%] w-[15%] basis-1/5" />
        <div className="w-full basis-3/5 flex flex-col">
          <h2 className="text-3xl font-bold text-center text-gray-500 my-5">
            Cafe Admin Dashboard
          </h2>
          <p className="text-xl font-bold text-center">City: Islamabad</p>
        </div>
        <div className="logout bg-[#0a5282] text-white py-1 px-2 rounded-xl">
          <p className="text-xl mr-0 ">
            LogOut{" "}
            <IconButton aria-label="logout">
              <LogoutIcon/>
            </IconButton>
          </p>
        </div>
      </nav>

      <div className="w-full flex p-5 flex-row gap-5 bg-[#0a5282] rounded-lg mt-10">
        <div className="basis-1/3 h-full rounded-xl p-5 bg-white justify-center items-center">
          <PieChart />
        </div>
        <div className="basis-2/3 p-5 rounded-xl bg-white justify-center items-center ">
          <BarChart />
        </div>
      </div>

      <div className="w-full flex p-5 flex-row gap-5 bg-[#0a5282] rounded-lg mt-10 justify-center">
        <div className="flex flex-row items-center justify-center w-fit gap-5">
          <label
            htmlFor="idInput"
            className="text-white font-bold w-full text-xl"
          >
            Enter Employee Id:{" "}
          </label>
          <Input
            color="gray"
            name="idInput"
            label="Emp ID"
            style={{ fontWeight: 800 }}
            className="empinp bg-white"
          />
        </div>
        <div className="flex flex-row items-center justify-center w-fit gap-5">
          <label
            htmlFor="mealTypeInput"
            className="text-white font-bold w-full text-xl"
          >
            Select Meal Type:{" "}
          </label>
          <Select
            name="mealTypeInput"
            defaultValue="Normal"
            label="Select Meal Type"
            className="bg-white font-bold"
          >
            <Option>Normal</Option>
            <Option>Diet</Option>
          </Select>
        </div>
        <div>
          <Button color="blue">Enter</Button>
        </div>
      </div>
      {/* //a beautifull contextual tailwind css included button  */}
      <Link to="/report"  className="item">

      <button
          type="button"
          className="reportbtn btn btn-primary"
        >
          Generate Report
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
