import React from "react";
import classNames from "classnames";


import "components/DayListItem.scss";
import formatSpots from "components/helperFunctions.js";

export default function DayListItem(props) {
  const dayClass = classNames("day-list", {
    "day-list__item" :props,
    "day-list__item--selected": props.selected,
    "day-list__item--full" : props.full,
  });

  return (
      <li className={dayClass} onClick={() => props.setDay(props.name)} selected={props.selected}>
        <h2 className="text--regular">{props.name}</h2> 
        <h3 className="text--light">{props.formatSpots()}</h3>
        </li>
  );
};


