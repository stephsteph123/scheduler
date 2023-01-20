import React from "react";
import classNames from "classnames";

import "components/InterviewListItem.scss";

export default function InterviewerListItem (props) {
  const interviewerClass = classNames ("interviewers", {
    "interviewers__item": props,
    "interviewers__item--selected": props.selected,
  })

return (
  <li className={interviewerClass} onClick={props.setInterviewer}>
<img
  className="interviewers__item-image"
  src={props.avatar}
  alt={props.name}
/>
{props.selected && props.name}
</li>
);
}