/*
Pascucci, Guido
Enunciado:
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while(numeroIngresado>9)
	{
		numeroIngresado=prompt("Ingrese nuevamente un número entre 0 y 10");
	}
	document.getElementById('txtIdNumero').value=numeroIngresado;
}