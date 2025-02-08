
// const calcularDescuento = (precio, descuento) => {
//     const precioFinal = precio - (precio * (descuento / 100));
//     return precioFinal
// };


// module.exports = { calcularDescuento };

export const calcularDescuento = (precio, descuento) => {
    const precioFinal = precio - (precio * (descuento / 100));
    return precioFinal
};