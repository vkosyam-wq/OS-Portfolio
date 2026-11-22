import { FaceImage } from "./portfolio.jsx";
import { Dumbell } from "./dumbbell.jsx";
import { Portfolio } from "../../popoverComponents/techPortfolio.jsx";
import { Game } from "../../popoverComponents/Game.jsx";
import "../../../styles/T3/AllApps.css";
import { useState, useEffect } from "react";
export const AllApps = () => {
  const all = [
    { id: 1, name: "hand", component: <FaceImage />, popover: <Portfolio /> },
    { id: 2, name: "dumbbell", component: <Dumbell />, popover: <Game /> }
  ];


  const [clickedApp, setClickedApp] = useState({});
  const [clickedPopover, setClickedPopover] = useState({});
  return (
    <div className="allAppsSection">
      {
        all.map((Item) => (
          <div key={Item.id} className={clickedApp[Item.id] ? "clickedApp" : ""}
            onClick={() => {
              x
              setClickedApp(prev => ({
                ...prev,
                [Item.id]: true
              }))

              setClickedPopover(prev => ({
                ...prev,
                [Item.id]: !prev[Item.id]
              }))
            }}>{Item.component}
            {clickedPopover[Item.id] && Item.popover}
          </div>
        ))
      }
    </div >
  )
}
