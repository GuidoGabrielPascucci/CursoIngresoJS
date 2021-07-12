/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
*/

function mostrar()
{
	let edadDelUsuario;
	let mensajeSalida;
	let mensajeSalida2;

	edadDelUsuario=document.getElementById('txtIdEdad').value;
	edadDelUsuario=parseInt(edadDelUsuario);

	mensajeSalida="Usuario mayor de edad";
	mensajeSalida2="Usuario menor de edad";

	if(edadDelUsuario>17)
	{
		alert(mensajeSalida);
	}
	if(edadDelUsuario<18)
	{
		alert(mensajeSalida2);
	}
	alert("Fin de la función");
}