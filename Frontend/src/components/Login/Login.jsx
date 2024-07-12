import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
function Login() {
  let Navigate = useNavigate();
  return (
    <div className="main_container">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form id="loginForm" className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  id="user_id"
                  name="user_id"
                  className="login__input"
                  placeholder="User name / Email"
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
                  required
                />
              </div>
              <button id="submit" className="button login__submit" onClick={() => Navigate('/Dashboard')}>
                <span className="button__text">Log In</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <br />
              <br />
              <input type="checkbox" id="remember" name="remember" /> Remember Me
            </form>
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
