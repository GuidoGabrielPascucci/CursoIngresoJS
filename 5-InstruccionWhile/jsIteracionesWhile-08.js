/*
Pascucci, Guido
Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/

function mostrar()
{
	/*
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		
		if (numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		else
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
		}
		respuesta=prompt("¿Quiere pedir otro número?");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
	*/


	var numeroIngresado;
	var sumaDePositivos;
	var productoDeNegativos;
	var seguir;

	sumaDePositivos=0;
	productoDeNegativos=1;
	seguir="si";

	while(seguir=="si")
	{
		numeroIngresado=prompt("Ingrese número");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			sumaDePositivos=numeroIngresado+sumaDePositivos;
		}
		else
		{
			productoDeNegativos=numeroIngresado*productoDeNegativos;
		}
		seguir=prompt("¿Quiere seguir pidiendo números?");
	}

	txtIdSuma.value=sumaDePositivos;
	txtIdProducto.value=productoDeNegativos;
}