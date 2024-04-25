import React from "react";
import Header from "../Layout/Header";
import Hero from "../Layout/Hero";
import classes from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={classes.body}>
        {/* <Header /> */}
        <Hero />
      </div>
    </>
  );
}

export default Home;
