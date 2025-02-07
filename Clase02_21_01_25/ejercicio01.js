/*
Declara una constante PI con el valor de 3.1416 y una variable radio. Calcule el área del círculo y muestra
el resultado en la consola.
*/;

const PI = 3.1416;
let radio = 8;
let area = PI * radio * radio;

console.log(`El área de un círculo con radio ${radio} es: ${area.toFixed(2)}`);