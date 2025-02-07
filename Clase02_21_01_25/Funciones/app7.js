/*
3. Uso en eventos
Funciones usadas para manejar interacciones de usuario.

*/

/*
Crea un programa en JavaScript que muestre una alerta cuando se haga clic en un botón de una página web. Para ello:

Crea un botón en tu archivo HTML con el atributo id="boton".
Enlaza un archivo JavaScript que utilice el método addEventListener para detectar el evento click en el botón.
Al hacer clic en el botón, se debe mostrar una alerta con el mensaje: "¡Botón presionado!".
*/
document.getElementById("boton").addEventListener("click", function() {
    alert("¡Botón presionado!");
});


//Ejemplo de código HTML:

<button id="boton">Presióname</button>


//Ejemplo con función flecha:


document.getElementById("boton").addEventListener("click", () => {
    console.log("¡Evento manejado con función flecha!");
});
