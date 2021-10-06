import React from "react";
import Card from "react-bootstrap/Card";
import Btn from "./../button/button";

interface ICardProps {
  title: string,
  description: string,
  href: string,
  img?: string
}

const ProjectCard = (props: ICardProps) => {
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        alt="card-img" 
        src={props.img} 
        width={310}
        height={165}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Btn title={"View Project"} width={"160px"} href={props.href} />
      </Card.Body>
    </Card>
  ) 
}

export default ProjectCard;
