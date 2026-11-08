import { FaceImage } from "./portfolio.jsx";
import { Dumbell } from "./dumbbell.jsx";
import "../../../styles/T3/AllApps.css";

export const AllApps = () => {
  const all = [
    { id: 1, name: "hand", component: <FaceImage /> },
    { id: 2, name: "dumbbell", component: <Dumbell /> }
  ];

  return (
    <div className="allAppsSection">

      {
        all.map((Item) => (
          <div key={Item.id}>{Item.component}</div>
        ))
      }
    </div>
  )
}
