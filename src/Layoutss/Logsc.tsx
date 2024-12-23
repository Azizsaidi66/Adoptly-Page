import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';

export const Logsc = () =>{
  return(
    <div className="logsc">
	    <div className="social-message">
		    <div className="line"></div>
		    <p className="message">Login with social accounts</p>
		    <div className="line"></div>
	    </div>
      <div className="social-icons">
        <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href=""><FontAwesomeIcon icon={faGoogle} /></a></li>
      </div>
    </div>
  )
}