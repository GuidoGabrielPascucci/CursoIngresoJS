/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;

function comenzar()
{
	contadorIntentos = "";
	numeroIngresado = "";

	var maximo = 100;
	var minimo = 1;

	numeroSecreto = Math.round (Math.random () * (maximo - minimo) + 1);
	console.log (numeroSecreto);

	contadorIntentos = 0;	
}

function verificar()
{
	
	numeroIngresado = txtIdNumero.value;
	numeroIngresado = parseInt (numeroIngresado);
	contadorIntentos++;

	if (numeroIngresado > numeroSecreto) {
		alert ("Se pasó...");
	}
	else if (numeroIngresado < numeroSecreto) {
		alert ("Falta...");
	}
	else {
		switch (contadorIntentos) {
			case 1:
				alert ("Usted es un psíquico");
				txtIdNumero.value = "";
				contadorIntentos = "";
				break;

			case 2:
				alert ("Excelente percepción");
				txtIdNumero.value = "";
				contadorIntentos = "";
				break;

			case 3:
				alert ("Esto es suerte");
				txtIdNumero.value = "";
				contadorIntentos = "";
				break;

			case 4:
				alert ("Excelente técnica");
				txtIdNumero.value = "";
				contadorIntentos = "";
				break;

			case 5:
				alert ("Usted está en la media");
				txtIdNumero.value = "";
				contadorIntentos = "";
				break;

			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert ("Falta técnica");
				txtIdNumero.value = "";
				contadorIntentos = "";
				break;

			default:
				alert ("Afortunado en el amor!!");
				txtIdNumero.value = "";
				contadorIntentos = "";
				break;
		}
	}
	txtIdIntentos.value = contadorIntentos;
}