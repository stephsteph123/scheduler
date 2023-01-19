//used to format DayListItems for "0" or "1" spot
function formatSpots(props){
    return(
      <div className="dayClass">
      <li onClick={() => props.setDay(props.name)}>
        <h2 className="text--regular">{props.name}</h2>
        <h3 className="text--light">{props.spots} spots remaining</h3>
      </li>
      </div>
    )
  }

export default formatSpots;

