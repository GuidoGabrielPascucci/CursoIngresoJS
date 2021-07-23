/*
Pascucci, Guido
Enunciado:
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		respuesta=prompt("¿Quiere seguir pidiendo números?");
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}