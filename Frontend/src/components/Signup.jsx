import { Link} from 'react-router-dom'

function Signup() {
    
    return (
        <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form id="singupForm" className="singup">
              <div className="singup__field">
                <i className="singup__icon fas fa-user"></i>
                <input type="text" id="user_id" name="user_id" className="singup__input" placeholder="User name / Email" required />
              </div>
              <div className="singup__field">
                <i className="singup__icon fas fa-lock"></i>
                <input type="password" id="password" name="password" className="singup__input" placeholder="Password" required />
              </div>
              <button id="submit" className="button singup__submit">
                <span className="button__text">Create account</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <p className='alert'>Already have an account </p><Link to="/singup" className="singup__forgot">Signup</Link>
              <br /><br />
              <input type="checkbox" id="remember" name="remember" /> Remember Me
            </form>
            <div className="social-singup">
              <h3>log in via</h3>
              <div className="social-icons">
                <a href="#" className="social-singup__icon fab fa-instagram"></a>
                <a href="#" className="social-singup__icon fab fa-facebook"></a>
                <a href="#" className="social-singup__icon fab fa-twitter"></a>
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

export default Signup