// import React from "react";
// import classNames from "classnames";
// import DayListItem from "./DayListItem";
// <ul></ul>

export default function DayList(props){

  return(
    <ul>
      <DayListItem 
        key={day.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.value}
        setDay={props.onChange}  
      />
      </ul>
  )
};
      {/* <DayListItem
        key={props.days[1].id} 
        name={props.days[1].name} 
        spots={props.days[1].spots} 
        selected={props.days[1].name === props.day}
        setDay={props.setDay}  
      />
      <DayListItem 
        key={props.days[2].id}
        name={props.days[2].name}
        spots={props.days[2].spots} 
        selected={props.days[2].name === props.day}
        setDay={props.setDay}  
      />      
    </ul> */}
