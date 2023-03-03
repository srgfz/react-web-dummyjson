
//Función que realiza la petición GET a la api dada un endopint (devuelve la promesa y a partir de ella trabajo en el hook para controlar cuando finaliza la petición)


const getFetch = (endpoint) => {
    return fetch(endpoint)
}

export default getFetch