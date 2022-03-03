import React, { useEffect, useRef, useState } from "react";
import { FcMenu } from 'react-icons/fc';
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
  const [active, setActive] = useState(false);
  return (
    <div className="header">
      <NavLink to={"/"} className="logo">
        <span>&lt;</span>
        <span className="logo-name">{"ArkulNid"}</span>
        <span>  /&gt;</span>
      </NavLink>
      <FcMenu
        className="outline-menu" 
        onClick={ () => {
            const menuActive: any = document.querySelector(".menu");
            if (!active) {
              menuActive.style.display = "none";
            } else {
              menuActive.style.display = "block";
            }
            setActive(!active);
          }
        }

        style={{zIndex: 3, position: "absolute", width: "70", height: "70px"}} 
      />
      <ul className="menu">
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
              style={{position: "absolute", top: "20px", right: "540px"}}/>
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
