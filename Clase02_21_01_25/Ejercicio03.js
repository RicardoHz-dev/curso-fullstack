/*
Crea dos variables a y b con valores iniciales. Intercambia los valores sin usar 
una tercera variable y muestra los resultados en la consola.
*/

let a = 5;
let b = 10;

console.log(`Antes del intercambio: a = ${a}, b = ${b}`);

//Intercambio de valores sin usar una tercera variable
a = a + b; //a = 15
b = a - b; // b = 5
a = a - b;

console.log(`Después del intercambio: a = ${a}, b = ${b}`);

//Otras funcionalidades para el ejercicio anterior:    
 // - Puedes intercambiar los valores utilizando una variable auxiliar
 // - Puedes aplicar una técnica para intercambiar valores con más variables