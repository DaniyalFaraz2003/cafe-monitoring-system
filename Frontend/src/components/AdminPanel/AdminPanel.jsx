import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";

import React from 'react';

const AdminPanel = () => {
    return (
        <div className="w-full h-full p-10">
            <DashboardNavbar />
            <div className="mt-5">
                <div>
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
                                placeholder="Normal Meal Quantity" 
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                            <input 
                                placeholder="Diet Meal Quantity" 
                                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />  
                        </div>

                        <hr className="mt-4"/>
                        <div className="flex flex-row-reverse p-3">
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
                            <div className="flex-initial">
                                <button 
                                    type="button" 
                                    className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-700 transition duration-300 transform active:scale-95 ease-in-out"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="pl-2 mx-1">Confirm</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;

