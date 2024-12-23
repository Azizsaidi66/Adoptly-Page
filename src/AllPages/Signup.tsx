import { useEffect } from 'react';
import '../AllStyles/LogSign.css'
import {check} from '../Java/logsign.js'

export const Signup = ({showlogin}) => {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]

  const load = () => {
    const days = document.getElementById('d');
    const year = document.getElementById('y');
    const d = new Date();
    for (let i = 1; i <= 31; i++) {
      days.add(new Option(i, i));
    }
    for (let i = 1959; i <= d.getFullYear(); i++) {
      year.add(new Option(i, i));
    }
  };

  useEffect(() => {
    load();
  });

  return(
    <div className="bd">
    <div className="sign-up-cont">
      <div className="logform">
        <h3>Sign up</h3>
        <div className="login-form">
          <label>Username</label>
          <input type="text" placeholder="username" id='username'/>
          <label>Adresse mail</label>
          <input type="email" placeholder="example@gmail.com" id='email'/>
          <label>Password</label>
          <input type="password" placeholder="Password" id='pwd'/>
          <label>Password Confirmation</label>
          <input type="password" placeholder="Password Confirmation" id='cpwd'/>
          <div className="sexe">
            <p id='sexe'>Sexe :</p>
            <input type="radio" name='sexe' id='homme'/><p>Homme</p>
            <input type="radio" name='sexe' id='femme'/><p>Femme</p>
          </div>
          <div className="birth">
            <p id='sexe'>Birth Date :</p>
            <select name="Day" id="d">
              <option hidden>Day</option>
            </select>

            <select name="Month" id="m">
              <option hidden>Month</option>
              {
                months.map(month => (
                  <option value={month}>{month}</option>
                ))
              }
            </select>
            
            <select name="Year" id="y">
              <option hidden>Year</option>
            </select>
          </div>
          <center><button onClick={check}>Sign in</button></center>
        </div>
          <div className="social-icons2">
            <p className="signup">Already have an account? 
              <a href="#" className="sn" onClick={showlogin}>Login</a>
            </p>
          </div>
      </div>
    </div>
    </div>
  )
}