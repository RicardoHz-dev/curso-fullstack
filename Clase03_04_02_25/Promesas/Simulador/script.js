
// SIMULAR LA CARGA INICIAL DE LOS DATOS DESDE UN SERVIDOR
const obtenerData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve([
                    {id: 1, nombre: 'Tarea 1'},
                    {id: 2, nombre: 'Tarea 2'},
                    {id: 3, nombre: 'Tarea 3'}
                ]);
            } else {
                reject('Error al cargar los datos');
            }
        }, 2000);
    });
};


let tareas = []; // VARIABLE LOCAL PARA LAS TAREAS

// CARGAR LAS TAREAS DESDE EL SERVIDOR Y MOSTRAR EN LA LISTA
const cargarDatos = async () => {
    const lista = document.getElementById('listaDatos');
    lista.innerHTML = '<li>Cargar tareas</li>';

    try {
        const datos = await obtenerData();
        tareas = datos; // ALMACENAR LAS TAREAS GUARDADAS
        guardarEnLocalStorage();
        mostrarTareas();
    } catch (error) {
        lista.innerHTML = `<li style="color: red">${error}</li>`;
    }
};


// MOSTRAR TAREAS EN EL DOM
const mostrarTareas = (filtradas = null) => {
    const lista = document.getElementById('listaDatos');
    lista.innerHTML = "";

    const tareasMostrar = filtradas || tareas;

    tareasMostrar.forEach((tarea) => {
        const li = document.getElementById('li');
        li.textContent = tarea.nombre;

    });
};

// AGREGAR UNA NUEVA TAREA
const agregarTarea = (evento) => {
    evento.PreventDefault();
    const nuevaTareaInput = document.getElementById('nuevaTarea');
    const nuevaTarea = {
        id: Date.now(),
        nombre: nuevaTareaInput.value,
    };
    tarea.push(nuevaTarea);
    guardarEnLocalStorage();
    mostrarTareas();
    nuevaTareaInput.value = '';
};

// ELIMINAR TAREA POR ID 

// EDITAR TAREA POR ID 

// BUSCAR TAREAS POR NOMBRE

// CARGAR TAREAS DESDE EL LOCAL STORAGE
console.log(tareas)