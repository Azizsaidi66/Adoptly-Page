import { SheltersMap } from "../Layoutss/SheltersMap"
import "../AllStyles/Shelters.css"

export const Shelters = () => {
  return(
    <>
    <div className="map">
    <h3>Available Shelters</h3>
    <SheltersMap />
    </div>
    </>
  )
}