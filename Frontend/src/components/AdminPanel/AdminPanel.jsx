import React, { useState, useEffect } from "react";
import { Alert } from "../AlertComponent/AlertComponent";
import { useSelector } from "react-redux";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import { Button } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import axios from "axios";
import _404 from "../404/404";

const FeedbackForm = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const city = useSelector((state) => state.avltree.city);
    const loggedIn = useSelector((state) => state.avltree.loggedIn);
    const [empId, setEmpId] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(1);

    const [currentDate, setCurrentDate] = useState('');
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setCurrentDate(date.toLocaleDateString(undefined, options));
        setCurrentDay(date.toLocaleDateString(undefined, { weekday: 'long' }));
    }, []);

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000); // Adjust the time (in milliseconds) as needed

            // Cleanup the timer if the component unmounts or if showAlert changes
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/v1/feedback", {
                Emp_ID: empId, description: description, rating: rating
            });

            if (response.data.message === "ok") {
                setAlertMessage("Feedback Submitted Successfully!");
                setAlertType("success");
            } else {
                setAlertMessage("Failed to Submit Feedback!");
                setAlertType("error");
            }
        } catch (error) {
            setAlertMessage("An Error Occurred!");
            setAlertType("error");
        }
        setShowAlert(true);
    };

    return (
        <div className="w-full h-full p-10">
            {showAlert && <Alert type={alertType} message={alertMessage} />}
            {loggedIn ? <>
                <DashboardNavbar />
                <div className="w-full basis-3/5 flex flex-col">
                    <h2 className="text-3xl font-bold text-center text-gray-500 my-5">
                        Cafe Feedback Form
                    </h2>
                    <p className="text-lg text-center"> {currentDate}</p>
                    <br />
                    <p className="text-xl font-bold text-center"> {city}</p>
                </div>
                <div className="form-container p-10 px-32">
                    <div className="basis-1/2">
                        <div
                            type="div"
                            className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-[#0a5282] rounded-md"
                        >
                            <span className="pl-2 mx-1">Employee Feedback Form</span>
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
                                <textarea
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Feedback Description"
                                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                ></textarea>
                                <div className="mt-4 flex flex-col">
                                    <label className="text-gray-600 font-bold ml-1">Rating:</label>
                                    <Rating value={rating} onChange={(value) => setRating(value)} />
                                </div>
                            </div>

                            <hr className="mt-4" />
                            <div className="flex flex-row-reverse p-3 w-full justify-center">
                                <div className="flex w-full items-center justify-center">
                                    <Button className="flex items-center justify-center bg-green-600 w-[20%]" onClick={handleSubmit}>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 18 18">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="pl-2">Submit</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </> : <_404 />}
        </div>
    );
};

export default FeedbackForm;
