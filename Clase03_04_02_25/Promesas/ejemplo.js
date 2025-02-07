
// EJM DE LOS CALLBACK HELL

// ANTES LAS TAREAS ASINCRONICAS SE TRABAJABAN ASI
// FUNCIONES DENTRO DE FUNCIONES
obtenerDatos((rpta) => {
    procesarDatos(rpta, (resultado) => {
        guardarDatos(resultado, (confirmacion) => {
            console.log('Datos guardados: ', confirmacion);
        });
    });
});


// USANDO PROMESAS
obtenerDatos()
    .then(procesarDatos)
    .then(guardarDatos)
    .then((confirmacion) => {
        console.log("Datos guardados: ", confirmacion);
    })
    .catch((error) => {
        console.log("Ocurrió un error: ", error);
    })
