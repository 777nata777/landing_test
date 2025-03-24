import { useCallback, useEffect, useState } from "react";

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;

type Timer = {
  hours: number;
  minutes: number;
  seconds: number;
};

const useTimer = (toDateTime: Date): Timer => {
  const calculateTimeLeft = useCallback((): Timer => {
    const now = new Date().getTime();
    const targetTime = toDateTime.getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor((difference / ONE_HOUR) % 24);
    const minutes = Math.floor((difference / ONE_MINUTE) % 60);
    const seconds = Math.floor((difference / ONE_SECOND) % 60);

    return { hours, minutes, seconds };
  }, [toDateTime]);

  const [timeLeft, setTimeLeft] = useState<Timer>(calculateTimeLeft());

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, ONE_SECOND);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return timeLeft;
};

export default useTimer;
