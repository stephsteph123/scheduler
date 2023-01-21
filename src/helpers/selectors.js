import Appointment from "components/Appointment";

export function getAppointmentsForDay(state, name) {
  const filteredDays = state.days.filter(day => day.name === name)
    if (state.days.length===0 || filteredDays.length===0) {
      return [];
    }

    const appointmentPerDay = filteredDays[0].appointments;
    let filteredAppointments = [];
    for (let item of appointmentPerDay) {
      filteredAppointments.push(state.appointments[item]);
    }
    return filteredAppointments;
}