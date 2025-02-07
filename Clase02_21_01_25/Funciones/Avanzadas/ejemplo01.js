/*
Funciones avanzadas
1. Funciones como argumentos (Callbacks)
Las funciones pueden ser pasadas como parámetros y ejecutadas dentro de otras funciones.

*/


/*
Crea una función en JavaScript llamada procesarDatos que reciba dos parámetros:

datos: una cadena de texto (por ejemplo, un mensaje o información).
callback: una función que se ejecutará después de procesar los datos.
La función debe simular el procesamiento de los datos (por ejemplo, imprimiendo un mensaje en la consola) y luego ejecutar la función callback, pasando los datos como argumento.
*/

function procesarDatos(datos, callback) {
    console.log("Procesando datos...");
    callback(datos);
}

procesarDatos("Archivo cargado", resultado => {
    console.log(`Resultado: ${resultado}`);
});
// Salida:
// "Procesando datos..."
// "Resultado: Archivo cargado"
