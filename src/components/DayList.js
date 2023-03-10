import React from "react";
import DayListItem from "./DayListItem";

// holds details surrounding appointments - parent of DayListItem.js
export default function DayList(props) {
  return (
    <ul>
      {props.days.map((day) => (
        <DayListItem
          key={day.id}
          name={day.name}
          spots={day.spots}
          selected={day.name === props.day}
          full= {day.spots === 0}
          setDay={props.setDay}
        />
      ))}
    </ul>
  );
}
