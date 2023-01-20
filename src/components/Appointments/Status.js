import React from "react";
import classnames from "classnames";

import "components/Appointment/styles.scss";

export default function Status(props) {
  const statusClass = classnames("", {
    "appointment__card appointment__card--status": props
  })

return (
<main className={statusClass}>
  <img
    className="appointment__status-image"
    src="images/status.png"
    alt="Loading"
  />
  <h1 className="text--semi-bold">Deleting</h1>
</main>
)
}