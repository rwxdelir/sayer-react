import React from "react";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import "./button.css";

interface IBtnProps {
  title: string,
  width: string,
  href: string
}

const Btn = (props: IBtnProps) => {
  return (
    <Button variant="primary" target="_blank" href={props.href} style={{width: props.width, textDecoration: "none"}}>
      <BiLinkExternal className="btn-icon" />
      <span className="btn-title">
        &nbsp;
        {props.title}
      </span>
    </Button>
  );
}

export default Btn;
