import React, { useEffect, useState } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "components/DayList.js"
import Appointment from "./Appointment";

// const cancelInterview = function (props) {
//   if (props === appointments[id]) {
//     interview = null;
//   }
// }

export default function Application(props) {
  const [day, setDay] = useState([]);
  const [state, setState] = useState({
    day:"Monday",
    days:[],
    apppointments:{},
    interviewers:{}
  })
  useEffect(() => {
    axios.get("/api/days").then((response) => {
      console.log(response);
    });
  });

  function bookInterview(id, interview) {
    axios.put("/api/appointments/:id").then((response) => {
      console.log(response);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    setState( prev => ({
      ...prev,
      appointments
    }))
    });
  }
  //helper function to do object interviwers to an array of interviwer ids..(day)
  //map over for daily interviwers, appointments.
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
  days={state.days}
  value={state.day}
  onChange={...}
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
      bookInterview={bookInterview}
      interviewers={[]}
      />
      <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
