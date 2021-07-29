/*
Pascucci, Guido Gabriel - Div C
Enunciado:
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/
function mostrar()
{
	var tipoDeProducto;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var seguirIngresandoProductos = "si";
	
	var jabonMasCaro;
	var jabonMasCaroUnidades = 0
	var jabonMasCaroFabricante;
	var jabonMasCaroBandera = 1

	var acumuladorBarbijo = 0;
	var acumuladorJabon = 0;
	var acumuladorAlcohol = 0;
	
	var contadorBarbijo = 0;
	var contadorJabon = 0;
	var contadorAlcohol = 0;

	var tipoProductoMasComprado;
	var promedio;


	while (seguirIngresandoProductos == "si")
	{
		tipoDeProducto = prompt ("Ingrese un nuevo producto");
		while (tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol")
		{
			tipoDeProducto = prompt ("ERROR. Ingrese nuevamente un producto");
		}

		precio = prompt ("Ingrese precio");
		precio = parseInt (precio);
		while (precio < 100 || precio > 300)
		{
			precio = prompt ("ERROR. Ingrese nuevamente el precio");
			precio = parseInt (precio);
		}

		cantidadUnidades = prompt ("Ingrese cantidad de unidades");
		cantidadUnidades = parseInt (cantidadUnidades);
		while (cantidadUnidades < 0 || cantidadUnidades == 0 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt ("ERROR. Ingrese nuevamente la cantidad de unidades");
			cantidadUnidades = parseInt (cantidadUnidades);
		}

		marca = prompt ("Ingrese marca");
		fabricante = prompt ("Ingrese fabricante");

		if (tipoDeProducto == "jabon") // A
		{
			if (jabonMasCaroBandera == 1)
			{
				jabonMasCaro = precio;
				jabonMasCaroUnidades = cantidadUnidades;
				jabonMasCaroFabricante = fabricante;
				jabonMasCaroBandera = 0;
			}
			else 
			{
				if (precio > jabonMasCaro)
				{
					jabonMasCaro = precio;
					jabonMasCaroUnidades = cantidadUnidades;
					jabonMasCaroFabricante = fabricante;
				}
			}
		}

		switch (tipoDeProducto) // B
		{
			case "barbijo":
					acumuladorBarbijo = acumuladorBarbijo + cantidadUnidades; // C
					contadorBarbijo++
				break;
			case "jabon":
					acumuladorJabon = acumuladorJabon + cantidadUnidades;
					contadorJabon++
				break;
			case "alcohol":
					acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
					contadorAlcohol++
				break;
		}

		seguirIngresandoProductos = prompt ("¿Desea seguir ingresando productos?");
	} // FIN DEL WHILE
		
		if (acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
		{
			promedio = acumuladorBarbijo / contadorBarbijo;
			tipoDeProducto = "Barbijo";
		}
		else
		{
			if (acumuladorJabon > acumuladorAlcohol)
			{
				promedio = acumuladorJabon / contadorJabon;
				tipoDeProducto = "Jabon";
			}
			else
			{
				promedio = acumuladorAlcohol / contadorAlcohol;
				tipoDeProducto = "Alcohol";
			}
		}
	document.write ("A- Cantidad de unidades: " + jabonMasCaroUnidades + " - Fabricante: " + jabonMasCaroFabricante + "<br/> B- Tipo de producto con más unidades: " + tipoDeProducto + " -Promedio por compra- " + promedio + "<br/> C- Unidades totales de barbijos: " + acumuladorBarbijo);
}