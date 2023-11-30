import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const EndMessage = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds === 0) {
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);

  if (seconds === 0) {
    navigate("/info");
  }

  return <div>{seconds}s</div>;
};

export default EndMessage;
