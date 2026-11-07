import { Application } from "./taskBarComponents/ApplicationLaunched/applicationLauncher.jsx";
import { AllUtilities } from "./taskBarComponents/SystemUtil/AllUt.jsx";
import { AllApps } from "./taskBarComponents/AppFront/All.jsx";
import { useState } from "react";
import React from "react";
import "../styles/T2/entireTaskBar.css";
export const Taskbar = () =>{

  const[clicker,setClicker] = useState(false);

  return(


  <div className="entire-section">
    <div className="firstDive">
      <Application />
    </div>

    <div className="openClicker">
      <AllApps clicker={clicker} setClicker = {setClicker}/>
    </div>

    <div className="everyWrapperTwo">

        {AllUtilities.map((Item) => (
          <React.Fragment key={Item.id}>{Item.component}</React.Fragment>
        ))}

    </div>
  </div>

  )
}
