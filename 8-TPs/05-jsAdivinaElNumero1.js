/*
Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego.
Dispondremos de un cuadro de texto para ingresar 
un número y un botón “Verificar”, si el número 
ingresado es el mismo que el número secreto se dará 
por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…” 
para llegar al número secreto  o si “se pasó…” 
del número secreto.
*/

var numeroSecreto; 
var contadorIntentos = 0;

function comenzar()
{
	var maximo = 100;
	var minimo = 1;

	numeroSecreto = Math.round (Math.random() * (maximo - minimo) + 1 );
	console.log (numeroSecreto);
}

function verificar()
{
	var numeroIngresado;
	
	numeroIngresado = txtIdNumero.value;
	numeroIngresado = parseInt (numeroIngresado);
	contadorIntentos++;

	if (numeroIngresado < numeroSecreto) {
		alert ("Falta...");
	}
	else if (numeroIngresado > numeroSecreto) {
		alert ("Se pasó...");
	}
	else {
		alert ("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
		contadorIntentos = "";
		txtIdNumero.value = "";
	}

	txtIdIntentos.value = contadorIntentos;
}