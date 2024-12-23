import "../AllStyles/LogSign.css"
import { Logsc } from "../Layoutss/Logsc"

export const Login = ({showsignup}) => {
  return(
    <div className="log-in-cont">
      <div className="logform">
        <h3>Log in</h3>
        <div className="login-form">
          <label>Username</label>
          <input type="text" placeholder="username or adresse"/>
          <label>Password</label>
          <input type="password" placeholder="Password"/>
          <li><a href="">Forgot password</a></li>
          <center><button>Log in</button></center>
        </div>
          <Logsc />
          <div className="social-icons2">
        	  <p className="signup">Don't have an account? 
		          <a href="#" className="sn" onClick={showsignup}>Sign up</a>
	          </p>
          </div>
        </div>
    </div>
  )
}