import { useState } from 'react';
import {check} from '../Java/donations.js'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export const DonationCont = () => {

  const [showmsg, setshowmsg] = useState(false);

  const pay = () => {
    if(check()){
      setshowmsg(true);
    }
  }

  return (
    <div className="cont2">
      <div className="title">
        <h3>Support Us </h3>
        <span className="stps">🐾</span>
      </div>
      <div className="form-container">
        <h3>Make a Donation</h3>
        <div className="form">
            <div className="form-donation">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" id="name"/>
              <p id='nameerr'></p>

              <label>Amount</label>
              <input type="number" placeholder="Enter amount" min="1" id="amount"/>

              <label>Donation Type</label>
              <select id="type">
                <option value="one-time">One-time Donation</option>
                <option value="monthly">Monthly Donation</option>
                <option value="yearly">Yearly Donation</option>
              </select>

              <label>Email</label>
              <input type="email" placeholder="Your email address" id="email"/>
              <p id='emailerr'></p>
              <br />
              {showmsg && <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">Payment successful.</Alert>}
            </div>
        </div>
            <button type="submit" id="b2" onClick={pay}>Donate Now 🐾</button>
      </div>
    </div>
  );
};
