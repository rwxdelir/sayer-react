import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Menu.css";

interface IMenuProps {
  home: () => void;
  projects: () => void;
  skills: () => void;
  contact: () => void;  
}

const onMouseEnter = (event, color) => {
  const element = event.target;
  element.style.backgroundColor = color;
}

const onMouseOut = (event) => {
  const element = event.target;
  element.style.backgroundColor = "transparent";
}

export default function Menu(props: IMenuProps) {
  return (
    <ul className="menu" style ={{position: "absolute"}}>
      <li onClick={props.home}>
        <NavLink 
          to="/home" 
          activeClassName="menu-item-selected"
          onMouseEnter={(event) => onMouseEnter(event, "#E0B1CB")}
          onMouseOut={(event) => onMouseOut(event)}
        >
          Home
        </NavLink>
      </li>
      <li onClick={props.projects}>
        <NavLink 
          to="/projects" 
          activeClassName="menu-item-selected"
          onMouseEnter={(event) => onMouseEnter(event, "#E0B1CB")}
          onMouseOut={(event) => onMouseOut(event)}
        >
          Projects
        </NavLink>
      </li>
      <li onClick={props.skills}>
        <NavLink 
          to="/skills" 
          activeClassName="menu-item-selected"
          onMouseEnter={(event) => onMouseEnter(event, "#E0B1CB")}
          onMouseOut={(event) => onMouseOut(event)}
        >
          Skills
        </NavLink>
      </li>
      <li onClick={props.contact}>
        <NavLink 
          to="/contact" 
          activeClassName="menu-item-selected"
          onMouseEnter={(event) => onMouseEnter(event, "#E0B1CB")}
          onMouseOut={(event) => onMouseOut(event)}
        >
          Contact Me
        </NavLink>
      </li>
    </ul>
  )
}
