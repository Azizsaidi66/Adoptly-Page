import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Layoutss/header';
import { Acceuil } from './AllPages/Accueil';
import { Adoption } from './AllPages/Adoptions';
import { Donnations } from './AllPages/Donations';
import { Community } from './AllPages/community';
import { Shelters } from './AllPages/Shelters';
import { useState } from 'react';
import { Login } from './AllPages/Login';
import { Signup } from './AllPages/Signup';

function App() {

  const [showLogin, setshowLogin] = useState(false);
  const [showSignup, setshowSignup] = useState(false);

  const popupl = () => {
    if (showLogin || showSignup) {
      setshowLogin(false);
      setshowSignup(false);
    } 
    else {
      setshowLogin(true);
      setshowSignup(false);
    }
  }

  const showsignup = () => {
    setshowLogin(false);
    setshowSignup(true);
  }

  const showlogin = () => {
    setshowLogin(true);
    setshowSignup(false);
  }

  return (
    <Router>
      <Header popupl={popupl}/>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Adoption" element={<Adoption />} />
        <Route path="/Community" element={<Community />} />
        <Route path="/Shelters" element={<Shelters />} />
        <Route path="/Donations" element={<Donnations />} />
      </Routes>

      {showLogin && !showSignup && <Login showsignup={showsignup}/>}
      {showSignup && <Signup showlogin={showlogin}/>}
    </Router>
  );
}

export default App;
