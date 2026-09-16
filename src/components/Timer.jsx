import React, { useEffect, useRef } from "react";

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function Timer({ timeLeft, setTimeLeft, onTimeUp, isActive = true }) {
  const onTimeUpRef = useRef(onTimeUp);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    onTimeUpRef.current = onTimeUp;
  }, [onTimeUp]);

  useEffect(() => {
    if (timeLeft > 0) {
      hasTriggeredRef.current = false;
    }
  }, [timeLeft]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            onTimeUpRef.current?.();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, setTimeLeft]);

  return (
    <div
      className={`timer ${timeLeft <= 10 ? "warning" : ""}`}
      role="timer"
      aria-live="polite"
    >
      ⏱️ Time Left: {formatTime(timeLeft)}
    </div>
  );
}

export default Timer;