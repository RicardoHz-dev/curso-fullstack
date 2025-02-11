
import { validarDatos } from './Modulo/datos.js';

const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let exito = validarDatos();
            if (exito) {
                resolve('Login existoso');
            }
            else {
                reject('Login fallido');
            }
        },1500);
    });
};

const ejecutarlogin = async (e) => {
    e.preventDefault();
    const mensaje = document.getElementById('mensaje');
    try {
        const datos = await obtenerDatos();
        mensaje.innerText = `Mensaje: ${datos}`;
    } catch (error) {
        mensaje.innerText = `Mensaje: ${error}`;
    }
}

addEventListener('submit', ejecutarlogin);