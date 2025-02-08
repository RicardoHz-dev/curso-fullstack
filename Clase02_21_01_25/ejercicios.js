
// ESCRIBE UN PROGRAMA QUE COMPARE TRES NÚMEROS Y MUESTRE CUÁL ES EL MAYOR.
function numeroMayor(numbers) {
    let numMax = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numMax) {
            numMax = numbers[i];
        }
    }
    return numMax;
}

numbers = [2,7,3,1,30,14,11]
console.log(numeroMayor(numbers))


// ESCRIBE UN PROGRAMA QUE CUENTE CUÁNTAS LETRAS TIENE UNA PALABRA.
const contarLetras = (cadena) => {
    return cadena.length;
}
cadena = 'Fullstack'
console.log(contarLetras(cadena))

// ESCRIBE UN PROGRAMA QUE CONVIERTA UN NÚMERO DADO DE MINUTOS A HORAS Y MINUTOS.
function convertirHorasMinutos(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    return `${horas}:${minutosRestantes}`;
}
tiempo = 135
console.log(convertirHorasMinutos(tiempo))

// CREA UN PROGRAMA QUE GENERE UN NÚMERO ALEATORIO ENTRE 1 Y 100.
function numeroAleatorio() {
    let numero = Math.floor(Math.random() * 100) + 1; // REDONDEA HACIA ABAJO((NUMERO DEL 0 A 1) * DE 0 A 99) + 1 PARA QUE LLEGUE A 100
    return numero
}
console.log(numeroAleatorio(1,100))

// ESCRIBE UN PROGRAMA QUE INVIERTA UNA CADENA DE TEXTO.
function invertirCadena(cadena) {
    let cadenaInvertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}
cadena = 'Fullstack';
console.log(invertirCadena(cadena));

// CREA UN PROGRAMA QUE VERIFIQUE SI UNA CONTRASEÑA TIENE AL MENOS 8 CARACTERES.
function verificarContraseña(contraseña) {
    if (contraseña.length >= 8)  {
        return true;
    } 
    return false;
}
contraseña = 'ricar';
console.log(verificarContraseña(contraseña));