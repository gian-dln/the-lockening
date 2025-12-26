import { clear } from "console";
import React, { useState, useEffect, useRef, use } from "react";
import { start } from "repl";

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current!);
      }, 10);
    }

    return () => {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    };
  }, [isRunning]);

  function startTimer() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    const hours = String(Math.floor(elapsedTime / (1000 * 60 * 60))).padStart(
      2,
      "0"
    );
    const minutes = String(
      Math.floor((elapsedTime / (1000 * 60)) % 60)
    ).padStart(2, "0");
    const seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(
      2,
      "0"
    );
    const milliseconds = String(Math.floor((elapsedTime % 1000) / 10)).padStart(
      2,
      "0"
    );

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
  return (
    <div className="timer">
      <div className="display">{formatTime()}</div>
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
