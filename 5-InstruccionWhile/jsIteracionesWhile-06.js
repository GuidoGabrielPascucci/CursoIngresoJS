/*
Pascucci, Guido
Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese números");
		numeroIngresado=parseInt(numeroIngresado);
		contador++;
		acumulador=numeroIngresado+acumulador;
	}

	promedio=acumulador/5;
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}