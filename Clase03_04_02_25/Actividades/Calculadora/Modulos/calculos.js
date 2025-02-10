
// const calcularDescuento = (precio, descuento) => {
//     const precioFinal = precio - (precio * (descuento / 100));
//     return precioFinal
// };


// module.exports = { calcularDescuento };

export const calcularDescuento = (precio, descuento) => {
    const precioFinal = precio - (precio * (descuento / 100));
    return precioFinal
};


export const agregarIgv = (precioFinal) => {
    const precioIgv = precioFinal + (precioFinal * 0.18);
    return precioIgv;
};


export const darFormato = (monto, moneda) => {
    let formato = {};
    let montoFormateado
    switch (moneda) {
        case 'PEN':
            formato = {
                symbol: "S/",
                pattern: "!#",
                separator: ",",
                decimal: ".",
            };
            montoFormateado = currency(monto, formato).format();
            break;
        case 'USD':
            formato = {
                symbol: "$",
                pattern: "!#",
                separator: ",",
                decimal: ".",
            };
            montoFormateado = currency(monto, formato).format();
            break;
        case 'EUR':
            formato = {
                symbol: "€",
                pattern: "# !",
                separator: ".",
                decimal: ",",
            }; 
            montoFormateado = currency(monto, formato).format();
            break;
    }
    return montoFormateado
};

// const currency = require('currency.js');

// const darFormato = (monto, moneda) => {
//     let formato = {};
//     let montoFormateado
//     switch (moneda) {
//         case 'PEN':
//             formato = {
//                 symbol: "S/",
//                 pattern: "!#",
//                 separator: ",",
//                 decimal: ".",
//             };
//             montoFormateado = currency(monto, formato).format();
//             break;
//         case 'US':
//             formato = {
//                 symbol: "$",
//                 pattern: "!#",
//                 separator: ",",
//                 decimal: ".",
//             };
//             montoFormateado = currency(monto, formato).format();
//             break;
//         case 'EUR':
//             formato = {
//                 symbol: "€",
//                 pattern: "# !",
//                 separator: ".",
//                 decimal: ",",
//             }; 
//             montoFormateado = currency(monto, formato).format();
//             break;
//     }
//     return montoFormateado
// };

// module.exports = { darFormato };