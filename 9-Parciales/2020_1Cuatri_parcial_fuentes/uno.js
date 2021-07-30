/*
Pascucci, Guido Gabriel - Div C
Enunciado:

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
*/

function mostrar()

{
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
}





