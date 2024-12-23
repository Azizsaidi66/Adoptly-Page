import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Header = ({popupl}) => {
  return (
    <header>
        <Link to="/"><img src="../pictures/logo.png" id='img' width={150} height={100} alt="Logo" /></Link>
        <li id="login" onClick={popupl}><FontAwesomeIcon icon={faUser} /></li>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Adoption">Adoption</Link></li>
          <li><Link to="/Community">Community</Link></li>
          <li><Link to="/Shelters">Shelters</Link></li>
          <li><Link to="/Donations">Donations</Link></li>
        </ul>
      </nav>
    </header>
  );
}
