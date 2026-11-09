import "../../../styles/T3/applicationL.css";
import FaceImage from "../../../Images/portfolioImage copy.png";
import { useState } from "react";

export const ApplicationLauncher = () => {

  const [clicked, setClicked] = useState(false);
  return (
    <div className={clicked ? "clicked" : undefined}>
      <img className="faceImage"
        onClick={() => setClicked(!clicked)}
        src={FaceImage} alt="This is a circular image of my face close up. Characteristics incldue brown eyes, black hair, and attached ear lob" />
    </div >
  )
}
