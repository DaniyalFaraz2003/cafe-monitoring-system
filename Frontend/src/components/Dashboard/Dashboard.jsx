// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import PieChart from "../DashboardElements/PieChart";
import BarChart from "../DashboardElements/BarChart";
import LineChart from "../DashboardElements/LineChart";
import diet from "../../assets/diet.png";
import normal from "../../assets/normal.png";
import all from "../../assets/total.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import axios from "axios"
import TimeFrameSelector from "../TimeFrameSelector/TimeFrameSelector";
import _404 from "../404/404";
//funcions to calculate percentage increase whcih is used in the dashboard 
//first parameter is thr capacity and second is consumed
function percentageIncrease(startVal, endVal) {

  const percentage = (startVal / endVal) ;
  return percentage.toFixed(2);
}

const Dashboard = () => {
  const city = useSelector((state) => state.avltree.city);
  const loggedIn = useSelector((state) => state.avltree.loggedIn);
  const capacity=useSelector((state)=>state.avltree.capacity)
  console.log("dietcapacity,",capacity[0])
  console.log("normalcapacity",capacity[1])
  const [timeFrame, setTimeFrame] = useState("daily");
  const [data, setData] = useState({
    totalDiet: 0, totalDiet_1: 0,
    totalNormal: 0, totalNormal_1: 0,
    total: 0, total_1: 0,
    user: 0, user_1: 0,
    bar: [], line: []
  });

  const [currentDate, setCurrentDate] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(date.toLocaleDateString(undefined, options));
    setCurrentDay(date.toLocaleDateString(undefined, { weekday: 'long' }));
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/v1/dashboard", {
          city: city, time: timeFrame
        })
        const { normal, diet, normal_1, diet_1, user, user_1, bar, line } = response.data;
        setData({
          ...data,
          totalNormal: normal, totalDiet: diet, total: normal + diet,
          totalNormal_1: normal_1, totalDiet_1: diet_1, total_1: normal_1 + diet_1,
          user: user, user_1: user_1, bar: bar, line: line
        });
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, [timeFrame]);

  const result1 = percentageIncrease(capacity[0], data.totalDiet);
  console.log(data.totalNormal_1, data.totalNormal)
  const result2 = percentageIncrease(capacity[1], data.totalNormal);
  const result3 = percentageIncrease(capacity[0]+capacity[1], data.total);
  const result4 = percentageIncrease(data.user_1, data.user);

  return (
    <div className="w-full h-full p-10">
      {loggedIn ? <>
        <DashboardNavbar />
        <div className="w-full basis-3/5 flex flex-col">
          <h2 className="text-3xl font-bold text-center text-gray-500 my-5">
            Cafe Admin Dashboard
          </h2>
          <p className="text-lg text-center"> {currentDate}</p>
          <br />
          <p className="text-xl font-bold text-center"> {city}</p>
          
        </div>

        <div className="w-full flex flex-col p-7 gap-5 bg-[#0a5282] rounded-lg mt-10">
          <div className="flex flex-col items-center justify-between">
            {/* Button group */}
            <div className="flex flex-row gap-3 mb-10 bg-transparent">
              <TimeFrameSelector setTimeFrame={setTimeFrame} />
            </div>
            <div class="mb-7 grid gap-y-7 gap-x-7 grid-cols-3 w-full">
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <img src={diet} alt="" className="w-12 h-12" />
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Diet Meals</p>
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{data.totalDiet}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong class={`${result1 > 0 ? "text-green-500" : "text-red-500"}`}>{result1 > 0 ? "+" + result1 + "%" : result1 + "%"}</strong>&nbsp;consumed 
                     {/* {
                      timeFrame === "daily" ? "yesterday" : timeFrame === "weekly" ? "last week" : timeFrame === "monthly" ? "last month" : ""
                    } */}
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <img src={normal} alt="" className="w-12 h-12" />
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Normal Meals</p>
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{data.totalNormal}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong class={`${result2 > 0 ? "text-green-500" : "text-red-500"}`}>{result2 > 0 ? "+" + result2 + "%" : result2 + "%"}</strong>&nbsp;consumed
                     {/* {
                      timeFrame === "daily" ? "yesterday" : timeFrame === "weekly" ? "last week" : timeFrame === "monthly" ? "last month" : ""
                    } */}
                  </p>
                </div>
              </div>
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                  <img src={all} alt="" className="w-16 h-16" />
                </div>
                <div class="p-4 text-right">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Meals</p>
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{data.total}</h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                  <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                    <strong class={`${result3 > 0 ? "text-green-500" : "text-red-500"}`}>{result3 > 0 ? "+" + result3 + "%" : result3 + "%"}</strong>&nbsp;consumed
                     {/* {
                      timeFrame === "daily" ? "yesterday" : timeFrame === "weekly" ? "last week" : timeFrame === "monthly" ? "last month" : ""
                    } */}
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
              <LineChart data={data.line} />
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