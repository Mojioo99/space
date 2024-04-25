import { React, useEffect, useState } from "react";
import classes from "./TGallery.module.css";
function TGallery() {
  const [technology, setTechnology] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const fetchTechnology = async () => {
      const response = await fetch(
        "https://space-fb101-default-rtdb.firebaseio.com/technology.json"
      );
      const responseData = await response.json();
      const loadedTech = [];
      for (const key in responseData) {
        loadedTech.push({
          description: responseData[key].description,
          name: responseData[key].name,
          imageP: responseData[key].images.portrait,
          imageL: responseData[key].images.landscape,
        });
      }
      setTechnology(loadedTech);
    };
    fetchTechnology();
  }, []);

  const handleTabClick = (tabIndex) => {
    setCurrentTab(tabIndex);
  };
  const deviceWidth=window.innerWidth >768;

  return (
    <div className={classes.container}>
      <div className={classes.col2}>
        <img src={deviceWidth ? technology[currentTab]?.imageP : technology[currentTab]?.imageL} alt="" />
      </div>
      <div className={classes.col1}>
        <div className={classes.tabs}>
          <div
            className={currentTab == 0 ? classes.active : ""}
            onClick={() => {
              handleTabClick(0);
            }}
          >
            1
          </div>
          <div
            className={currentTab == 1 ? classes.active : ""}
            onClick={() => {
              handleTabClick(1);
            }}
          >
            2
          </div>
          <div
            className={currentTab == 2 ? classes.active : ""}
            onClick={() => {
              handleTabClick(2);
            }}
          >
            3
          </div>
        </div>
        <div className={classes.content}>
          <h3>THE TERMINOLOGY</h3>
          <h2>{technology[currentTab]?.name.toUpperCase()}</h2>
          <p>{technology[currentTab]?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TGallery;
