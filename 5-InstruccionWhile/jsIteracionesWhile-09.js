/*
Pascucci, Guido 
Enunciado:
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{	// declarar variables
	/*

	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado=prompt('Ingrese un número');
		numeroIngresado=parseInt(numeroIngresado);
		if (banderaDelPrimero=="es el primero")
		{
			numeroMaximo=numeroIngresado;
			banderaDelPrimero="es el segundo";
		}
		else
		{
			if (numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			else
			{
				if (banderaDelPrimero="es el segundo")
				{
					numeroMinimo=numeroIngresado;
					banderaDelPrimero="es el tercero";
				}
				else
				{
					if (numeroIngresado<numeroMinimo)
					{
						numeroMinimo=numeroIngresado;
					}
				}
			}
		}
		respuesta=prompt("¿Quiere seguir pidiendo números?");
	}


	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

*/









	var numeroIngresado;
	var seguir;
	var numeroMinimo;
	var numeroMaximo;
	var bandera;

	seguir="si";
	bandera="a";


	while (seguir=="si")
	{
		numeroIngresado=prompt("Pedir un número");
		numeroIngresado=parseInt(numeroIngresado);

		if (bandera=="a")
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			bandera="b";
		}
		else
		{
			if (numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			else
			{
				if (numeroIngresado<numeroMinimo)
				{
					numeroMinimo=numeroIngresado;
				}
			}
		}
		seguir=prompt("¿Desea seguir pidiendo números?");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

	/*
	--------MODO OPTIMIZADO DE CODIGO---------
	
	while (seguir=="si")
	{
		numeroIngresado=prompt("Ingrese número");
		numeroIngresado=parseInt(numeroIngresado);

		if (bandera=="a" || numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		if (bandera=="a" || numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
			bandera="b";
		}
		seguir=prompt("¿Desea seguir pidiendo números?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
	*/
}




