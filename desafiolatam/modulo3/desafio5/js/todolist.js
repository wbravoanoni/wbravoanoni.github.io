tareas = [];
tareas.push(
    {'id' : '1719458896971','descripcion':'tarea 1','completado':false},
    {'id' : '1719458896972','descripcion':'tarea 2','completado':false},
    {'id' : '1719458896973','descripcion':'tarea 3','completado':false}
);

mostrartareas();

function creartarea(nombre){
    tareaNueva = {'id' : Date.now(),'descripcion':nombre,'completado':false}
    tareas.push(tareaNueva);
    mostrartareas();
}

function eliminarTareas(id){
    tareas = tareas.filter(tareas => tareas.id != id);
    mostrartareas();
}

function marcarCompletadas(id){
    tareas = tareas.map(tareas => {
        if(tareas.id == id){
            tareas.completado = !tareas.completado;
        }
        return tareas;
    })
    mostrartareas();
}

function mostrartareas(){
    const listadoTareas = document.querySelector('#listadoTareas');
    listadoTareas.innerHTML = '';

    let crearListadotareas = '';

    for(tarea of tareas){
        checked = tarea.completado ?  'checked' : '';
        tachado = tarea.completado ?  'text-decoration-line-through' : '';

        crearListadotareas += '<tr>' +
            '<td class="'+tachado+'">'+tarea.id+'</td>' +
            '<td class="'+tachado+'">'+tarea.descripcion+'</td>' +
            '<td><input onclick="marcarCompletadas('+tarea.id+')" class="form-check-input" type="checkbox" '+checked+'></td>' +
            '<td><button onclick="eliminarTareas('+tarea.id+')" class="btn btn-danger">X</button><td>'+
            '</tr>';
    }
    listadoTareas.innerHTML = crearListadotareas;
    contarTareasTotales();
    contartareascompletadas();
}

function contarTareasTotales(){
    const cajaTotalTareas = document.querySelector('#cajaTotal') 
    cajaTotalTareas.innerHTML = tareas.length;
}

function contartareascompletadas(){
    const cajaTotalCompletados = document.querySelector('#cajaTotalCompletados');
    elementosCompletados = tareas.filter(tareas => tareas.completado)
    cajaTotalCompletados.innerHTML = elementosCompletados.length;
}

const btn_agregar = document.querySelector('#btn_agregar');

btn_agregar.addEventListener('click', function(){
    let nombreTarea = document.querySelector('#nombre_tarea');
    creartarea(nombreTarea.value);
    nombreTarea.value = '';
})