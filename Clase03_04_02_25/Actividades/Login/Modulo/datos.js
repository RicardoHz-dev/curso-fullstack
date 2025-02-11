
export const validarDatos = () => {
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    return correo === 'ricardohuaman64@gmail.com' && contraseña === '12345678';
};

