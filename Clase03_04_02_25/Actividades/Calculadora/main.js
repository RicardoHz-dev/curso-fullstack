import { calcularDescuento, agregarIgv } from './Modulos/calculos.js';
import { darFormato } from './Modulos/formato.js';



const activarCalculadora = (e) => {
    e.preventDefault();
    let precio = document.getElementById('precio');
    let descuento = document.getElementById('descuento'); 
    let moneda = document.getElementById('moneda');

    console.log(precio.value);
    console.log(descuento.value);
    console.log(moneda.value)

    let precioFinal = calcularDescuento(precio.value, descuento.value);
    let precioIgv = agregarIgv(precioFinal);

    console.log(`Precio Final: ${precioFinal}`);
    console.log(`Precio Final (IGV): ${precioIgv}`);

    let rpta = document.getElementById('resultado');
    let rptaIgv = document.getElementById('igv');

    rpta.innerText = `Precio final : ${darFormato(precioFinal, moneda.value)}`;
    rptaIgv.innerText = `Precio final (IGV): ${darFormato(precioIgv, moneda.value)}`;

    precio.value = '';
    descuento.value = '';
};

document.getElementById('calcular').addEventListener('click', activarCalculadora);




// const { calcularDescuento } = require('./Modulos/calculos.js');
// const { darFormato } = require('./Modulos/formato.js');

// const readline = require('readline');
// // ---- USANDO CONSOLA ----
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function activarCalculadora() {
//     rl.question('Precio original: ', (precio) => {
//         rl.question('Descuento (%): ', (descuento) => {
//             rl.question('Tipo de moneda (PEN/US/EUR): ', (moneda) => {
//                 try {
//                     precio = parseFloat(precio);
//                     descuento = parseFloat(descuento);
//                     moneda = moneda.toUpperCase();

//                     const precioFinal = calcularDescuento(precio, descuento);
//                     console.log(`Precio final: ${darFormato(precioFinal, moneda)}`);
//                 } catch (error) {
//                     console.log(`${error.message}`);
//                 } finally {
//                     rl.close();
//                 }
//             });
//         });
//     });
// }
// activarCalculadora()

