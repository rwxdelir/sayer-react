import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface ICardProps {
  title: string,
  description: string,
  img?: string
}

const ProjectCard = (props: ICardProps) => {
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        alt="card-img" 
        src={props.img} 
        width={330}
        height={165}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" target="_blank">
        </Button>
      </Card.Body>
    </Card>
  ) 
}

export default ProjectCard;
