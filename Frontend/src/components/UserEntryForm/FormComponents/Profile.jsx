import React from 'react';

const Profile = () => {
    return (
        <div className="p-16">
            <div className="p-8 bg-white shadow mt-5">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative">
                        <div className="w-24 h-24 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 ml-56 flex items-center justify-center text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center">
                    <h1 className="text-3xl font-medium text-gray-700">
                        Jessica Jones, <span className="font-light text-gray-500">27</span>
                    </h1>
                    <p className="font-light text-gray-600 mb-5">Bucharest, Romania</p>
                    <p className="text-gray-500">Solution Manager - Creative Tim Officer</p>
                    <p className="text-gray-500">University of Computer Science</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
