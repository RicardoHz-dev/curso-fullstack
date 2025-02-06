
// SELECCIONAR EL FORMULARIO
const formulario = document.getElementById('miFormulario');

// AGREGAR EL EVENTO 'SUBMIT' AL FORMULARIO
formulario.addEventListener('submit', (e) => { // 
    e.preventDefault(); // EVITAR EL ENVIO REAL - EVITAR QUE SE RECARGE LA PAG O SE ENVIE A UN SERVIDOR
    alert('Formulario enviado correctamente');
});
