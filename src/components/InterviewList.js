import React from "react";
import classNames from "classnames";

import "components/InterviewerList.scss";

export default function InterviewerList (props) {
  const interviewers = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === value}
        setInterviewer={() => onChange(interviewer.id)}
      />
    );
  });
}

//   const interviewLister =  classNames ("interviewers", {
//     "interviewers": props,
//     "interviewers__header": props.header,
//     "interviewers__list": props.list,
//   })

// return (
// <section className={interviewLister}>
//   <h4 className="interviewers__header text--light">Interviewer</h4>
//   <ul className="interviewers__list"></ul>
// </section>
// )
// }

// const interviewers = props.interviewers.map((interviewer) => {
//   return (
//     <InterviewerListItem
//       key={interviewer.id}
//       name={interviewer.name}
//       avatar={interviewer.avatar}
//       selected={interviewer.id === props.interviewer}
//       setInterviewer={() => props.setInterviewer(interviewer.id)}
//     />
//   );
// });
