import React from 'react'
import CardLinkHome from './components/CardLinkHome'
import { Link } from "react-router-dom"; //Importamos también el componente link de react-router-dom, que será el que utilizaremos para redirigirnos

const Home = () => {
  //Jsons con los datos que voy a pasar al elemento de las CardLinks
  const infoLink1 = {
      title: "Usuarios",
      img: "./src/assets/images/usuarios.png"
    }
    const infoLink2 = {
      title: "Productos",
      img: "./src/assets/images/productos.jpg"
    }

  return (
    <div className="col-9 mx-auto d-flex flex-grow-1 flex-wrap justify-content-evenly">
      <Link to="/users" className='col-4 text-dark text-decoration-none'>
      <CardLinkHome infoLink={infoLink1} />
      </Link>
      <Link to="/products" className='col-4 text-dark text-decoration-none'>
      <CardLinkHome infoLink={infoLink2} />
      </Link>
    </div>
  )
}

export default Home