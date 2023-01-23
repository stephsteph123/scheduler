import React, { useEffect, Fragment } from "react";
import Empty from "components/Appointment/Empty.js";
import Header from "components/Appointment/Header.js";
import Show from "components/Appointment/Show.js";
import Edit from "components/Appointment/Form.js";
import Create from "components/Appointment/Form.js";
import Confirm from "./Confirm";
import Error from "./Error";

import "components/Appointment/styles.scss"
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";

export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  //destructure useVisualMode elements
  const {mode, transition, back} = useVisualMode (
  props.interview ? SHOW : EMPTY
  );

  // useEffect (() => {
  //   if (props.interview && mode === EMPTY) {
  //     transition(SHOW);
  //   }

  //   if (!props.interview && mode === SHOW) {
  //     transition(EMPTY);}
  //   }, [mode, transition, props.interview])

  const {interview,bookInterview,time} = props//destruct
  function save(name, interviewer) {
    const interview = {
      student:name,
      interviewer
    };

    Transition(SAVING);

    props
    .bookInterview(props.id, interview)
    .then(() => transition(SHOW))
    .catch(error => transition(ERROR_SAVE));
  };

  function destory(event) {
    transition(DELETING);
    props
    .cancelInterview(props.id)
    .then (() => transition(EMPTY))
    .catch(error => transition(ERROR_DELET, true));
  }

  return (
    <article className="appointment" data-testid="appointment">
    <Header time={props.time}/>
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
    <Show
    student={interview.student}
    interview={props.interview}
    onDelete={() => transition(CONFIRM)}
    onEdit={() => transition(EDIT)}
    />
    )}
    {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={back} onSave={save} />
    )}
    {mode === EDIT && (
      <Form
      name={interview.student}
      interviewers={props.interviewers} 
      onCancel={back} 
      onSave={save} 
      />
    )}
    {mode === SAVING && <Status message="Saving" />}
    {mode === DELETING && <Status message="Deleting" />}
    {mode === CONFIRM && (
      <Confirm
      message="Are you sure you would like to delete?"
      onCancel={back}
      onConfirm={destory}
      />
    )}
    {mode === ERROR_SAVE && (
      <Error message="Could not book appointment." onClose={back} />
    )}
    {mode === ERROR_DELETE && (
      <Error message="Could not cancel appointment." onClose={back} />
    )}
   </article>
  );
}
