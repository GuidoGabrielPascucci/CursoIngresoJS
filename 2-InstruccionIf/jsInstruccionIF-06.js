/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{
	let edadDelUsuario;

	edadDelUsuario=document.getElementById('txtIdEdad').value;
	edadDelUsuario=parseInt(edadDelUsuario);

	if(edadDelUsuario<13)
	{
		alert("Eres un niño");
	}
	else
	{
		if(edadDelUsuario>17)
		{
			alert("Mayor de edad");
		}
		else
		{
			alert("Eres un adolescente");
		}
	}
}