/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
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
	}
	else
	{
		if(edadDelUsuario>17 && estadoCivil=="Soltero")
		{
			alert("Es soltero y no es menor.");
		}
	}

	alert("Fin de la función")
}