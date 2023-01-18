import React from "react";
import classNames from "classnames";


import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classNames("day-list", {
    "day-list__item" :props,
    "day-list__item--selected": props.selected,
    "day-list__item--full" : props.full,
  });

  return (
    <div className={dayClass}>
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
    </div>
  );
};

// const formatSports = function(props) {
//   if (props.spots = 0) {
//     return (
//     <div className={dayClass}>
//     <li onClick={() => props.setDay(props.name)}>
//       <h2 className="text--regular">{props.name}</h2>
//       <h3 className="text--light"> no spots remaining</h3>
//     </li>
//     </div>
//     );
//   }
//   if (props.spots = 1) {
//     return (
//     <div className={dayClass}>
//     <li onClick={() => props.setDay(props.name)}>
//       <h2 className="text--regular">{props.name}</h2>
//       <h3 className="text--light"> 1 spot remaining</h3>
//     </li>
//     </div>
//     );
//   }
