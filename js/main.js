var agregarTarea = function(){
		var lista = document.getElementById("lista"),
		tarea = document.getElementById("tareaA"),
		nuevaTarea = document.getElementById("boton");

		var tarea = tareaA.value;
		var	nuevaTarea = document.createElement("div");
		var	contenido = document.createTextNode(tarea);
		var	icono = document.createElement("span");

			icono.setAttribute("id","icon"),
			icono.setAttribute("class","glyphicon glyphicon-trash");
			icono.addEventListener("click", eliminarRegistro);
			//icono.onclick(eliminarRegistro);
 
		if (tarea === "") {
		alert("Ingresar una tarea");
		}
		else{
 
		nuevaTarea.appendChild(contenido);
		nuevaTarea.appendChild(icono);
		lista.appendChild(nuevaTarea);
		tareaA.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
				lista.children[i].addEventListener("click", function(){
					this.parentNode.removeChild(this);
				});
			}
			
        }
}		
 	
function eliminarTodo(){
		lista.innerHTML = "";
}

	var eliminarRegistro = function(){
		this.parentNode.removeChild(this);
	};