/*
Pascucci, Guido Gabriel
Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/
function mostrar()
{
	/*
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("Error, ingrese nuevamente la clave");
	}

	alert("Bienvenido");
	*/


	var claveIngresada;

	claveIngresada=prompt("Ingrese su clave, por favor.");

	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("No se pudo acceder a su cuenta. Por favor, ingrese nuevamente su clave.");
	}
	
	alert("Su clave es correcta. Bienvenido.");
}
