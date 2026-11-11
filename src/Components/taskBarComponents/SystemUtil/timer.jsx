import { useState, useEffect } from "react";
import "../../../styles/T3/timer.css";

export const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    function updateTime() {
      setInterval(() => {
        setTime(new Date());
      }, 1000)
    }


    const timeDif = 1000 - time.getMilliseconds();
    setTimeout(updateTime, timeDif);

  }, []);

  return (
    <div className="timeAndDate">
      <div>
        {time.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        })}
      </div>

      <div>
        {time.toLocaleDateString([], {
          year: "2-digit",
          day: "numeric",
          month: "numeric",
        })}
      </div>
    </div>
  );
};
import "../../../styles/T3/applicationL.css";
