import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import {
    ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Rating } from "@material-tailwind/react";
import _404 from "../404/404";
import axios from "axios";
import { Alert } from "../AlertComponent/AlertComponent";
import { useDispatch } from "react-redux";
import { setCapacity } from "../../redux/avltreeReducer";

const AdminPanel = () => {
    const city = useSelector((state) => state.avltree.city);
    const loggedIn = useSelector((state) => state.avltree.loggedIn);

    const [rating, setRating] = useState(1);
    const [empId, setEmpId] = useState("");
    const [description, setDescription] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");

    const [currentDate, setCurrentDate] = useState('');
    const [currentDay, setCurrentDay] = useState('');

    const [quantityDiet, setQuantityDiet] = useState("");
    const [quantityNormal, setQuantityNormal] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const dispatch = useDispatch();


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type === 'application/vnd.ms-excel')) {
            setSelectedFile(file);
        } else {
            setAlertMessage("Please Upload Only Excel Files");
            setAlertType("error");
            setShowAlert(true);
        }
    };

    const handleFileUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('YOUR_BACKEND_URL/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully', response.data);
        } catch (error) {
            console.error('Error uploading file', error);
        }
    };

    const handleQuantityForm = () => {
        try {
            if (isNaN(parseInt(quantityDiet)) || isNaN(parseInt(quantityNormal))) {
                setAlertMessage("Invalid Quantity Value");
                setAlertType("error");
            } else {
                dispatch(setCapacity([parseInt(quantityDiet), parseInt(quantityNormal)]));
                setAlertMessage("Quantity Updated Successfully");
                setAlertType("success");
            }
        } catch (error) {
            setAlertMessage("Quantity Updation Failed");
            setAlertType("error");
        }
        setShowAlert(true);
    }

    useEffect(() => {
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setCurrentDate(date.toLocaleDateString(undefined, options));
        setCurrentDay(date.toLocaleDateString(undefined, { weekday: 'long' }));
    }, []);

    const handleRating = (value) => {
        setRating(value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/v1/feedback", {
                Emp_ID: empId,
                description: description,
                rating: rating
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

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    return (
        <>
            {loggedIn ? <div className="w-full h-full p-10">
                <DashboardNavbar />
                <div className="w-full basis-3/5 flex flex-col">
                    <h2 className="text-3xl font-bold text-center text-gray-500 my-5">
                        Cafe Admin Panel
                    </h2>
                    <p className="text-lg text-center"> {currentDate}</p>
                    <br />
                    <p className="text-xl font-bold text-center"> {city}</p>
                </div>
                <div className="mt-5 flex flex-row gap-10 bg-gray-100 p-10">
                    <div className="basis-1/2 h-full">
                        <div
                            type="div"
                            className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-[#0a5282] rounded-md"
                        >
                            <span className="pl-2 mx-1">Import Employee Data For Registration</span>
                        </div>
                        <div className="mt-5 bg-white rounded-lg shadow h-full">
                            <div className="flex">
                                <div className="flex-1 py-5 pl-5 overflow-hidden">
                                    <h1 className="inline text-2xl font-semibold leading-none">Upload Excel File</h1>
                                </div>
                            </div>
                            <div className="px-5 pb-5 w-full h-28 mt-2 flex items-center justify-center">
                                <form action="#" className="relative w-full h-full bg-gray-100 rounded-lg shadow-inner">
                                    <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} accept=".xlsx, .xls" />
                                    <label htmlFor="file-upload" className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                                        <p className="z-10 text-xs font-light text-center text-gray-500">Drag & Drop your files here</p>
                                        <svg className="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                                        </svg>
                                        {selectedFile && (
                                        <div className="mb-4 p-4 border border-gray-300 rounded w-full max-w-sm">
                                            <p className="text-gray-700">Selected File: {selectedFile.name}</p>
                                        </div>
                                    )}
                                    </label>
                                </form>
                            </div>

                            <hr className="mt-4" />
                            <div className="flex flex-row-reverse p-3">
                                <div className="flex-initial">
                                    <Button onClick={handleFileUpload}
                                        disabled={!selectedFile} className={`flex items-center gap-3 bg-green-600 ${!selectedFile && 'opacity-50 cursor-not-allowed'}`}>
                                        <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Import
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="basis-1/2">
                        <div
                            type="div"
                            className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-[#0a5282] rounded-md"
                        >
                            <span className="pl-2 mx-1">Enter The Meal Quantity For Today</span>
                        </div>
                        <div className="mt-5 bg-white rounded-lg shadow">
                            <div className="flex">
                                <div className="flex-1 py-5 pl-5 overflow-hidden">
                                    <h1 className="inline text-2xl font-semibold leading-none">Meal Quantity</h1>
                                </div>
                            </div>
                            <div className="px-5 pb-5">
                                <input
                                    onChange={(e) => setQuantityNormal(e.target.value)}
                                    placeholder="Normal Meal Quantity"
                                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                />
                                <input
                                    onChange={(e) => setQuantityDiet(e.target.value)}
                                    placeholder="Diet Meal Quantity"
                                    className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                />
                            </div>

                            <hr className="mt-4" />
                            <div className="flex flex-row-reverse p-3">
                                <div className="flex-initial">
                                    <Button className="flex items-center bg-green-600" onClick={handleQuantityForm}>
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

                <div className="mt-10 w-full flex justify-center bg-gray-100 p-10 ">
                    <div className="w-1/2">
                        <div className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-[#0a5282] rounded-md">
                            <span className="pl-2 mx-1">Employee Feedback</span>
                        </div>
                        <div className="mt-5 bg-white rounded-lg shadow">
                            {showAlert && <Alert type={alertType} message={alertMessage} />}
                            <div className="flex">
                                <div className="flex-1 py-5 pl-5 overflow-hidden">
                                    <h1 className="inline text-2xl font-semibold leading-none">Feedback Form</h1>
                                </div>
                            </div>
                            <div className="px-5 pb-5">
                                <input
                                    onChange={(e) => setEmpId(e.target.value)}
                                    placeholder="Employee ID"
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
                            <div className="flex flex-row-reverse p-3">
                                <div className="flex-initial">
                                    <Button onClick={handleSubmit} className="flex items-center bg-green-600">
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

            </div> : <_404 />}
        </>
    );
}

export default AdminPanel;
