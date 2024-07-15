import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { signin } from "../../redux/avltreeReducer";
import { useDispatch } from "react-redux";
import "./Login.css";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const login = async () => {

    try {
      const response = await axios.post("http://localhost:5000/api/v1/login", { username, password })
      const {message, city} = response.data;
      if (message === "ok") {
        dispatch(signin(city));
        navigate('/UserEntryForm')
      } else {
        setMessage("Incorrect Username Or Password");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="main_container">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <div id="loginForm" className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  id="user_id"
                  name="user_id"
                  className="login__input"
                  placeholder="User name / Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="login__input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {message}
              <button className="button login__submit" onClick={() => login()}>
                <span className="button__text">Log In</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <br />
              <br />
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
