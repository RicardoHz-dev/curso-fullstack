
// EVENTO 'MOUSEOVER' EN EL BTN
document.getElementById('hoverButton').addEventListener('mouseover', () => {
    console.log('Mouse sobre el boton');
});


// EVENTO 'KEYDOWN' EN EL CAMPO TEXTO
document.getElementById('teclaInput').addEventListener('keydown', (e) => {
    console.log(`Tecla presionada: ${e.key}`);
});

