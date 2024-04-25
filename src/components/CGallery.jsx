import { React, useState, useRef, useEffect } from "react";
import classes from "./CGallery.module.css";
function CGallery() {
  const [crew, setCrew] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const fetchCrew = async () => {
      const response = await fetch(
        "https://space-fb101-default-rtdb.firebaseio.com/crew.json"
      );
      const responseData = await response.json();
      const loadedCrew = [];
      for (const key in responseData) {
        loadedCrew.push({
          role: responseData[key].role,
          name: responseData[key].name,
          image: responseData[key].images.png,
          bio: responseData[key].bio,
        });
      }
      setCrew(loadedCrew);
      console.log(crew);
    };
    fetchCrew();
  }, []);

  const handleTabClick = function (tabindex) {
    setCurrentTab(tabindex);
  };

  return (
    <div className={classes.container}>
        <div className={classes.col}>
        <img src={crew[currentTab]?.image} alt="" />
        <hr />
      </div>
      <div className={classes.col}>
        <h3>{crew[currentTab]?.role.toUpperCase()}</h3>
        <h2>{crew[currentTab]?.name.toUpperCase()}</h2>
        <p>{crew[currentTab]?.bio}</p>
        <div className={classes.dots}>
          <div
            className={currentTab == 0 ? classes.active : ""}
            onClick={() => handleTabClick(0)}
          ></div>
          <div
            className={currentTab == 1 ? classes.active : ""}
            onClick={() => handleTabClick(1)}
          ></div>
          <div
            className={currentTab == 2 ? classes.active : ""}
            onClick={() => handleTabClick(2)}
          ></div>
          <div
            className={currentTab == 3 ? classes.active : ""}
            onClick={() => handleTabClick(3)}
          ></div>
        </div>
      </div>
      
    </div>
  );
}

export default CGallery;
