function agregarTarea(){
    const nuevaTarea = document.getElementById("nuevaTarea");
    const textoTarea = nuevaTarea.value.trim();

    const listadoTarea = document.getElementById("listadoTareas");

    const li = document.createElement("li");
    li.innerHTML = `<span>${textoTarea}</span> <button class="borrar-btn">Eliminar</button>`;

    listadoTarea.appendChild(li);
}