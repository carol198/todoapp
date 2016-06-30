function agregar(contenedor, texto, clase){
			var nuevo = document.createElement("p");
			var texto = document.createTextNode(texto);
			nuevo.setAttribute("class", clase);
			nuevo.appendChild(texto);		
			contenedor.appendChild(nuevo);
}

function caller(clase){
			var nuevo = document.getElementById("nuevo");
			var texto = nuevo.children.length + 1
			agregar(nuevo, texto, clase);
}
function obtener(){
	var obt = document.getElementById('texto').value;
	var obt2 = document.getElementById('txt');
	obt2.innerHTML=obt;
}

document.getElementById('boton').addEventListener(""){
	function obtener(){
	var obt = document.getElementById('texto').value;
	var obt2 = document.getElementById('txt');
	obt2.innerHTML=obt;
}
}