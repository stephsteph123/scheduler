import React, { Fragment } from "react";
import Empty from "components/Appointment/Empty.js";
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Edit from "components/Appointment/Form.js";

import "components/Appointment/styles.scss"

export default function Appointment(props) {
  // function save(name, interviewer) {
  //   const interview = {
  //     student: name,
  //     interviewer
  //   };
  if(props.interview) {
  return (
    <Fragment>
    <Show></Show>
    <Edit></Edit>
    <Header>{props.time}</Header>
    <article className="appointment">{Empty}</article>
    </Fragment>
  )
  }
  return (
    <Fragment>
    <Empty></Empty>
    <Edit></Edit>
    <Header>{props.time}</Header>
    <article className="appointment">{Empty}</article>
    </Fragment>
  )
};


