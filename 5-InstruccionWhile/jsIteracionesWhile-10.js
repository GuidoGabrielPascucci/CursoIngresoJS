/*
Al presionar el botón, pedir  números  
hasta que el usuario quiera, y mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos).
*/
/*function mostrar()
{
	//declarar contadores y variables 
	
	var numeroIngresado;
	var sumaNegativos; // 1
	var sumaPositivos; // 2
	var cantidadPositivos; // 3
	var cantidadNegativos; // 4
	var cantidadCeros; // 5
	var cantidadNumerosPares; // 6
	var promedioDePositivos; // 7
	var promedioDeNegativos; // 8
	var diferenciaPositivosNegativos; // 9
	var seguir;
	var bandera;

	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadCeros = 0;
	cantidadNumerosPares = 0;
	seguir = "si";
	bandera = "a";

	while (seguir === "si") {
		numeroIngresado=prompt("Ingrese un número:");
		numeroIngresado=parseInt(numeroIngresado);

		if (numeroIngresado < 0) {
			sumaNegativos = numeroIngresado + sumaNegativos;
			cantidadNegativos++;

		} else if (numeroIngresado == 0) {
			cantidadCeros++;

		} else {
			if (numeroIngresado % 2 == 0) {
				cantidadNumerosPares++;
			}
			sumaPositivos = numeroIngresado + sumaPositivos;
			cantidadPositivos++;
		}

		seguir = prompt("¿Desea pedir otro número?");
	}

	promedioDePositivos=sumaPositivos/cantidadPositivos;
	promedioDeNegativos = sumaNegativos/cantidadNegativos;
	diferenciaPositivosNegativos=sumaPositivos-sumaNegativos;

	document.write("1- La suma de negativos es: "+sumaNegativos+"<br/> 2- La suma de positivos es: "+sumaPositivos+"<br/> 3- La cantidad de positivos es: "+cantidadPositivos+"<br/> 4-La cantidad de negativos es: "+cantidadNegativos+"<br/> 5 - La cantidad de ceros es: "+cantidadCeros+"<br/> 6-Cantidad de números pares"+ cantidadNumerosPares + "<br/> 7- El promedio de negativos es: "+promedioDeNegativos+"<br/> 8- El promedio de positivos es: "+promedioDePositivos+"<br/> 9- La diferencia de positivos y negativos es: "+diferenciaPositivosNegativos);
}

/*
isNaN(valor) // si es true, no es un numero
isNaN(valor) // si es false, es un número
*/

var numeroIngresado;
var sumaNegativos = 0; // 1
var sumaPositivos; // 2
var cantidadPositivos; // 3
var cantidadNegativos; // 4
var cantidadCeros; // 5
var cantidadNumerosPares; // 6
var promedioDePositivos; // 7
var promedioDeNegativos; // 8
var diferenciaPositivosNegativos; // 9
var seguir;
var bandera;

sumaPositivos = 0;
cantidadNegativos = 0;
cantidadPositivos = 0;
cantidadCeros = 0;
cantidadNumerosPares = 0;
seguir = "si";
bandera = "a";

function isNegativeNumber(numberParse) {
	sumaNegativos = sumaNegativos + numberParse;
	cantidadNegativos++;
}

function isEvenNumberAndPositive(numberParse) {
	if (numberParse % 2 == 0) {
		cantidadNumerosPares++;
	}
	sumaPositivos = numberParse + sumaPositivos;
	cantidadPositivos++;
}

function mostrar() {
	//declarar contadores y variables 
	numeroIngresado = prompt("Ingrese un número para comenzar o salir con N");

	while (!isNaN(parseInt(numeroIngresado))) {
		var numberParse = parseInt(numeroIngresado);

		if (numberParse < 0) {
			isNegativeNumber(numberParse)
		} else if (numberParse == 0) {
			cantidadCeros++;
		} else {
			isEvenNumberAndPositive(numberParse)
		}

		numeroIngresado = prompt("Ingrese un número o salir con N");
	}

	promedioDePositivos = sumaPositivos / cantidadPositivos;
	promedioDeNegativos = sumaNegativos / cantidadNegativos;
	diferenciaPositivosNegativos = sumaPositivos - sumaNegativos;

	document.write("1- La suma de negativos es: "+sumaNegativos+"<br/> 2- La suma de positivos es: "+sumaPositivos+"<br/> 3- La cantidad de positivos es: "+cantidadPositivos+"<br/> 4-La cantidad de negativos es: "+cantidadNegativos+"<br/> 5 - La cantidad de ceros es: "+cantidadCeros+"<br/> 6-Cantidad de números pares"+ cantidadNumerosPares + "<br/> 7- El promedio de negativos es: "+promedioDeNegativos+"<br/> 8- El promedio de positivos es: "+promedioDePositivos+"<br/> 9- La diferencia de positivos y negativos es: "+diferenciaPositivosNegativos);
}

