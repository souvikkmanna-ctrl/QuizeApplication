import { useEffect } from "react";

function Timer({ timeLeft, setTimeLeft, onTimeUp }) {
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setTimeLeft, onTimeUp]);

  return (
    <div className={timeLeft <= 10 ? "timer warning" : "timer"}>
      ⏱️ Time Left: {timeLeft} seconds
    </div>
  );
}

export default Timer;