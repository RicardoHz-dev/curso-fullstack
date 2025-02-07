/*
4. Funciones asíncronas
Permiten manejar operaciones que toman tiempo, como peticiones a APIs.

*/


/*
Crea una función obtenerDatos en JavaScript utilizando async y await para realizar una solicitud HTTP a un servidor. La función debe obtener datos de una API y mostrar los resultados en la consola.

Utiliza la API fetch para obtener los datos desde la URL "https://jsonplaceholder.typicode.com/posts".
Usa await para esperar la respuesta de la solicitud.
Convierte la respuesta a formato JSON utilizando el método .json().
Muestra los datos obtenidos en la consola.
*/

async function obtenerDatos() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos();
