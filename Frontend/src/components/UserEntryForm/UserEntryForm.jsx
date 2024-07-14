import React, { useEffect } from "react";
import { ValidAlert, InvalidAlert} from "../AlertComponent/AlertComponent";
import { useState } from "react";
import { DialogComponent } from "./FormComponents/Dialog";
import "./UserEntryForm.css";
import { useDispatch, useSelector } from "react-redux";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import { searchEmployee } from "../../redux/actions";



function UserEntryForm() {
  const [empId, setEmpId] = useState("");
  const [isValidId, setIsValidId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const searchResult = useSelector((state) => state);
  console.log(searchResult);
  const dispatch = useDispatch();


  function isValidEmpId(empId) {
    // Example validation: empId should not be empty and must be a certain length
    return empId.trim() !== "" && empId.length === 10;
  }
  function handleValidation() {
    const isValid = isValidEmpId(empId);
    setIsValidId(isValid);
    setIsSubmitted(true); // Assuming you want to mark the form as submitted here
  
    if (isValid) {
      // Dispatch searchEmployee action with empId if valid
      dispatch(searchEmployee(empId));
    } else {
      // Dispatch an action to update the store with invalid input state
      // This requires you to have an action and reducer logic to handle invalid input
      dispatch(updateSearchResultInvalid(empId));
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true);
    const valid = searchResult !== null;
    setIsValidId(valid);

    if (valid) {
      console.log("valid")
    } else {
      console.log("invalid")

    }
  };




 
  // const handleValidation = () => {
  //   // Hardcode the valid empId for now
  //   setIsSubmitted(false);
  //   if (empId === "1234") {
  //     setIsValidId(true);
  //     return true;
  //   } else {
  //     setIsValidId(false);
  //     return false;
  //   }
  // };
  return (
    <div>
      <DashboardNavbar />
      <div className="form-container">
        <div className="inner-container">
          <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
            <div class="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-[#293a72] from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
              <h3 class="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                Insert Employee Id
              </h3>
            </div>
            <div class="flex flex-col gap-4 p-6">
              <div class="relative h-11 w-full min-w-[200px]">
                <input
                  class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  value={empId}
                  onChange={(e) => setEmpId(e.target.value)}
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  empid
                </label>
              </div>
            </div>

            <div>
              <DialogComponent
                validation={handleValidation}
                submit={handleSubmit}
              />
            </div>
          </div>
        </div>
        {isValidId && isSubmitted && <ValidAlert />}
        {isValidId === false && <InvalidAlert />}
      </div>
    </div>
  );
}

export default UserEntryForm;
