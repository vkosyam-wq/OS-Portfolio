import { FaceImage } from "./portfolio.jsx";
import { Dumbell } from "./dumbbell.jsx";
import "../../../styles/T3/AllApps.css";


f
export const AllApps = () => {
  const items = [
    { id: 1, name: "hand", component: <FaceImage /> },
    { id: 2, name: "dumbbell", component: <Dumbell /> }

  ];


  return (

    <>
      {items.map((item) => (
        <div key={item.id}>{item.component}</div>
      ))}
    </>
  )


}
