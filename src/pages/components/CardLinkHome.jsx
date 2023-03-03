import React from "react";
import { Card } from "react-bootstrap";

const CardLinkHome = ({ infoLink }) => {
  return (
    <Card className="">
      <Card.Img
        style={{ height: "18rem" }}
        variant="top"
        src={infoLink.img}
        className="img-fluid"
      />

      <Card.Body>
        <Card.Title className="fs-2 text-center">{infoLink.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardLinkHome;
