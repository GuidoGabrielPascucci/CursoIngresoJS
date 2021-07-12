function mostrar()
{
	let edadDelUsuario;
	let mensajeSalida;

	edadDelUsuario=document.getElementById('txtIdEdad').value;
	edadDelUsuario=parseInt(edadDelUsuario);
	mensajeSalida="El usuario es mayor de edad"

	if(edadDelUsuario>17)
	{
		alert(mensajeSalida);
	}

	alert("Fin de la función");
}