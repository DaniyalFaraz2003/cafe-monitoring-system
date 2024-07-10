import React from 'react'
import { Link } from 'react-router-dom'



function Login() {

  return (
    

<div className="container">
  <div className="screen">
    <div className="screen__content">
      <form id="loginForm" className="login">
        <div className="login__field">
          <i className="login__icon fas fa-user"></i>
          <input type="text" id="user_id" name="user_id" className="login__input" placeholder="User name / Email" required />
        </div>
        <div className="login__field">
          <i className="login__icon fas fa-lock"></i>
          <input type="password" id="password" name="password" className="login__input" placeholder="Password" required />
        </div>
        <button id="submit" className="button login__submit">
          <span className="button__text">Log In</span>
          <i className="button__icon fas fa-chevron-right"></i>
        </button>
        <p className='alert'>Already have an account </p><Link to="/SignUp" className="login__forgot">Signup</Link>
        <br /><br />
        <input type="checkbox" id="remember" name="remember" /> Remember Me
      </form>
      <div className="social-login">
        <h3>log in via</h3>
        <div className="social-icons">
          <a href="#" className="social-login__icon fab fa-instagram"></a>
          <a href="#" className="social-login__icon fab fa-facebook"></a>
          <a href="#" className="social-login__icon fab fa-twitter"></a>
        </div>
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



    
  )
}

export default Login