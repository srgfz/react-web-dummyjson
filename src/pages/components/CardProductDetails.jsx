import React from "react";
//Importo el card de react
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom"; //Importamos también el componente link de react-router-dom, que será el que utilizaremos para redirigirnos

const CardProductDetails = ({ product }) => {
  return (
    <Card className="col-8 mx-auto">
      <Card.Title className="fs-2 text-center py-3">{product.title}</Card.Title>
      <Card.Text className="text-center col-7 d-flex mx-auto">
        {product.description}
      </Card.Text>
      <img
        style={{ height: "25rem" }}
        className="img-fluid px-5 py-2 col-8 mx-auto"
        src={product.thumbnail}
      />
      <ListGroup
        horizontal
        className="d-flex justify-content-center border-white "
      >
        <ListGroup.Item className="border-opacity-0">
          <span className="fw-bold">Precio: </span>
          {product.price} €
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="fw-bold">Unidades: </span>
          {product.stock}
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="fw-bold">Descuento: </span>
          {product.discountPercentage} %
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link
          to="/products"
          className="p-3 btn btn-dark col-8 mx-auto d-flex justify-content-center"
        >
          Volver
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardProductDetails;
