// src/components/LandingPage.jsx
import React from "react";
import img1 from "../../assets/logo.png";
import { signin } from "../../redux/avltreeReducer";
import { useDispatch } from "react-redux";
import { insert } from "../../redux/avltreeReducer";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const login = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/login", { username, password })
      const { message, city } = response.data;
      if (message === "ok") {
        dispatch(signin(city));
        try {
          const response = await axios.get(`http://localhost:5000/api/v1/treeData/${city}`)
          const data = response.data;
          data.forEach((item) => {
            dispatch(insert(item))
          })
        } catch (error) {
          console.log(error);
        }
        navigate('/Dashboard')
      } else {
        setMessage("Incorrect Username Or Password");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (

    <div class="flex justify-center items-center w-screen h-screen bg-[#eeeef8]">
      <div class="container mx-auto my-4 px-4 lg:px-20">
      
        <div
        style={
          {
            position:"relative"
          }
        } class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
        <div style={{width:"200px"}}>
          <img src={img1} alt="" />
        </div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "30px",
          }}>
            <h1 class="text-5xl font-bold text-blue-900">Sign In</h1>
          </div>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="User name / Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
            />
          </div>
          {message}

          <div class="my-2 w-1/2 lg:w-1/4">
            <button onClick={() => login()}
              class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </div>


        
       <div className="content">
        <h1>Weclcome to the Cafe Monitoring System</h1>
        <p>
          This is a simple application that allows you to monitor your cafe
          activities.
        </p>
       </div>
      </div>
    </div>
  );
};

export default LandingPage;
