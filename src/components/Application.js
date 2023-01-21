import React, { useEffect, useState } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "components/DayList.js"
import Appointment from "./Appointment";

export default function Application(props) {
  const [day, setDay] = useState([]);
  useEffect(() => {
    axios.get("/api/days").then((response) => {
      console.log(response);
    });
  });
  function bookInterview(id, interview) {
    axios.put("/api/appointments/:id").then((response) => {
      console.log(response);
      .then(setDay())
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({
      ...state,
      appointments
    })});
  }
  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
<DayList
  days={days}
  value={day}
  onChange={setDay}
/>
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
      <Appointment
      key={Appointment.id} 
      {...Appointment}
      value={bookInterview(props)}
      />
      <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
}
