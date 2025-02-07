
/* PEDIR UN TAXI POR UNA APLIACION  */
const promesaTaxi = new Promise((resolve, reject) => {
    let taxi = true; // TAXI DISPONIBLE
    // taxi = false;

    if(taxi) {
        resolve('El taxi llego a recogerte');
    } else {
        reject('No hay taxis disponibles');
    }
});

promesaTaxi
    .then((resultado) => {  // SE EJECUTA SI LA PROMESA FUE RESULETA
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error); // CASO CONTRARIO
    })


/*  ENVIAR UN PAQUETE POR UN SERVICIO DE MENSAJERIA, HAY TRES POSIBLES 
    ESTADOS:  PENDIENTE - RESUELTA - RECHAZADA  */
const promesaMensaje = new Promise((resolve, reject) => {
    let estado = 2; 

    if (estado === 0) {
        resolve('Paquete pendiente');
    } else if (estado === 1) {
        resolve('Paquete entregado');
    } else {
        reject('Paquete rechazado')
    }
});

promesaMensaje
    .then((resultado) => {  // SE EJECUTA SI LA PROMESA FUE RESULETA
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error); // CASO CONTRARIO
    })


/* RESERVACION DE UN RESTAURANTE */

/* SUBIR UNA FOTO A UNA RED SOCIAL */
const promesaFoto = new Promise((resolve, reject) => {
    let conexion = true; 

    if (conexion) {
        resolve('Foto subida a tu perfil');
    } else {
        reject('Error al subir la foto. Verificar conexion')
    }
});

promesaFoto
    .then((resultado) => {  // SE EJECUTA SI LA PROMESA FUE RESULETA
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error); // CASO CONTRARIO
    })



/* ASISTIR A UNA ENTREVISTA DE TRABAJO */