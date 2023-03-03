import React from 'react'
//Importo el card del bootstrap
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"; //Importamos también el componente link de react-router-dom, que será el que utilizaremos para redirigirnos


const CardProduct = ({product}) => {
  return (
    <Card className='col-3'>
    <Card.Img  style={{ height: '16rem' }}  variant="top" src={product.thumbnail} className="img-fluid"/>
    <Card.Body className="d-flex flex-column justify-content-between align-items-center">
      <Card.Title>{product.title}</Card.Title>

      <Link to={"/products/" + product.id} className='btn btn-dark col-8 py-2'>Ver Producto</Link>
    </Card.Body>
  </Card>
  )
}

export default CardProduct