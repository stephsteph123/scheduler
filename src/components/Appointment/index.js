import React, { Fragment } from "react";
import Empty from "components/Appointment/Empty.js";
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";

import "components/Appointment/styles.scss"

export default function Appointment(props) {
  if(props.interview) {
  return (
    <Fragment>
    <Show></Show>
    <Header>{props.time}</Header>
    <article className="appointment">{Empty}</article>
    </Fragment>
  )
  }
  return (
    <Fragment>
    <Empty></Empty>
    <Header>{props.time}</Header>
    <article className="appointment">{Empty}</article>
    </Fragment>
  )
};


