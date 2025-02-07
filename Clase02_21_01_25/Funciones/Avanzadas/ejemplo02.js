/*
2. Funciones que retornan funciones
Una función puede devolver otra función, lo que permite crear patrones avanzados como closures.
*/



/*
Crea una función en JavaScript llamada crearMultiplicador que reciba un parámetro multiplicador y devuelva una función que, cuando se le pase un número, lo multiplique por el valor de multiplicador.

La función crearMultiplicador debe devolver una nueva función que multiplique cualquier número por el multiplicador proporcionado.
Luego, crea dos funciones usando crearMultiplicador: una que duplique los números y otra que los triplique.
*/

function crearMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(5)); // 10
console.log(triplicar(5)); // 15

