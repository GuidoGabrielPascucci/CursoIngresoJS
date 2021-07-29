/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{
	var numeroRecorrido;
	let numeroAnterior;

	numeroRecorrido = 8;

	/*
	for (numeroAnterior = 2; numeroAnterior < numeroRecorrido;numeroAnterior++)
	{
		//console.log (numeroAnterior);
		 if (numeroAnterior % 2 == 0)
		{
			console.log (numeroAnterior + " es par");
		}
		
		if (numeroRecorrido % numeroAnterior == 0) // para saber si es numero primo
		{
			console.log	(numeroAnterior + " Es divisor de " + numeroRecorrido);
			break;
		}
	}

	if (numeroAnterior != numeroRecorrido)
	{
		console.log (numeroRecorrido + " no es primo ");
	}
	else
	{
		console.log (numeroAnterior + " es primo");
	}

	*/

	var numeroIngresado;

	numeroIngresado = 100;

	for (numeroRecorrido = 0; numeroRecorrido < numeroIngresado; numeroRecorrido++)
	{
		//console.log (numeroRecorrido);
		for (numeroAnterior = 2; numeroAnterior < numeroRecorrido; numeroAnterior++)
		{
			//console.log (numeroAnterior);
			if (numeroRecorrido % numeroAnterior == 0)
			{
				break;
			}
		}

		if (numeroAnterior == numeroRecorrido)
		{
			console.log (numeroRecorrido + " es primo");
		}
	}
}