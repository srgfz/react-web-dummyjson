import React from "react";
//Importo el Outlet del react router, que será el que nos permita ir cambiando los post y mostrarlos en la misma página
import { Outlet } from "react-router-dom";
//Importo el hook personalizado para hacer peticiones get por fetch:
import useGetFetch from "../hooks/useGetFetch";
//Importo los componentes a utilizar en esta página:
import Loading from "./components/Loading";
import CardProduct from "./components/CardProduct";

const Products = () => {
  //Uso un único hook personalizado ya que todas las peticiones siguen la misma estructura: solo necesitamos ir cambiando su endpoint y este endpoint será el que determine mediante el useEffect del hook que se realiza una nueva petición a la api (En este caso el determinante de la ejecución del useEffect también podría estar vacío y el funcionamiento sería exactamente el mismo)
  const [products, loading] = useGetFetch(
    "https://dummyjson.com/products"
  );

  return (
    <div className="">
      <h2 className="p-4">Productos</h2>

      <div className="d-flex justify-content-around">
        {loading ? ( //Si todavía está cargando datos cargará el componente de Loading, en caso contrario recorro los usuarios y los muestro a través de sus componentes
          <Loading />
        ) : (
          <div className=" d-flex flex-wrap gap-4 justify-content-evenly">
            {products.products?.map((product) => (
              <CardProduct product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
