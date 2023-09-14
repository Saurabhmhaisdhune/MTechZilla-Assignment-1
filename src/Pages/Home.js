import React, { useState } from "react";
import Timer from "../Components/Timer";
import "./Home.css";

function Home() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [isBreak, setIsBreak] = useState(false);

  const handleWorkTimeout = () => {
    setIsBreak(true);
  };

  const handleBreakTimeout = () => {
    setIsBreak(false);
  };

  return (
    <div className="home">
      <div className="card">
        <h2 >{isBreak ? "Break Time" : "Work Time"}</h2>
        <Timer
          minutes={isBreak ? breakTime : workTime}
          onTimeout={isBreak ? handleBreakTimeout : handleWorkTimeout}
          setWorkTime={setWorkTime}
          workTime={workTime}
          setBreakTime={setBreakTime}
          breakTime={breakTime}
        />
      </div>
    </div>
  );
}

export default Home;
