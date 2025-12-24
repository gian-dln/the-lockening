import React, { useState, useEffect, useRef, use } from "react";
import { start } from "repl";

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {}, [isRunning]);

  function startTimer() {}

  function stopTimer() {}

  function resetTimer() {}

  function formatTime(milliseconds: number) {
    return "00:00:00";
  }
  return (
    <div className="timer">
      <div className="display">{formatTime(elapsedTime)}</div>
      <div className="controls">
        <button onClick={startTimer} className="start-button">
          Start
        </button>
        <button onClick={stopTimer} className="stop-button">
          Stop
        </button>
        <button onClick={resetTimer} className="reset-button">
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
