import React from "react";

const Profile = ({ data }) => {
  return (
    <div className="p-5">
      <div className="p-8 bg-white shadow mt-5 flex items-center border-b-2">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-indigo-100 rounded-full shadow-2xl flex items-center justify-center text-indigo-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="ml-8">
          <h1 className="text-3xl font-medium text-gray-700">
            {data.name},{" "}
            <span className="font-light text-gray-500">{data.age}</span>
          </h1>
          <p className="font-light text-gray-600 mb-5">Pakistan, {data.city}</p>
          <p className="text-gray-500">
            {data.designation} - {data.department}
          </p>
          <p className="text-gray-500">Contour Software</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
