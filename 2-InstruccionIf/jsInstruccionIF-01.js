/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	let edadDelUsuario;
	edadDelUsuario=document.getElementById('txtIdEdad').value;
	edadDelUsuario=parseInt(edadDelUsuario);
	if (edadDelUsuario==15){
		alert("Niña bonita");
	}
	alert("Fin de la función");
}