import {useNavigate } from "react-router-dom";

export const Container1 = () => {

  const Navigate = useNavigate();

  const browse = () =>{
    Navigate('/Adoption');
  };

  const donate = () =>{
    Navigate('/Donations');
  };

  return(
    <div className="Cont1">
      <h1>Make a Difference Today</h1>
      <h2>Give a loving home to a pet in need</h2>
      <div className="btn">
        <button id="b1" onClick={browse}>Browse Pets</button>
        <button id="b1" onClick={donate}>Donate </button>
      </div>
    </div>
  )
}