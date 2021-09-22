import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import konsole_icon from "./../../assets/images/konsole.png";

const onMouseEnter = (event, color) => {
  const element = event.target;
  element.style.backgroundColor = color;
}

const onMouseOut = (event) => {
  const element = event.target;
  element.style.backgroundColor = "transparent";
}

export default function Menu() {
  return (
    <div className="header">
      <NavLink to={"/splash"} className="logo">
        <span>&lt;</span>
        <span className="logo-name">{"ArkulNid"}</span>
        <span>  /&gt;</span>
      </NavLink>
      <ul className="menu" style ={{position: "absolute"}}>
        <li>
          <NavLink 
            to="/" 
            exact={true}
            activeClassName="menu-item-selected"
            onMouseEnter={(event) => onMouseEnter(event, "#A6E1FA")}
            onMouseOut={(event) => onMouseOut(event)}
            onClick={() => {
              const windowClass: any = document.querySelector(".window");
              const menuKonsoleIcon: any = document.querySelector(".menu-konsole-icon");
              menuKonsoleIcon.style.display="none";
              if (windowClass) {
                windowClass.style.display="block";
              }
            }}
          >
            Home
            <img src={konsole_icon} 
              className="menu-konsole-icon konsole-icon" 
              width="17" height="17" 
              style={{position: "absolute", 
                      left: "2px", top: "12px"}}/>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            activeClassName="menu-item-selected"
            onMouseEnter={(event) => onMouseEnter(event, "#A6E1FA")}
            onMouseOut={(event) => onMouseOut(event)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/skills" 
            activeClassName="menu-item-selected"
            onMouseEnter={(event) => onMouseEnter(event, "#A6E1FA")}
            onMouseOut={(event) => onMouseOut(event)}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            activeClassName="menu-item-selected"
            onMouseEnter={(event) => onMouseEnter(event, "#A6E1FA")}
            onMouseOut={(event) => onMouseOut(event)}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
