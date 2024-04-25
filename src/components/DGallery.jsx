import React, { useState, useEffect, useRef } from "react";
import classes from "./DGallery.module.css";

function DGallery() {
  const [dests, setDests] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const fetchDests = async () => {
      const response = await fetch(
        "https://space-fb101-default-rtdb.firebaseio.com/destinations.json"
      );
      const responseData = await response.json();
      const loadedDests = [];
      for (const key in responseData) {
        loadedDests.push({
          description: responseData[key].description,
          name: responseData[key].name,
          image: responseData[key].images.png,
          distance: responseData[key].distance,
          travel: responseData[key].travel,
        });
      }
      setDests(loadedDests);
    };
    fetchDests();
  }, []);

  

  const handleTabClick = (tabIndex) => {
    setCurrentTab(tabIndex);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.col}>
          <img src={dests[currentTab]?.image} alt="" />
        </div>
        <div className={classes.col}>
          <ul className={classes.tabs}>
            <li
              className={currentTab === 0 ? classes.active : ""}
              onClick={() => handleTabClick(0)}
            >
              MOON
            </li>
            <li
              className={currentTab === 1 ? classes.active : ""}
              onClick={() => handleTabClick(1)}
            >
              MARS
            </li>
            <li
              className={currentTab === 2 ? classes.active : ""}
              onClick={() => handleTabClick(2)}
            >
              EUROPA
            </li>
            <li
              className={currentTab === 3 ? classes.active : ""}
              onClick={() => handleTabClick(3)}
            >
              TITAN
            </li>
          </ul>
          <span>{dests[currentTab]?.name.toUpperCase()}</span>
          <p>{dests[currentTab]?.description}</p>
          <hr />
          <div className={classes.infoBox}>
            <div className={classes.info}>
              <p>AVG. DISTANCE</p>
              <h3>{dests[currentTab]?.distance.toUpperCase()}</h3>
            </div>
            <div className={classes.info}>
              <p>EST. TRAVEL TIME</p>
              <h3>{dests[currentTab]?.travel.toUpperCase()}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DGallery;
