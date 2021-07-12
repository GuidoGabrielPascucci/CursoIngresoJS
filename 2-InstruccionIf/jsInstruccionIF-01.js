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