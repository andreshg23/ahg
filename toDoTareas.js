function agregarTarea(){
    const nuevaTarea = document.getElementById("nuevaTarea");
    const textoTarea = nuevaTarea.value.trim();
    
    if(textoTarea === ""){
        alert("Agregue una tarea");
        return
    }

    const listadoTarea = document.getElementById("listadoTareas");

    const li = document.createElement("li");
    li.innerHTML = `<span>${textoTarea}</span> <button class="borrar-btn" onclick="borrarTarea(this)">Eliminar</button>`;

    li.querySelector("span").addEventListener("click", function(){
        this.parentElement.classList.toggle("completado");
    });

    listadoTarea.appendChild(li);

    nuevaTarea.value = "";

    guardarTareasEnLocalStorage();
}

function borrarTarea(elementoTarea){
    elementoTarea.parentElement.remove();

}

const inputNuevaTarea = document.getElementById("nuevaTarea");



inputNuevaTarea.addEventListener("keypress", function(tecla){
    if(tecla.key === "Enter"){
        agregarTarea();
    }
});

function guardarTareasEnLocalStorage(){
    const tareas = [];
    document.querySelectorAll("li").forEach(tarea => {
        tareas.push({
            Nombre_Tarea: tarea.querySelector("span").innerText,
            Estado_Tarea: tarea.classList.contains("completado")
        });
    });

    localStorage.setItem("TareasGuardadas", tareas);
}