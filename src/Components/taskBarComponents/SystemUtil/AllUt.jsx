import { Time } from "./timer.jsx";
import { DarkLight } from "./brightDark.jsx";
import { Battery } from "./batteryBar.jsx";
export const AllUtilities = [
  
   {id: 1, name: "timer", component: <Time />},
   {id: 2, name: "modeToggle", component: <DarkLight />},
   {id: 3, name: "batteryBar", component: <Battery />}
  
];
