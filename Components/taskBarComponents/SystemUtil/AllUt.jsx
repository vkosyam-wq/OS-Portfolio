import { Time } from "./timer.jsx";
import { DarkLight } from "./brightDark.jsx";
import { Battery } from "./batteryBar.jsx";
import React from "react";
import "../../../styles/T3/AllUt.css";
export const AllUtilities = () => {
  const all = [
    { id: 1, name: "timer", component: <Time /> },
    { id: 2, name: "modeToggle", component: <DarkLight /> },
    { id: 3, name: "batteryBar", component: <Battery /> }
  ];

  return (
    <div className="everyWrapperTwo">
      {
        all.map((Item) => (
          <div key={Item.id}>{Item.component}</div>
        ))
      }
    </div>
  )
}
