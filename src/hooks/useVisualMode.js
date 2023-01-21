import {useState} from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); 

//allows a transition to different Mode
function transition(mode, replace = false){
  if(replace){
    setHistory(prev => prevslice(0, -1));
    setHistory(prev => [...prev, mode]);
  } else {
    setHistory(prev => [...prev, mode]);
  }
  setMode(mode);
} 

//allows to go back
function back() {
  if(history.length > 1) {
    setHistory(history.slice(0, -1));
    setMode(history[history.length-2]);
  }
}

return { mode, transition, back };
}