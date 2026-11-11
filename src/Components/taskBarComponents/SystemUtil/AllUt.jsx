import { Time } from "./timer.jsx";
import { DarkLight } from "./brightDark.jsx";
import { Battery } from "./batteryBar.jsx";
import "../../../styles/T3/AllUt.css";
import { useState } from "react";
export const AllUtilities = () => {
  const [clicked, setClicked] = useState(false);
  const all = [
    { id: 1, name: "timer", component: <Time />, clickedName: "timerClicked" },
    { id: 2, name: "modeToggle", component: <DarkLight />, clickedName: "DarkLightClicked" },
    { id: 3, name: "batteryBar", component: <Battery />, clickedName: "batteryClicked" }
  ];

  return (
    <div className="everyWrapperTwo">
      {
        all.map((Item) => (
          <div key={Item.id} onClick={() => setClicked(!clicked)} className={clicked ? Item.clickedName : Item.name}>{Item.component}</div>
        ))
      }
    </div>
  )
}
