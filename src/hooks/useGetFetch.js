//*Hook personalizado que devolverá los datos a cualquier petición a partir del endpoint que le pasemos, también devolverá una variable bool indicando si los datos han sido recibidos o no

import { useState, useEffect } from 'react'
//Importo el servicio mediante el que haré la petición:
import getFetch from "../services/getFetch"

const useGetFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)//El valor inicial será true (se están cargando los datos)

    const loadData = () => {
        getFetch(endpoint)
            .then((response) => response.json())
            .then((data) => setData(data))
            .finally(() => setLoading(false))//Al finalizar la petición cambio el estado de loading a false (ya no está cargando y puedo mostrar la información)
    };

    useEffect(() => {
        loadData()
    }, [endpoint])//La acción loadData() se ejecutará siempre que cambie el endpoint que se pasa 
    //*En este caso funcionaría igual si lo dejamos en blanco para que se ejecute cada vez que se renderiza el componente

    return [data, loading]//Devuelvo tanto la respuesta  que nos de la api como el parámetro bool para comprobar la respuesta se ha producido o no
}

export default useGetFetch