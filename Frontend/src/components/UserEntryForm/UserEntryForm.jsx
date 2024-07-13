import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import img1 from "../../assets/logo.png";
import userImg from "../../assets/avatar.png";
import { ValidAlert, InvalidAlert } from "../AlertComponent/AlertComponent";
import { DialogComponent } from "./FormComponents/Dialog";
import "./UserEntryForm.css";
import InnerNavbar from "../InnerNavbar/InnerNavbar";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
function UserEntryForm() {
  const [empId, setEmpId] = useState("");
  const [isValidId, setIsValidId] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleValidation = () => {
    // Hardcode the valid empId for now
    setIsSubmitted(false);
    if (empId === "1234") {
      setIsValidId(true);
      return true;
    } else {
      setIsValidId(false);
      return false;
    }
  };

  return (
    // <div className="bluecontainer">
    // <div className="logoname">
    //   <img src={img1} alt="Contour Software Logo" className="logo" />
    // </div>
    <div className="w-full h-full p-10">
      <DashboardNavbar />
      <div className="w-full basis-3/5 flex flex-col">
          <h2 className="text-3xl font-bold text-center text-gray-500 my-5">
            Daily Users Entry
          </h2>
          <p className="text-xl font-bold text-center">City: Islamabad</p>
        </div>
      <div className="form-container">
        {/* <InnerNavbar /> */}
        <div className="inner-container">
          <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 h-64 rounded-xl bg-clip-border">
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
        {/* </div> */}
        {isValidId && isSubmitted && <ValidAlert />}
        {isValidId === false && <InvalidAlert />}
      </div>
    </div>

    // <div className="whitecontainer">
    //   <div className="logoname">
    //     <img src={img1} alt="Contour Software Logo" className="logo" />
    //   </div>
    //   <div className="w-full flex p-5 flex-row gap-5 bg-[#0a5282] rounded-lg mt-40 justify-center">
    //     <div className="flex flex-row items-center justify-center w-fit gap-5">
    //       <label
    //         htmlFor="idInput"
    //         className="text-white font-bold w-full text-xl"
    //       >
    //         Enter Employee Id:{" "}
    //       </label>
    //       <Input
    //         color="gray"
    //         name="idInput"
    //         label="Emp ID"
    //         style={{ fontWeight: 800 }}
    //         className="empinp bg-white"
    // value={empId}
    // onChange={(e) => setEmpId(e.target.value)}
    //       />
    //     </div>

    // <div>
    //   <DialogComponent validation={handleValidation} submit={handleSubmit} />
    // </div>
    //   </div>
    //   {isValidId && isSubmitted && <ValidAlert />}
    //   {isValidId === false && <InvalidAlert />}
    // </div>
  );
}

export default UserEntryForm;
