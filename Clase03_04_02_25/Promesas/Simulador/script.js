
let tareas = [];

// Simula la carga inicial de datos desde un servidor
const obtenerDatosDelServidor = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if(exito){
                resolve([
                    {id: 1, nombre: "Tarea 1" },
                    {id: 2, nombre: "Tarea 2" },
                    {id: 3, nombre: "Tarea 3" },
                ]);
            } else {
                reject("Error al cargar los datos ...");
            }
        }, 2000);
    });
};

// Cargar tareas desde el servidor y mostrarlas en la lista
const cargarDatos = async () => {
    const lista = document.getElementById("listaDatos");
    lista.innerHTML = "<li>Cargando tareas...</li>";

    try {
        const datos = await obtenerDatosDelServidor();
        tareas = datos; 
        guardarLocalStorage();
        mostrarTareas();
    }catch (error) {
        lista.innerHTML = `<li style="color: red;">${error}</li>`;
    }
};


// ----- AGREGAR UNA TAREA -----
const agregarTarea = (e) => {
    e.preventDefault();
    const inputTarea = document.getElementById("nuevaTarea");
    
    let tareaRepetida = false;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].nombre === inputTarea.value) {
            tareaRepetida = true;
            break;
        }
    }

    if (tareaRepetida) {
        alert(`La tarea con nombre ${inputTarea.value} ya esta agregada`);
        inputTarea.value = "";
    } else {
        const nuevaTarea = {
            id: Date.now(),
            nombre: inputTarea.value,
        };
        tareas.push(nuevaTarea);
        console.log(tareas)
        guardarLocalStorage();
        inputTarea.value = "";
    }
};

// ----- BUSCAR UNA TAREA POR EL NOMBRE ----
const buscarTarea = (e) => {
    e.preventDefault();
    const tareaBuscar = document.getElementById("nuevaTarea");
    const lista = document.getElementById("listaDatos");
    lista.innerHTML = ""; 

    let tareaEncontrada = null;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].nombre === tareaBuscar.value) {
            tareaEncontrada = tareas[i];
            break;
        }
    }

    if (tareaEncontrada) {
        const li = document.createElement("li"); 
        li.textContent = `ID: ${tareaEncontrada.id} - Tarea: ${tareaEncontrada.nombre}`;
        lista.appendChild(li);
        tareaBuscar.value = '';
    } else {
        lista.innerHTML = `<p> No existe la tarea: ${tareaBuscar.value} </p>`;
        tareaBuscar.value = '';
    }
};

const editarTarea = (e) => {
    e.preventDefault()
    const input = document.getElementById('tareaId');
    const inputId = parseInt(document.getElementById('tareaId').value);
    
    const tareaEncontrada = tareas.find(tarea => tarea.id === inputId);

    if (tareaEncontrada) {
        const nuevoNombre = prompt('Ingrese el nuevo nombre de la tarea: ');
        tareaEncontrada.nombre = nuevoNombre;
        guardarLocalStorage();
        mostrarTareas();
    } else {
        alert('No se encontro la tarea!');
    }
    input.value = '';
};

const eliminarTarea = (e) => {
    e.preventDefault()
    const input = document.getElementById('tareaId');
    const inputId = parseInt(document.getElementById('tareaId').value);    
    const index = tareas.findIndex(tarea => tarea.id === inputId);

    if (index !== -1) {
        tareas.splice(index, 1)
        guardarLocalStorage();
        mostrarTareas();
    } else {
        alert('No se encontro la tarea!');
    }
    input.value = '';
}; 

// -----MOSTRAR TODAS LAS TAREAS ----
const mostrarTareas = () => {
    const lista = document.getElementById("listaDatos");
    lista.innerHTML = ""; // LIMPIA LA LISTA PARA EVITAR DUPLICADOS

    if (tareas.length === 0) {
        lista.innerHTML = "<br> <p>No hay tareas para ver. Inserte una nueva tarea</p>";
    } else {
        tareas.forEach((tarea) => {
            const li = document.createElement("li"); 
            li.textContent = tarea.nombre;
            lista.appendChild(li);
        });
    }
};

// ----- GUARDAR EN LOCALSTORAGE -----
const guardarLocalStorage = () => {
    localStorage.setItem('tareas', JSON.stringify(tareas)); // CONVIERTE EL ARRAY DE OBJ EN STR
};

// ----- CARGAR TAREAS DESDE LOCALSTORAGE -----
const cargarLocalStorage = () => {
    const datosGuardados = localStorage.getItem("tareas");
    if (datosGuardados) {
        tareas = JSON.parse(datosGuardados); // CONVIERTE LOS STR A UN ARRAY DE OBJ
        // mostrarTareas();
    }
};

// ----- ELIMINAR TODAS LAS TAREAS -----
const vaciarLocalStorage = () => {
    const lista = document.getElementById("listaDatos");
    lista.innerHTML = ""
    tareas = [];
    console.log(tareas)
    localStorage.clear();
}


document.getElementById('btnAgregar').addEventListener('click', agregarTarea);
document.getElementById('btnBuscar').addEventListener('click', buscarTarea);

document.getElementById("btnEditar").addEventListener("click", editarTarea);
document.getElementById("btnEliminar").addEventListener("click", eliminarTarea);

document.getElementById('btnMostrar').addEventListener('click', mostrarTareas);

document.getElementById("cargarDatos").addEventListener("click", cargarDatos);
document.getElementById('btnTodo').addEventListener('click', vaciarLocalStorage);
document.addEventListener("DOMContentLoaded", cargarLocalStorage);





