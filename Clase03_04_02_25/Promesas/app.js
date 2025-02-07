
/*  CREAR UN EJEMPLO DE UN APROMESA QUE EVALUE UNA CONDICION (EXITO) Y 
    QUE RETORNE SI LA OPERACION FUE EXITOSA O UN ERROR SI FALLO, 
    GESTIONANDO AMBOS CASOS CON EL USO DE .THEN Y .CATCH  */

const promesaEjm = new Promise((resolve, reject) => {
    let exito = true; // CAMBIARA MAS ADELANTE
    // exito = false;

    if(exito) {
        resolve('La operación fue exitosa');
    } else {
        reject('Hubo un error en la operación');
    }
});

promesaEjm
    .then((resultado) => {  // SE EJECUTA SI LA PROMESA FUE RESULETA
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error); // CASO CONTRARIO
    })