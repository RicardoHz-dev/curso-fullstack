

const form = document.getElementById('registroForm');
const resultadoDiv = document.getElementById('resultado');


form.addEventListener('submit', (event) => {
    event.preventDefault(); // EVITAR QUE EL ENVIO SEA POR DEFECTO 
    const datos = { // OBTENER DATOS DEL FORM
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        telefono: document.getElementById('telefono').value,
        mensaje: document.getElementById('mensaje').value,
    };
    enviarDatosForm(datos)
    .then((mensaje) => {
        resultadoDiv.textContent = mensaje;
        resultadoDiv.className = 'message success';
    })
    .catch((error) => {
        resultadoDiv.textContent = error;
        resultadoDiv.className = 'message error';
    });
});

function enviarDatosForm(datos) {
    return new Promise((resolve, reject) => {
        // SIMULAR UNA FUNCION ASINCRONA
        const exito = Math.random() > 0.3; // 70% DE EXITO
        setTimeout(() => {
            if (exito) {
                resolve('Datos enviados correctamente');
            } else {
                reject('Hubo un error al enviar los datos');
            }
        }, 1500); // RETRASO 1.5 segundos
    });
}