import React from "react";
import Header from "../Layout/Header";
import classes from "./Destination.module.css";
import DGallery from "../components/DGallery"


function Destination() {
  return (
    <>
      <div className={classes.body}>
        <div className={classes.container}>
          <div className={classes.header}>
            <span><span>01</span>PICK YOUR DESTINATION</span>
          </div>
          <DGallery />
        </div>
        
      </div>
    </>
  );
}

export default Destination;
