/*
3. Funciones recursivas
Una función que se llama a sí misma para resolver problemas que pueden dividirse en subproblemas similares.
*/

/*
Crea una función en JavaScript llamada factorial que calcule el factorial de un número n de forma recursiva. El factorial de un número n (denotado como n!) es el producto de todos los enteros positivos desde 1 hasta n.

La función debe verificar si n es igual a 0 (caso base) y retornar 1 en ese caso, ya que el factorial de 0 es 1.
Si n es mayor que 0, la función debe llamarse a sí misma (recursión) con n - 1 hasta llegar al caso base.
*/


function factorial(n) {
    if (n === 0) return 1; // Caso base
    return n * factorial(n - 1); // Llamada recursiva
}

console.log(factorial(5)); // 120
