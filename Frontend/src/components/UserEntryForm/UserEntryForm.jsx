import React from "react";
import img1 from "../../assets/logo.png";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { ValidAlert, InvalidAlert } from "../AlertComponent/AlertComponent";
import MealcatagSelectForm from "../MealCatagorySelectionForm/MealcatagSelectForm";
import { useState } from "react";
import { DialogComponent } from "./FormComponents/Dialog";

import userImg from "../../assets/avatar.png";
function UserEntryForm() {
  const [empId, setEmpId] = useState("");
  const [isValidId, setIsValidId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = () => {
    // Here you would typically handle the submission logic
    setIsSubmitted(true);
  };
  const handleValidation = () => {
    // Hardcode the valid empId for now
    if (empId === "1234") {
      setIsValidId(true);
      return true;
    } else {
      setIsValidId(false);
      return false;
    }
  };
  return (
    <div className="whitecontainer">
      <div className="logoname">
        <img src={img1} alt="Contour Software Logo" className="logo" />
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
          <DialogComponent validation={handleValidation} submit={handleSubmit} />
        </div>
      </div>
      {isValidId && isSubmitted && <ValidAlert />}
      {isValidId === false && <InvalidAlert />}
    </div>
  );
}

export default UserEntryForm;
