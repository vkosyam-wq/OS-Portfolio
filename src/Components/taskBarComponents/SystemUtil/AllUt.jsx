import { Time } from "./timer.jsx";
import { DarkLight } from "./brightDark.jsx";
import { Battery } from "./batteryBar.jsx";
import "../../../styles/T3/AllUt.css";
import { useState } from "react";
export const AllUtilities = () => {
  const [clicker, setClicked] = useState(false);
  const all = [
    { id: 1, name: "timer", component: <Time /> },
    { id: 2, name: "modeToggle", component: <DarkLight /> },
    { id: 3, name: "batteryBar", component: <Battery /> }
  ];


  return (
    <div className="everyWrapperTwo">
      {
        all.map((Item) => (
          <div key={Item.id} className={clicker[Item.id] ? "clicker" : undefined}
            onClick={() => setClicked(prev => ({
              ...prev, [Item.id]: !prev[Item.id]
            }))}>
            {Item.component}
          </div>
        ))
      }
    </div >
  )
}
