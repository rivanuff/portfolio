"use client";

import { useEffect, useState } from "react";

export default function LiveClock({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const formatTime = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = String(now.getFullYear()).slice(-2);
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
    };

    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(formatTime());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return <time className={className}>{currentTime}</time>;
}
