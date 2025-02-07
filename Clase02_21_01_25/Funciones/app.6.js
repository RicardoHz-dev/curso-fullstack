/*
2. Manipulación de datos
Usar funciones para ordenar o filtrar datos en aplicaciones.
*/

/*
Crea un programa en JavaScript que tenga un arreglo de objetos, donde cada 
objeto represente un producto con propiedades como nombre y precio. Utiliza el 
método filter con una función flecha para filtrar los productos cuyo precio sea mayor a 100. Muestra en la consola un nuevo arreglo con los productos que cumplen esta condición.
*/


const productos = [
    { nombre: "Laptop", precio: 1500 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 }
];

// Función para filtrar productos caros
const productosCaros = productos.filter(producto => producto.precio > 100);
console.log(productosCaros);
/*
[
    { nombre: "Laptop", precio: 1500 }
]
*/
