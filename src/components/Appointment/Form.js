import React, { useState } from 'react';
import InterviewerList from "components/InterviewerList";
import Button from 'components/Button';

export default function Form(props) {
const [student, setStudent] = useState(props.student || "");
const [interviewer, setInterviewer] = useState(props.interviewer || null);
const reset = function () {
  setStudent("")
  setInterviewer(null)
}
const cancel = function () {
  reset();
  props.onCancel();
}
  return (
<main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off">
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        placeholder="Enter Student Name"
        value={student}
        onChange={() => setStudent(student)}
      />
    </form>
    <InterviewerList 
    interviewers={props.interviewers}
      value={interviewer}
      onChange={() => setInterviewer(interviewer)}
  
    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={cancel}>Cancel</Button>
      <Button confirm onClick={props.onSave}>Save</Button>
    </section>
  </section>
</main>
  )
}








// const [student, setStudent] = useState(props.student || "");
// const [interviewer, setInterviewer] = useState(props.interviewer || null);
//   return(
//   <div classNames="newForm">
//     <main className="appointment__card appointment__card--create">
//       <section className="appointment__card-left">
//         <form onSubmit={event => event.preventDefault()}></form>>
//       <input
//         className="appointment__create-input text--semi-bold"
//         name="name"
//         type="text"
//         placeholder="Enter Student Name"
//         /*
//           This must be a controlled component
//           your code goes here
//         */
//       />
//     </form>
//     <InterviewerList 
//       /* your code goes here */
//     />
//   </section>
//   <section className="appointment__card-right">
//     <section className="appointment__actions">
//       <Button danger {/* your code goes here */}>Cancel</Button>
//       <Button confirm {/* your code goes here */}>Save</Button>
//     </section>
//   </section>
// </main>
// </div>
//   )
// }