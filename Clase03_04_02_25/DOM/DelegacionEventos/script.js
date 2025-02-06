
// SELECCIONAR EL CONTENEDOR
const contenedor = document.getElementById('contenedor');

// ESCUCHAR EL EVENTO 'CLICK' EN EL CONTENEDOR
contenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('dinamico')) { // EL CLICK FUE CON UN BTN DE CLASE DINAMICO?
        alert(`Click en ${e.target.textContent}`); 
    }
});