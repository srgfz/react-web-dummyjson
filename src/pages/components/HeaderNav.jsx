import React from "react";
import { Nav } from "react-bootstrap"; //Importamos el componente de bootstrap
import { Link } from "react-router-dom"; //Importamos también el componente link de react-router-dom, que será el que utilizaremos para redirigirnos

const HeaderNav = () => {
  return (
    <Nav
      defaultActiveKey="/"
      className="bg-dark bg-opacity-75 py-4 justify-content-center gap-5"
    >
      <Nav.Item>
          <Link to="/" className="fs-5 px-4 btn btn-outline-light">
            Home
          </Link>
      </Nav.Item>
      <Nav.Item>
          <Link to="/users" className="fs-5 btn btn-outline-light">
            Usuarios
          </Link>
      </Nav.Item>
      <Nav.Item>
          <Link to="/products" className="fs-5 btn btn-outline-light">
            Productos
          </Link>
      </Nav.Item>
    </Nav>
  );
};

export default HeaderNav;
