/*
Pascucci, Guido Gabriel - Div C
Enunciado: EJERCICIO 1

Para una veterinaria se necesita un programa que permita ingresar datos de perros con su precio de vacunación a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Se pide informar por alert:
a)El importe total a pagar por las vacunaciones, sin descuento.
b)El importe total a pagar con descuento (solo si corresponde)
	Si se vacunan más de 2 perros, se obtiene un 20% de descuento sobre el total a pagar.
	Si se vacunan más de 4 perros, se obtiene un 30% de descuento sobre el total a pagar.
c)La raza con más cantidad de perros
d)Nombre, raza y edad del perro más viejo ingresado
*/

function mostrar()

{
	var raza;
	var nombre;
	var edad;
	var peso;
	var precioConsulta;
	var seguirIngresandoPerros;
	var precioTotalSinDescuento;
	var acumuladorPrecio;
	var contadorPerrosPorConsulta;
	var precioTotalConDescuento;
	var descuento;
	var contadorSharpei;
	var contadorGalgo;
	var contadorPastor;
	var razaMasVacunada;
	var perroMasViejo;
	var perroMasViejoEdad;
	var perroMasViejoRaza;
	var perroMasViejoBandera;

	seguirIngresandoPerros = "si";
	acumuladorPrecio = 0;
	contadorPerrosPorConsulta = 0;
	contadorSharpei = 0;
	contadorGalgo = 0;
	contadorPastor = 0;
	perroMasViejoBandera = 1;


	while (seguirIngresandoPerros == "si")
	{
		raza = prompt ("Ingrese raza de su perro");

		while (raza != "sharpei" && raza != "galgo" && raza != "pastor")
		{
			raza = prompt ("Error. Ingrese nuevamente la raza");
		}

		nombre = prompt ("Ingrese el nombre de su perro");

		edad = prompt ("Ingrese la edad de su perro");
		edad = parseInt (edad);

		while (edad < 1 || edad > 25)
		{
			edad = prompt ("Error. Ingrese nuevamente la edad de su perro");
			edad = parseInt (edad);
		}

		peso = prompt ("Ingrese el peso de su perro");
		peso = parseInt (peso);

		while (!peso > 0)
		{
			peso = prompt ("Error. Ingrese nuevamente el peso de su perro");
			peso = parseInt (peso);
		}

		precioConsulta = prompt ("Ingrese el precio de consulta");
		precioConsulta = parseInt (precioConsulta);

		while (precioConsulta < 500 || precioConsulta > 1500)
		{
			precioConsulta = prompt ("Error. Ingrese nuevamente el precio de consulta");
			precioConsulta = parseInt (precioConsulta);
		}

		switch (raza)
		{
			case "sharpei":
					contadorSharpei++;
				break;
			case "galgo":
					contadorGalgo++;
				break;
			default:
					contadorPastor++;
				break;
		}

		if (perroMasViejoBandera == 1) // D
		{
			perroMasViejoEdad = edad;
			perroMasViejo = nombre;
			perroMasViejoRaza = raza;
			perroMasViejoBandera = 0;
		}
		else
		{
			if (edad > perroMasViejoEdad)
			{
				perroMasViejoEdad = edad;
				perroMasViejo = nombre;
				perroMasViejoRaza = raza;
			}
		}

		acumuladorPrecio = precioConsulta + acumuladorPrecio
		contadorPerrosPorConsulta++
		seguirIngresandoPerros = prompt ("¿Desea inscribir otro perro?");
	} // Fin del while

	precioTotalSinDescuento = acumuladorPrecio // A
	precioTotalConDescuento = "-"

	if (contadorPerrosPorConsulta > 4) // B
	{
		descuento = precioTotalSinDescuento * 30 / 100;
		precioTotalConDescuento = precioTotalSinDescuento - descuento;
	}
	else
	{
		if (contadorPerrosPorConsulta > 2)
		{
			descuento = precioTotalSinDescuento * 20 / 100;
			precioTotalConDescuento = precioTotalSinDescuento - descuento;
		}
	}

	if (contadorSharpei > contadorGalgo && contadorSharpei > contadorPastor) // C
	{
		razaMasVacunada = "Sharpei";
	}
	else
	{
		if (contadorSharpei == contadorGalgo && contadorSharpei > contadorPastor)
		{
			razaMasVacunada = "Sharpei y Galgo";
		}
		else
		{
			if (contadorGalgo > contadorSharpei && contadorGalgo > contadorPastor)
			{
				razaMasVacunada = "Galgo";
			}
			else
			{
				if (contadorGalgo == contadorPastor)
				{
					razaMasVacunada = "Galgo y Pastor";
				}
				else
			}
		}
	}

	alert ("Precio total sin descuento: " + precioTotalSinDescuento);
	alert ("Precio total con descuento: " + precioTotalConDescuento);
	alert ("La raza con mayor cantidad de perros: " + razaMasVacunada);
	alert ("Nombre, raza y edad del perro más viejo: " + perroMasViejo + " - " + perroMasViejoRaza + " - " + perroMasViejoEdad);
}


/*
	if (contadorSharpei > contadorGalgo && contadorSharpei > contadorPastor) // C
	{
		razaMasVacunada = "Sharpei";
	}
	else
	{
		if (contadorGalgo > contadorPastor)
		{
			razaMasVacunada = "Galgo";
		}
		else
		{
			razaMasVacunada = "Pastor";
		}
	}
*/


/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos 
alimenticios, hasta que el cliente quiera. Por cada item  de la compra  se ingresa:<br>
Tipo: (validar "yerba", "harina", "fideo").<br>
marca,
Cantidad de paquetes. (más de cero).<br>
Precio por paquete (más de cero).<br>

a)	El importe total a pagar bruto, sin descuento.<br>
b)	El importe total a pagar con descuento (solo si corresponde)<br>
Si se compra total tiene  más de 5 paquetes se obtiene un 25% de descuento sobre el total a <br>pagar.<br>
Si se compra más de 10 paquetes en total se obtiene un 30% de descuento sobre el total a pagar.<br>
Se pide mostrar por pantalla:<br>
c)	Informar el tipo con más cantidad de paquetes.<br>
d)	El tipo , marca y cantidad  de la item mas caro de la compra. (sobre el Bruto sin descuento)<br>


var tipoDeProducto;
	var marca;
	var cantidadPaquetes;
	var precioPorPaquete;
	var precioBruto;
	var acumuladorPrecioBruto;
	var precioFinalConDescuento;
	var descuento;
	var acumuladorYerba;
	var acumuladorHarina;
	var acumuladorFideo;
	var tipoProductoMasComprado;

	var tipoMasCaroBandera;
	var precioMaximoIngresado;
	var tipoMasCaro;
	var marcaMasCara;
	var cantidadItemMasCaro;

	var seguirIngresandoProductos;


	precioFinalConDescuento = " ";
	acumuladorPrecioBruto = 0;

	acumuladorYerba = 0;
	acumuladorHarina = 0;
	acumuladorFideo = 0;

	tipoMasCaroBandera = 1;

	seguirIngresandoProductos = "si";


	while (seguirIngresandoProductos == "si")
	{
		tipoDeProducto = prompt ("Ingrese un producto");

		while (tipoDeProducto != "yerba" && tipoDeProducto != "harina" && tipoDeProducto != "fideo")
		{
			tipoDeProducto = prompt ("Error. Ingrese nuevamente un producto");
		}

		marca = prompt ("Ingrese una marca");

		cantidadPaquetes = prompt ("Ingrese la cantidad de paquetes que necesita");
		cantidadPaquetes = parseInt (cantidadPaquetes);

		while (cantidadPaquetes < 0 || cantidadPaquetes == 0)
		{
			cantidadPaquetes = prompt ("Error. Ingrese nuevamente la cantidad de paquetes");
			cantidadPaquetes = parseInt (cantidadPaquetes);
		}

		precioPorPaquete = prompt ("Ingrese el precio por paquete");
		precioPorPaquete = parseInt (precioPorPaquete);

		while (precioPorPaquete < 0 || precioPorPaquete == 0)
		{
			precioPorPaquete = prompt ("Error. Ingrese nuevamente el precio por paquete");
			precioPorPaquete = parseInt (precioPorPaquete);
		}

		switch (tipoDeProducto)
		{
			case "yerba":
					acumuladorYerba = acumuladorYerba + cantidadPaquetes;
				break;
			case "harina":
					acumuladorHarina = acumuladorHarina + cantidadPaquetes;
				break;
			default:
					acumuladorFideo = acumuladorFideo + cantidadPaquetes;
				break;
		}

		if (tipoMasCaroBandera == 1)
		{
			precioMaximoIngresado = precioPorPaquete;
			tipoMasCaro = tipoDeProducto;
			marcaMasCara = marca;
			cantidadItemMasCaro = cantidadPaquetes;
			tipoMasCaroBandera = 0;
		}
		else
		{
			if (precioPorPaquete > precioMaximoIngresado)
			{
				precioMaximoIngresado = precioPorPaquete;
				tipoMasCaro = tipoDeProducto;
				marcaMasCara = marca;
				cantidadItemMasCaro = cantidadPaquetes;
			}
		}

		precioBruto = precioPorPaquete * cantidadPaquetes;
		acumuladorPrecioBruto = acumuladorPrecioBruto + precioBruto;

		seguirIngresandoProductos = prompt ("¿Desea seguir ingresando productos?");
	} // FIN DEL WHILE.

	if (cantidadPaquetes > 10)
	{
		descuento = acumuladorPrecioBruto * 30 / 100;
		precioFinalConDescuento = acumuladorPrecioBruto - descuento;
	}
	else
	{
		if (cantidadPaquetes > 5)
		{
			descuento = acumuladorPrecioBruto * 25 / 100;
			precioFinalConDescuento = acumuladorPrecioBruto - descuento;
		}
	}

	if (acumuladorYerba > acumuladorHarina && acumuladorYerba > acumuladorFideo)
	{
		tipoProductoMasComprado = "Yerba";
	}
	else
	{
		if (acumuladorHarina > acumuladorFideo)
		{
			tipoProductoMasComprado = "Harina";
		}
		else
		{
			tipoProductoMasComprado = "Fideo";
		}
	}


	document.write ("Importe total a pagar bruto = " + acumuladorPrecioBruto + "<br/>Importe total a pagar con descuento = " + precioFinalConDescuento + "<br/> Tipo con más cantidad de paquetes = " + tipoProductoMasComprado + "<br/>Tipo, marca y cantidad del item más caro de la compra (en ese orden) = " + tipoMasCaro + "; " + marcaMasCara + "; " + cantidadItemMasCaro);
*/





