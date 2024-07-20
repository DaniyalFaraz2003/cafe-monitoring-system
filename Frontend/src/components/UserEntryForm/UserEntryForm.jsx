import React, { useState, useEffect } from "react";
import { Alert } from "../AlertComponent/AlertComponent";
import "./UserEntryForm.css";
import { useSelector } from "react-redux";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar"
import { Button, Radio } from "@material-tailwind/react";;
import { search } from "../../redux/avltreeReducer";
import _404 from "../404/404";
import axios from "axios"

function UserEntryForm() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const city = useSelector((state) => state.avltree.city);
  const loggedIn = useSelector((state) => state.avltree.loggedIn);
  const [empId, setEmpId] = useState("");
  const [mealPref, setMealPref] = useState("");

  const [defaultPref, setDefaultPref] = useState("")

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Adjust the time (in milliseconds) as needed

      // Cleanup the timer if the component unmounts or if showAlert changes
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  useEffect(() => {
    if (empId.length < 5) {
      setShowAlert(false);
    }
    if (empId.length >= 5) {
      handleValidation();
    }
  }, [empId])

  const handleValidation = async () => {
    // dispatching the search action search takes the employee id as a parameter
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/validate/${empId}`);
      if (response.data.message === "ok") {
        setDefaultPref(response.data.pref);
        setAlertMessage("User ID Valid!");
        setAlertType("success");
      } else {
        setAlertMessage("User ID Invalid!");
        setAlertType("error");
      }
    } catch (error) {
      setAlertMessage("An Error Occurred!");
      setAlertType("error");
    }
    setShowAlert(true);
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/UserEntryForm", {
        Emp_ID: empId, meal_pref: mealPref, city: city
      })
      if (response.data.message === "ok") {

      } else {

      }
    } catch (error) {

    }
  };
  return (
    <div className="w-full h-full p-10">
      {showAlert && <Alert type={alertType} message={alertMessage} />}
      {loggedIn ? <>
        <DashboardNavbar />
        <div className="w-full basis-3/5 flex flex-col">
          <h2 className="text-3xl font-bold text-center text-gray-500 my-5">
            Daily Employee Check In For Meal
          </h2>
          <p className="text-xl font-bold text-center"> {city}</p>
        </div>
        <div className="form-container p-10 px-32">
          <div className="basis-1/2">
            <div
              type="div"
              className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-[#0a5282] rounded-md"
            >
              <span className="pl-2 mx-1">Form For Meal Check In</span>
            </div>
            <div className="mt-5 bg-white rounded-lg shadow">
              <div className="flex">
                <div className="flex-1 py-5 pl-5 overflow-hidden">
                  <h1 className="inline text-2xl font-semibold leading-none">Employee ID</h1>
                </div>
              </div>
              <div className="px-5 pb-5">
                <input
                  onChange={(e) => setEmpId(e.target.value)}
                  placeholder="Enter Emp ID"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>
              <div className="flex">
                <div className="flex-1 py-5 pl-5 overflow-hidden">
                  <h1 className="inline text-2xl font-semibold leading-none">Meal Type</h1>
                </div>
              </div>
              <div className="flex flex-row ml-5 gap-5 items-center justify-center">
                <label htmlFor="default" className="text-md font-bold">Use Default: </label>
                <input
                  name="default"
                  disabled
                  value={defaultPref}
                  className="text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <p className="text-xl font-bold text-gray-800 mx-10">OR</p>
                <label className="text-md font-bold">Select: </label>
                <Radio name="type" label="Normal" onClick={() => setMealPref("Normal")} />
                <Radio name="type" label="Diet" onClick={() => setMealPref("Diet")} />
              </div>

              <hr className="mt-4" />
              <div className="flex flex-row-reverse p-3 w-full justify-center">
                {/* <div className="flex-initial pl-3">
                                <button 
                                    type="button" 
                                    className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48" fill="currentColor" className="w-5 h-5 mr-1">
                                        <path d="m261 873 25-25-117-118h709v-36H169l117-118-25-25-170 170 170 170ZM600 532h59V269h-59v263Zm-162 0h58V269h-58v263Zm-162 0h59V269h-59v263ZM480 536Z"></path>
                                    </svg>
                                    <span className="pl-2 mx-1">Reset</span>
                                </button>
                            </div> */}
                <div className="flex w-full items-center justify-center">
                  <Button className="flex items-center justify-center bg-green-600 w-[20%]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 18 18">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9z" clipRule="evenodd"></path>
                    </svg>
                    <span className="pl-2">Confirm</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </> : <_404 />}
    </div>
  );
}

export default UserEntryForm;
