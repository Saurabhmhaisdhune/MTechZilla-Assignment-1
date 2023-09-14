import React, { useState, useEffect } from "react";
import "./Timer.css"

function Timer({ minutes, onTimeout,workTime,setWorkTime,breakTime,setBreakTime}) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
      
            onTimeout();
          } else {
            setSeconds(59);
            setWorkTime(workTime-1)
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, onTimeout]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
    setWorkTime(25)
  };

  return (
    <div>
      <div className="timers">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </div>
      <button onClick={toggleTimer}>
        {isActive ? "Pause" : "Start"}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
