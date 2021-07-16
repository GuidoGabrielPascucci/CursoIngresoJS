/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	let edadDelUsuario;
	let estadoCivil;

	edadDelUsuario=document.getElementById('txtIdEdad').value;
	edadDelUsuario=parseInt(edadDelUsuario);
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edadDelUsuario<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}
	
	alert("Fin de la función");
}