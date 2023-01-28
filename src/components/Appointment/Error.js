import React from "react";
import classNames from "classnames";

import "components/Appointment/styles.scss";

//error format - parent is appointment/index.js
export default function Error(props) {
  const errorClass = classNames("", {
    appointment: props,
    "appointment-button": props.danger,
    "appointment__card appointment__card--error": props,
  });

  return (
    <main className={errorClass}>
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{props.message}</h3>
      </section>
      <img
        className="appointment__error-close"
        onClick={props.onClose}
        src="images/close.png"
        alt="Close"
      />
    </main>
  );
}
