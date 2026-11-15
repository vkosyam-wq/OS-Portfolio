import { Time } from "./timer.jsx";
import { DarkLight } from "./brightDark.jsx";
import { Battery } from "./batteryBar.jsx";
import "../../../styles/T3/AllUt.css";
import { useState, useEffect, useRef } from "react";
export const AllUtilities = () => {
  const [clicker, setClicked] = useState({});
  const all = [
    { id: 1, component: <Time /> },
    { id: 2, component: <DarkLight /> },
    { id: 3, component: <Battery /> },
  ];


  const stateRef = useRef(null);

  useEffect(() => {

    const removeClick = (e) => {
      if (!stateRef.current.contains(e.target)) {
        setClicked({});
      }
    }


    document.addEventListener("click", removeClick);


    return () => {
      document.removeEventListener("click", removeClick);
    }

  }, [])

  return (
    <div className="everyWrapperTwo" ref={stateRef} onClick={() => setClicked({})} >
      {
        all.map((Item) => (
          <div key={Item.id} className={clicker[Item.id] ? "clicker" : undefined}
            onClick={(event) => {
              s
              event.stopPropagation();
              setClicked(prev => prev[Item.id] ? {} : prev[Item.id]: true })

            }}>






      {Item.component}
    </div>
  ))
}
    </div >
  )
}
