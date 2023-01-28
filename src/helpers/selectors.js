//Functions used within Application.js

//renders appointments for a given day
export function getAppointmentsForDay(state, name) {
  const filteredDays = state.days.filter((day) => day.name === name);
  if (state.days.length === 0 || filteredDays.length === 0) {
    return [];
  }

  const appointmentPerDay = filteredDays[0].appointments;
  let filteredAppointments = [];
  for (let item of appointmentPerDay) {
    filteredAppointments.push(state.appointments[item]);
  }
  return filteredAppointments;
}

//renders details for an interview slot
export function getInterview(state, interview) {
  if (!interview) return null;
  const filteredInterview = {};
  filteredInterview.student = interview.student;
  filteredInterview.interviewer = state.interviewers[interview.interviewer];
  return filteredInterview;
}

//render list of interviewers for a given day
export function getInterviewersForDay(state, name) {
  const filteredDays = state.days.filter((day) => day.name === name);
  if (state.days.length === 0 || filteredDays.length === 0) {
    return [];
  }
  const interviewersFromDays = filteredDays[0].interviewers;

  let filteredInterviewers = [];

  for (let interviewer of interviewersFromDays) {
    filteredInterviewers.push(state.interviewers[interviewer]);
  }
  return filteredInterviewers;
}
