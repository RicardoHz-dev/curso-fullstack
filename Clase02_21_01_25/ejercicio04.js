/*
Declara una variable precio con el valor de un producto y constante IVA con el valor
de 0.18 (18%). Calcula el precio final del producto.
*/

let precio = 100;
const IVA = 0.18;
let precioConIVA = precio + (precio * IVA);

console.log(`Precio original: ${precio}`);
console.log(`IVA: ${precio * IVA}`);
console.log(`Precio final: ${precioConIVA}`);

//Otras funcinalidades

// - Calcular precio con IVA y descuento