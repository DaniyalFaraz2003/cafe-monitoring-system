import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import img1 from "../../assets/logo.png";
import userImg from "../../assets/avatar.png";
import { ValidAlert, InvalidAlert } from "../AlertComponent/AlertComponent";
import MealcatagSelectForm from "../MealCatagorySelectionForm/MealcatagSelectForm";
import Navbar from "../Navbar/Navbar";

function UserEntryForm() {
  const [empId, setEmpId] = useState("");
  const [isValidId, setIsValidId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleValidation = () => {
    if (empId === "1234") {
      setIsValidId(true);
    } else {
      setIsValidId(false);
    }
  };

  return (
    <div className="whitecontainer">
      <Navbar />
      <div className="logoname">
          <img src={img1} alt="Contour Software Logo" className="logo" style={{ marginTop: '-35px' }} />

      </div>
      <div className="w-full flex p-5 flex-row gap-5 bg-[#0a5282] rounded-lg mt-40 justify-center">
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
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
          />
        </div>

        <div>
          <Button color="blue" onClick={handleValidation}>
            Enter
          </Button>
        </div>
      </div>
      {isValidId === true && (
        <div className="flex justify-center items-center mt-5">
          <div className="border-2 border-gray-300 p-5 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-5">
              <img
                src={userImg}
                alt="User"
                className="w-16 h-16 rounded-full mr-5"
              />
              <div>
                <h2 className="text-2xl font-bold text-green-600">Success!</h2>
                <p className="text-gray-600">Employee ID is valid.</p>
              </div>
            </div>
            <div className="mb-5">
              <p>
                <strong>Name:</strong> John Doe
              </p>
              <p>
                <strong>Position:</strong> Software Developer
              </p>
              <p>
                <strong>Department:</strong> IT
              </p>
            </div>
            <MealcatagSelectForm />
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
            >
              Submit Preferences
            </button>
          </div>

          {isSubmitted && <ValidAlert />}
        </div>
      )}
      {isValidId === false && <InvalidAlert />}
    </div>
  );
}

export default UserEntryForm;
