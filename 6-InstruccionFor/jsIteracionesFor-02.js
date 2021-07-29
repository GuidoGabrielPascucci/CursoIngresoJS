/*
al presionar el botón mostrar 10 repeticiones con números , desde el 10 al 1.
*/
function mostrar()
{
	var contador;
	contador = 0;

	for (contador==0; contador < 5; contador++)
	{
		if (contador > 3)
		{
			continue;
		}
		console.log (contador);
	}

	console.log ("El contador termina en: " + contador);
} 