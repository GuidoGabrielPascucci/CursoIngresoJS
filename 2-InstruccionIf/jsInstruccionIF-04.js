/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive).
*/

function mostrar()
{
	let edadDelUsuario;
	let mensajeSalidaMenor;
	let mensajeSalidaAdolescente;
	let mensajeSalidaMayor;

	edadDelUsuario=document.getElementById('txtIdEdad').value;
	edadDelUsuario=parseInt(edadDelUsuario);
	
	mensajeSalidaMenor="Usuario menor de edad";
	mensajeSalidaAdolescente="Usuario adolescente";
	mensajeSalidaMayor="Usuario mayor de edad";

	if(edadDelUsuario>17)
	{
		alert(mensajeSalidaMayor);
	}
	else
		if (edadDelUsuario>12)
		{
			alert(mensajeSalidaAdolescente);
		}
	else
		alert(mensajeSalidaMenor);
	alert("Fin de la función");
}