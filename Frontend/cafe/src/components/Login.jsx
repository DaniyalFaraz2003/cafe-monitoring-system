import React from 'react'
import { Link } from 'react-router-dom'



function Login() {

  return (
    <div className="model">
    <div className="innermodel">
      <h2>Sign in to your account</h2>
      <p>Don't have any account
        <Link to="/Signup" style={{textDecoration:"none"}}>Sign Up</Link></p>
     
      <form 
       >
        <div className="input-field">
          <input label="email" placeholder="Email" 
           />
        </div>
        <div className="input-field">
          <input label="password" placeholder="Password"
           />
        </div>
        <button className="submit-btn" type='submit'>Sign in</button>
      </form>
    </div>
    </div>
  )
}

export default Login