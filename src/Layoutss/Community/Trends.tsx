import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons/faFireFlameCurved"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Trends = () => {
  return(
    <div className="trends">
      <center><h1>What's Happening ?</h1></center>
      <hr />
      <div className="hap">
        <ul>
          <li><a href=""><FontAwesomeIcon icon={faFireFlameCurved} /> New animal shelter openings!</a></li>
          <li><a href=""><FontAwesomeIcon icon={faFireFlameCurved} /> Rescue mission updates</a></li>
          <li><a href=""><FontAwesomeIcon icon={faFireFlameCurved} /> Rescue mission updates</a></li>
          <li><a href="">How you can help</a></li>
          <li><a href="">...</a></li>
          <li><a href="">...</a></li>
        </ul>
      </div>
    </div>
  )
}