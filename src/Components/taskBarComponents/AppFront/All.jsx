import { FaceImage } from "./portfolio.jsx";
import { Dumbell } from "./dumbbell.jsx";
import "../../../styles/T3/AllApps.css";
import { useState, useEffect } from "react";
export const AllApps = () => {
  const all = [
    { id: 1, name: "hand", component: <FaceImage /> },
    { id: 2, name: "dumbbell", component: <Dumbell /> },
  ];


  const [clickedApp, setClickedApp] = useState({});
  return (
    <div className="allAppsSection">
      {
        all.map((Item) => (
          <div key={Item.id} className={clickedApp[Item.id] ? "clickedApp" : ""}
            onClick={() => setClickedApp(prev => ({
              ...prev,
              [Item.id]: true
            }))}>{Item.component}</div>
        ))
      }
    </div >
  )
}
