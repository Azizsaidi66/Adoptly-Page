import { Frames } from "./Frames"
import { pets } from "../../pictures/Data/pets"; 

export const AdoptionCont = () => {
  return(
    <div className="AdoptionCont">
      <div className="search">
        <input type="text" placeholder="Search..." id="search"/>
      </div>
      <div className="frames">
        {pets.map((pet) => (
          <Frames key={pet.name} pet={pet} />
        ))}
      </div>
    </div>
  )
}