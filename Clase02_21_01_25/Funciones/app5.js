/*
USO DE FUNCIONES EN APP REALES
1.- VALIDACIÓN DE FORMULARIOS
*/

/*
Crea una función en JS llamada validarCorreo que reciba una dirección de correo 
electrónico como parámetro y verifique si es válida utilizando una expresión regular.
La función debe devolver true si es correo es válido y false si no lo es.
*/

function validarCorreo(email) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(email);
}

console.log(validarCorreo("andrew@gmail.com")); //true
console.log(validarCorreo("correo-invalido")); //false