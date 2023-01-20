import React from "react";
import classNames from "classnames";

import "components/Appointment/styles.scss";

export default function Empty(props) {
  const emptyClass = classNames('', {
    "appointment":props,
    "appointment-button":props.danger,
  });
return (
<main className={emptyClass}>
  <img
    className="appointment__add-button"
    src="images/add.png"
    alt="Add"
    onClick={props.onAdd}
  />
</main>
)
}