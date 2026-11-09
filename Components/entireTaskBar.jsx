import { ApplicationLauncher } from "./taskBarComponents/ApplicationLaunched/applicationLauncher.jsx";
import { AllUtilities } from "./taskBarComponents/SystemUtil/AllUt.jsx";
import { AllApps } from "./taskBarComponents/AppFront/All.jsx";
import "../styles/T2/entireTaskBar.css";
export const Taskbar = () => {


  return (
    <div className="entire-section">
      <ApplicationLauncher />
      <AllApps />
      <AllUtilities />
    </div>
  )
}
