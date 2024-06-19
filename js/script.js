

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if(taskInput.value===''){
        alert("¡Has de introducir una tarea antes!")
    }

    else{
        let li=document.createElement("li");//creamos una etiqueta tipo li
        li.innerHTML=taskInput.value;//añadimos en dicha etiqueta la frase introducida por el suuario
        taskList.appendChild(li);//al conjunto de tareas añadimos esa nueva tarea

        // X para elimniar una tarea tarea
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.append(span);

        save();
        taskInput.value='';
    }

//la lista de tareas(expresion lambda mas sencillo)
    taskList.addEventListener("click",function(e){
//Si hacemos clic sobre una tarea
if(e.target.tagName==="LI"){
    e.target.classList.toggle("completada");
    save();
}
//si hacemos click sobre la x para eliminar
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    save();
}
    },false)

}

//Función para guardar las tareas y no perderlas
function save(){
    localStorage.setItem("tareas",taskList.innerHTML)
}

//CUANDO EL USUARIO PULSE ENTER EN LUGAR DE HACER CLICK SOBRE EL BOTÓN (ES MAS PRÁCTICO)
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
                addTask();
    }
});

//Recuperar datos
function mostrarTareas(){
    taskList.innerHTML=localStorage.getItem("tareas");
}

mostrarTareas();