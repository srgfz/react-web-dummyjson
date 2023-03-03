import React from "react";
import ReactDOM from "react-dom/client";
//Importamos todos los elementos principales en el main para usarlos en las ruta
import Layout from "./pages/components/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import CardPosts from "./pages/components/CardPosts";
import Product from "./pages/Product";

//Importamos el bootstrap css en el main:
import "bootstrap/dist/css/bootstrap.min.css";
//Importamos react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Vamos anidando las rutas e indicando la url y el componente que le corresponde a cada una 
//*La ruta de los detalles de un producto  la puedo sacar fuera y no anidar en ninguna ya que es una página independiente de la otra, aunque indico la misma ruta raiz en el path
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<CardPosts />} />
        </Route>
        <Route path="products" element={<Products />}/>
        <Route path="/products/:productId" element={<Product />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
