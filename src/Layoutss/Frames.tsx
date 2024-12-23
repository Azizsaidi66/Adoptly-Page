export const Frames = ({ pet }) => {
  return (
    <div className="book">
      <div className="name">
        <p id="p1">Name:</p>
        <p id="p2">{pet.name}</p>
      </div>
      <div className="name">
        <p id="p1">Breed:</p>
        <p id="p2">{pet.breed}</p>
      </div>
      <div className="name">
        <p id="p1">Age:</p>
        <p id="p2">{pet.age}</p>
      </div>
      <div className="name">
        <p id="p1">Sex:</p>
        <p id="p2">{pet.sexe}</p>
      </div>
      <div className="desc">
        <p id="p1">Description:</p>
        <p id="p2">{pet.desc}</p>
      </div>
      <div className="cover">
        <img src={pet.img} alt={pet.name} width="100%" height="70%" />
        <p>Informations here:</p>
      </div>
      <button>Obtain</button>
    </div>
  );
};
