import React, { Fragment } from "react";
import Empty from "components/Appointment/Empty.js";
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";

import "components/Appointment/styles.scss"

export default function Appointment(props) {
  return (
    <Fragment>
    <article className="appointment">{Empty}</article>
    </Fragment>
  )
};


