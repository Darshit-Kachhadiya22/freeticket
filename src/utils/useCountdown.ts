
import { useState, useEffect } from 'react';

export function useCountdown(initialDuration: number) {
  const [timer, setTimer] = useState(initialDuration);
  const [letterSpacing, setLetterSpacing] = useState('3px');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });

      // Remove extra spacing after first update
      if (timer < initialDuration - 1) {
        setLetterSpacing('normal');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [initialDuration, timer]);

  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 31);
  const seconds = timer % 60;

  const formattedTime = timer <= 0
    ? "EXPIRED"
    : `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;

  return { formattedTime, letterSpacing };
}

export function useFormattedDate() {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const now = new Date();
    // Subtract 30 minutes
    now.setMinutes(now.getMinutes() - 30);

    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const formattedDate = now.toLocaleDateString("en-GB", dateOptions);
    let formattedTime = now
      .toLocaleTimeString("en-US", timeOptions)
      .replace("AM", " AM")
      .replace("PM", " PM");

    setFormattedDate(`${formattedDate} , ${formattedTime}`);
  }, []);

  return formattedDate;
}
