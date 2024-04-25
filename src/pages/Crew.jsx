import { React } from "react";
import classes from "./Crew.module.css";
import CGallery from "../components/CGallery";
import DGallery from "../components/DGallery";
function Crew() {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.container}>
          <div className={classes.header}>
            <span>
              <span>02</span> MEET YOUR CREW
            </span>
          </div>
          <CGallery/>
        </div>
      </div>
    </>
  );
}

export default Crew;
