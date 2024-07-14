// src/components/Dashboard.jsx
import React, { useEffect } from "react";
import { Table } from "./ReportElements/Table";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import data from "../../data/mealData";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const ReportGeneration = () => {

  const dispatch = useDispatch();
  return (
    <div className="w-full h-full p-10">
      <DashboardNavbar />
      <nav className="w-full flex flex-row items-center justify-center">
        <div className="w-full basis-3/5 flex flex-col">
          <h2 className="text-3xl font-bold text-center text-gray-500 my-5">
            View Reports
          </h2>
          <p className="text-xl font-bold text-center">City: Islamabad</p>
        </div>
      </nav>
      <div className="mt-10">
        <Table data={data} />
      </div>
    </div>
  );
};

export default ReportGeneration;
