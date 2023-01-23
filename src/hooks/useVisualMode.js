import {useState} from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); 

//allows a transition to different Mode
const transition = (newMode, replace = false) => {
  if (replace) {
    setMode((prev) => newMode)
    let replaceHistory = [...history];
    replaceHistory[replaceHistory.length - 1] = mode;
    setHistory((prev) => replaceHistory);
  } else {
    setMode((prev) => newMode);
    let newHistory = [...history];
    newHistory.push(newMode);
    setHistory((prev) => newHistory);
  }
};

//allows to go back
function back() {
  if(history.length > 1) {
    setHistory(history.slice(0, -1));
    setMode(history[history.length-2]);
  }
}

return { mode, transition, back };
}