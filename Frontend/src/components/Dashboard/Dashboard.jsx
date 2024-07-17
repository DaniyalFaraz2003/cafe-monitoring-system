// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import PieChart from "../DashboardElements/PieChart";
import BarChart from "../DashboardElements/BarChart";
import LineChart from "../DashboardElements/LineChart";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import axios from "axios"
import TimeFrameSelector from "../TimeFrameSelector/TimeFrameSelector";
import _404 from "../404/404";

function percentageIncrease(startVal, endVal) {
  const diff = endVal - startVal;
  if (startVal === 0) startVal = 1;
  const fraction = diff / startVal;
  const precent = fraction * 100;
  return precent;
}

const Dashboard = () => {
  const city = useSelector((state) => state.avltree.city);
  const loggedIn = useSelector((state) => state.avltree.loggedIn);
  const [timeFrame, setTimeFrame] = useState("daily");
  const [data, setData] = useState({
    totalDiet: 0, totalDiet_1: 0,
    totalNormal: 0, totalNormal_1: 0,
    total: 0, total_1: 0,
    user: 0, user_1: 0,
    bar: []
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/v1/dashboard", {
          city: city, time: timeFrame
        })
        const { normal, diet, normal_1, diet_1, user, user_1, bar } = response.data;
        setData({
          ...data,
          totalNormal: normal, totalDiet: diet, total: normal + diet,
          totalNormal_1: normal_1, totalDiet_1: diet_1, total_1: normal_1 + diet_1,
          user: user, user_1: user_1, bar: bar
        });
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, [timeFrame]);

  const result1 = percentageIncrease(data.totalDiet_1, data.totalDiet);
  const result2 = percentageIncrease(data.totalNormal_1, data.totalNormal);
  const result3 = percentageIncrease(data.total_1, data.total);
  const result4 = percentageIncrease(data.user_1, data.user);

  return (
    <div className="w-full h-full p-10">
      {loggedIn ? <>
        <DashboardNavbar />
        <nav className="w-full flex flex-row items-center justify-center">
          {/* <img src={logo} alt="" className="h-[15%] w-[15%] basis-1/5" /> */}
          <div className="w-full basis-3/5 flex flex-col">
            <h2 className="text-3xl font-bold text-center text-gray-500 my-5">
              Cafe Admin Dashboard
            </h2>
            <p className="text-xl font-bold text-center">City: {city}</p>
          </div>

        </nav>
        <div className="w-full flex flex-col p-7 gap-5 bg-[#0a5282] rounded-lg mt-10">
          <div className="flex flex-col items-center justify-between">
            {/* Button group */}
            <div className="flex flex-row gap-3 mb-10 bg-transparent">
              <TimeFrameSelector setTimeFrame={setTimeFrame} />
            </div>
            <div class="mb-7 grid gap-y-7 gap-x-7 md:grid-cols-2 xl:grid-cols-2 w-full">
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                    <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clip-rule="evenodd"></path>
                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
                  </svg>
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Diet Meals</p>
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{data.totalDiet}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong class={`${result1 > 0 ? "text-green-500" : "text-red-500"}`}>{result1 > 0 ? "+" + result1 + "%" : result1 + "%"}</strong>&nbsp;than {
                      timeFrame === "daily" ? "yesterday" : timeFrame === "weekly" ? "last week" : timeFrame === "monthly" ? "last month" : ""
                    }
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Normal Meals</p>
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{data.totalNormal}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong class={`${result2 > 0 ? "text-green-500" : "text-red-500"}`}>{result2 > 0 ? "+" + result2 + "%" : result2 + "%"}</strong>&nbsp;than {
                      timeFrame === "daily" ? "yesterday" : timeFrame === "weekly" ? "last week" : timeFrame === "monthly" ? "last month" : ""
                    }
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
                    <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                  </svg>
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Meals</p>
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{data.total}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong class={`${result3 > 0 ? "text-green-500" : "text-red-500"}`}>{result3 > 0 ? "+" + result3 + "%" : result3 + "%"}</strong>&nbsp;than {
                      timeFrame === "daily" ? "yesterday" : timeFrame === "weekly" ? "last week" : timeFrame === "monthly" ? "last month" : ""
                    }
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                  </svg>
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Unique Employees Served</p>
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{data.user}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong class={`${result4 > 0 ? "text-green-500" : "text-red-500"}`}>{result4 > 0 ? "+" + result4 + "%" : result4 + "%"}</strong>&nbsp;than {
                      timeFrame === "daily" ? "yesterday" : timeFrame === "weekly" ? "last week" : timeFrame === "monthly" ? "last month" : ""
                    }
                  </p>
                </div>
              </div>
            </div>
            {/* Charts */}
            <div className="flex flex-row gap-7 w-full mb-7">
              <div className="basis-1/3 h-full rounded-xl p-5 bg-white flex justify-center items-center">
                <PieChart data={[{ type: "Normal", amount: data.totalNormal }, { type: "Diet", amount: data.totalDiet }]} />
              </div>
              <div className="flex-grow min-w-0 basis-2/3 p-5 rounded-xl bg-white">
                <div className="w-full h-full flex justify-center items-center">
                  <BarChart data={data.bar} />
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full bg-white rounded-xl p-5 items-center justify-center">
              <LineChart />
            </div>
          </div>
        </div>
        <Link to="/report" className="item">
          <button className="mt-5 px-4 py-2 bg-[#0a5282] text-white rounded-lg hover:bg-blue-600 transition-colors duration-150">
            Generate Report
          </button>
        </Link>
      </> : <_404 />}
    </div>
  );
};

export default Dashboard;
