let nombre = "Andrew"; // variable que puede cambiar
const edad = 28; // Constante
var ciudad = "Chiclayo"; // Variable obsoleta, pero válida

console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);


nombre = "Carlos";
ciudad = "Lima";
//const edad = 29; // Ya está declarado arriba

console.log(`Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);


//EVITAR ERRORES
/*
Evita redefinir variables con el mismo nombre
Usa const solo cuando el valor no cambie
Evita usar var, ya que puede causar comportamientos inesperados debido a su 
alcance global o de función. (Prefiere let o const)
*/

