/*
FUNCIONES FLECHA (Arrow Functions)
*/

const sumar = (a, b) => a + b;
console.log(sumar(4,6)); // 10

/*
Crear un programa en JS que tenga un arreglo de objetos, donde cada objeto 
represente a una persona con propiedades como nombre y edad. Utiliza el método map
con una función flecha para extraer únicamente los nombres de las personas en un
nuevo arreglo y muéstralo en la consola.
*/

const personas = [ 
    { nombre: "Andrew", edad: 28},
    { nombre: "Enrique", edad: 25}
];

//usando una función flecha con map
const nombres = personas.map(persona => persona.nombre);
console.log(nombres); 

