/*
Funciones asíncronas
*/

/*
Crea una función en JS utilizando async y await para realizar una solicitud HTTP a un
servidor. La función debe obtener datos de una API y mostrar los resultados en la consola.
*/

async function obtenerDatos() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos();


