import React from "react";
//Importo el useParams para acceder a la id de la ruta en cada momento
import { useParams } from "react-router-dom";
//Importo el hook personalizado para hacer peticiones get por fetch:
import useGetFetch from "../../hooks/useGetFetch";

//Importo los componentes a utilizar en esta página:
import Loading from "./Loading";
import CardPost from "./CardPost";

const CardPosts = () => {
  const params = useParams();
  const userId = params.userId;
  //Cargo los post para el usuario indicado por parámetros con el mismo hook personalizado
  const [postsUser, loading] = useGetFetch(
    `https://dummyjson.com/posts/user/${userId}`
  );

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-column gap-5">
          {postsUser.posts?.map((post) => (
            <CardPost post={post} key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardPosts;
