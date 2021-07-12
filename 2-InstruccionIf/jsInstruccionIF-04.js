/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive).
*/

function mostrar()
{
	let edadDelUsuario;
	let mensajeSalida;

	edadDelUsuario=document.getElementById('txtIdEdad').value;
	edadDelUsuario=parseInt(edadDelUsuario);
	mensajeSalida="Usuario adolescente";

	if(edadDelUsuario<18)
	{
		alert("Usuario menor de edad");
		if(edadDelUsuario>12)
		{
			alert(mensajeSalida);
		}
	}
	alert("Fin de la función");
}//FIN DE LA FUNCIÓN