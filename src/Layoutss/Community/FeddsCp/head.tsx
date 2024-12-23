export const Head = ({name, date}) => {
  return(
    <div className="head">
      <div className="profile">
        <img src="../../../../pictures/Data/pic1.jpg" alt="" id="profile-pic"/>
        <p id="name">{name}</p>
      </div>
      <p id="time">{date}</p>
    </div>
  )
}