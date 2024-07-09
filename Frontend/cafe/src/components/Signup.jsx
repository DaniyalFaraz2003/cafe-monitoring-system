import { Link} from 'react-router-dom'

function Signup() {
    
    return (
      <div className='model'>
        <div className="innermodel">
            <h2>Sign up to create account</h2>
            <p>Already have an account
                <Link to="/Login" 
                style={{textDecoration:"none"}}
                >Sign In</Link></p>

            <form 
            >
                <div className="input-field">
                    <input label="Name: " placeholder="enter you Name" 
                     />
                </div>
                <div className="input-field">
                    <input label="Email: " placeholder="Email" 
                  
                    />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Password" 
                     />
                </div>
                <button className="submit-btn" type='submit'>Create account</button>
            </form>
        </div>
        </div>
    )
}

export default Signup