import { React, useState, useRef } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import { Link, Outlet } from "react-router-dom";

const styledLink = {
  color: "white",
  textDecoration: "none",
  fontStyle: "normal",
};

function Header() {
  const [isMenuShown, setMenuShown] = useState(false);

  const menu = useRef(null);
  const image = useRef(null);
  const home = useRef(null);
  const crew = useRef(null);
  const destination = useRef(null);
  const tecnology = useRef(null);

  const home2 = useRef(null);
  const crew2 = useRef(null);
  const destination2 = useRef(null);
  const tecnology2 = useRef(null);
  const buttons = [
    home,
    tecnology,
    destination,
    crew,
    tecnology,
    home2,
    crew2,
    destination2,
    tecnology2,
  ];

  const showMenu = function () {
    if (isMenuShown) {
      menu.current.style.scale = "0 1";
      image.current.src = hamburger;
      setMenuShown(false);
    } else {
      menu.current.style.scale = "1 1";
      image.current.src = close;
      setMenuShown(true);
    }
  };

  function toggleActive(el) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].current.style.borderBottom = "none";
    }
    el.current.style.borderBottom = "2px solid white";
  }

  return (
    <>
      <div className={classes.container}>
        <img src={logo}></img>
        <hr className={classes.line} />
        <ul className={classes.menu}>
          <li>
            <Link
              onClick={() => toggleActive(home)}
              ref={home}
              style={styledLink}
              to="/"
            >
              <i>
                <span>00</span> Home
              </i>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleActive(destination)}
              ref={destination}
              style={styledLink}
              to="/destination"
            >
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleActive(crew)}
              ref={crew}
              style={styledLink}
              to="/crew"
            >
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleActive(tecnology)}
              ref={tecnology}
              style={styledLink}
              to="/tecnology"
            >
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
      <img
        src={hamburger}
        className={classes.hamburger}
        alt=""
        onClick={showMenu}
        ref={image}
      />
      <div className={classes.mobileContainer}>
        <ul ref={menu} className={classes.menu}>
          <li>
            <Link
              onClick={() => toggleActive(home2)}
              ref={home2}
              style={styledLink}
              to="/"
            >
              <i>
                <span>00</span> Home
              </i>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleActive(destination2)}
              ref={destination2}
              style={styledLink}
              to="/destination"
            >
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleActive(crew2)}
              ref={crew2}
              style={styledLink}
              to="/crew"
            >
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link
              onClick={() => toggleActive(tecnology2)}
              ref={tecnology2}
              style={styledLink}
              to="/tecnology"
            >
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
