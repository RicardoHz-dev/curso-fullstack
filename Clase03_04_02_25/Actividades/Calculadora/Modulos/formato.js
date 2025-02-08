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