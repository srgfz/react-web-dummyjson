import React from "react";
//Importo el useParams para acceder a la id de la ruta en cada momento
import { useParams } from "react-router-dom";
//Importo el hook personalizado para hacer peticiones get por fetch:
import useGetFetch from "../hooks/useGetFetch";

//Importo los componentes a utilizar en esta página:
import Loading from "./components/Loading";
import CardProductDetails from "./components/CardProductDetails";

const Product = () => {
  const params = useParams();
  const productId = params.productId;

  const [product, loading] = useGetFetch(
    `https://dummyjson.com/products/${productId}`
  );


  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (//Si sí que existe el producto muestro su tarjeta
        <div className="">
          {product && <CardProductDetails key={product.id} product={product}/>}
        </div>
      )}
    </div>
  );
};

export default Product;
