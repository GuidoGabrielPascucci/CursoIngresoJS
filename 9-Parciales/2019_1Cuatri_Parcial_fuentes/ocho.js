/*
Pascucci, Guido Gabriel - Div C
Enunciado: Parcial 2019 - Ocho

Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
	var numero;
	var letra;
	var cantidadNumerosPares;
	var cantidadNumerosImpares;
	var cantidadCeros;
	var promedioPositivos;
	var acumuladorPositivos;
	var contadorPositivos;
	var acumuladorNegativos;
	var maximo;
	var letraDelMaximo;
	var maximoBandera;
	var minimo;
	var letraDelMinimo;
	var minimoBandera;
	var seguirIngresandoNumeros;

	seguirIngresandoNumeros = "si";
	cantidadNumerosPares = 0;
	cantidadNumerosImpares = 0;
	cantidadCeros = 0;
	acumuladorPositivos = 0;
	contadorPositivos = 0;
	acumuladorNegativos = 0;
	maximoBandera = 1;

	while (seguirIngresandoNumeros == "si")
	{
		letra = prompt ("Ingrese una letra");
		numero = prompt ("Ingrese un número");
		numero = parseInt (numero);

		while (numero < -100 || numero > 100)
		{
			numero = prompt ("Error. Ingrese nuevamente numero");
			numero = parseInt (numero);
		}

		if (numero % 2 == 0)
		{ 
			cantidadNumerosPares++; // A
		}
		else
		{
			cantidadNumerosImpares++; // B
		}

		if (numero == 0 )
		{
			cantidadCeros++; // C
		}
		else 
		{
			if (numero > 0)
			{
				acumuladorPositivos = acumuladorPositivos + numero;
				contadorPositivos++;
			}
			else
			{
				acumuladorNegativos = acumuladorNegativos + numero; // E
			}
		}

		if (maximoBandera == 1) // F
		{
			maximo = numero;
			letraDelMaximo = letra;
			minimo = numero;
			letraDelMinimo = letra;
			maximoBandera = 0;
		}
		else
		{
			if (numero > maximo)
			{
				maximo = numero;
				letraDelMaximo = letra;
			}
			else
			{
				if (numero < minimo)
				{
					minimo = numero;
					letraDelMinimo = letra;
				}
			}
		}

		seguirIngresandoNumeros = prompt ("¿Desea seguir ingresando números?");
	}

	promedioPositivos = acumuladorPositivos / contadorPositivos; // D

	document.write ("A- La cantidad de números pares = " + cantidadNumerosPares + "<br/> B- La cantidad de números impares = " + cantidadNumerosImpares + "<br/> C- La cantidad de ceros = " + cantidadCeros + "<br/> D- El promedio de todos los números positivos ingresados = " + promedioPositivos + "<br/> E- La suma de todos los números negativos = " + acumuladorNegativos + "<br/> F- El número y la letra del máximo y el mínimo: máximo = " + maximo + ", letra = " + letraDelMaximo + " mínimo = " + minimo + ", letra = " + letraDelMinimo);
}