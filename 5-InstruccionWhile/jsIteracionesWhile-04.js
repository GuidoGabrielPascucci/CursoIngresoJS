/*
Pascucci, Guido
Enunciado:
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	/* ---- ESTA MAL ----
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while(numeroIngresado>9) // LA LOGICA ES INCORRECTA.
	{
		numeroIngresado=prompt("Ingrese nuevamente un número entre 0 y 10");
	}
	document.getElementById('txtIdNumero').value=numeroIngresado;
	*/

	
	var numeroIngresado;

	numeroIngresado=prompt("Por favor ingrese un número.");

	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado=prompt("Error: No está entre los números establecidos. Por favor ingrese nuevamente un número.");
	}

	txtIdNumero.value=numeroIngresado;
	alert("Genial, usted ha ingresado un número correcto.");
}