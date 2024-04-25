import React from "react";
import classes from "./Tecnology.module.css";
import TGallery from "../components/TGallery";

function Tecnology() {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.container}>
          <div className={classes.header}><span><span>03</span>SPACE LAUNCH 101</span></div>
        </div>
        <TGallery />
      </div>
    </>
  );
}

export default Tecnology;
