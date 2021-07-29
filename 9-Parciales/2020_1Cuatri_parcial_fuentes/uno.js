/*
Pascucci, Guido Gabriel - Div C
Enunciado: UNO

Debemos realizar la carga de 5 (cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var contadorDeProductos;
	var tipoDeProducto;
	var precioDeProducto;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var alcoholMasBarato;
	var alcoholMasBaratoUnidades;
	var alcoholMasBaratoFabricante;
	var alcoholMasBaratoBandera;
	var acumuladorBarbijo;
	var acumuladorAlcohol;
	var acumuladorJabon;
	var contadorBarbijo;
	var contadorAlcohol;
	var contadorJabon;
	var promedio;

	contadorDeProductos = 0;
	alcoholMasBaratoBandera = "primero";
	
	acumuladorBarbijo = 0;
	acumuladorAlcohol = 0;
	acumuladorJabon = 0;

	contadorBarbijo = 0;
	contadorAlcohol = 0;
	contadorJabon = 0;


	while (contadorDeProductos < 5)
	{
		tipoDeProducto = prompt ("Ingrese tipo de producto");

		while (tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol")
		{
			tipoDeProducto = prompt ("Error. Ingrese nuevamente tipo de producto");
		}

		precioDeProducto = prompt ("Ingrese precio de producto");
		precioDeProducto = parseInt (precioDeProducto);

		while (precioDeProducto < 100 || precioDeProducto > 300) 
		{
			precioDeProducto = prompt ("Error. Ingrese nuevamente precio de producto");
			precioDeProducto = parseInt (precioDeProducto);
		}

		cantidadUnidades = prompt ("Ingrese cantidad de unidades");
		cantidadUnidades = parseInt (cantidadUnidades);

		while (cantidadUnidades == 0 || cantidadUnidades < 0 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt ("Error. Ingrese nuevamente cantidad de unidades");
			cantidadUnidades = parseInt (cantidadUnidades);
		}

		marca = prompt ("Ingrese marca");
		fabricante = prompt ("Ingrese fabricante");	

		if (tipoDeProducto == "alcohol") // A
		{
			if (alcoholMasBaratoBandera == "primero")
			{
				alcoholMasBarato = precioDeProducto;
				alcoholMasBaratoUnidades = cantidadUnidades;
				alcoholMasBaratoFabricante = fabricante;
				alcoholMasBaratoBandera = "segundo";
			}
			else
			{
				if (precioDeProducto < alcoholMasBarato)
				{
					alcoholMasBarato = precioDeProducto;
					alcoholMasBaratoUnidades = cantidadUnidades;
					alcoholMasBaratoFabricante = fabricante;
				}
			}
		}
		
		switch (tipoDeProducto) // B
		{
		case "barbijo":
				acumuladorBarbijo = acumuladorBarbijo + cantidadUnidades;
				contadorBarbijo++
			break;
		case "alcohol":
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
				contadorAlcohol++
			break;
		case "jabon":
				acumuladorJabon = acumuladorJabon + cantidadUnidades;
				contadorJabon++
			break;
		}
		
		contadorDeProductos++;
	} // FIN DEL WHILE


	if (acumuladorJabon > acumuladorAlcohol && acumuladorJabon > acumuladorBarbijo)
	{
		promedio = acumuladorJabon/contadorJabon;
		tipoDeProducto = "Jabon";
	}
	else
	{
		if (acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo)
		{
			promedio = acumuladorAlcohol/contadorAlcohol;
			tipoDeProducto = "Alcohol";
		}
		else
		{
			promedio = acumuladorBarbijo/contadorBarbijo;
			tipoDeProducto = "Barbijo";
		}
	}

	document.write ("EJERCICIO A <br/> Alcohol más barato: " + alcoholMasBarato + "<br/> Cantidad de unidades: " + cantidadUnidades + "<br/> Fabricante: " + alcoholMasBaratoFabricante + "<br/> EJERCICIO B <br/> Tipo de producto con más unidades: " + tipoDeProducto + "; Promedio por compra: " + promedio + "<br/> EJERCICIO C <br/> Unidades totales de jabón: " + acumuladorJabon);
}
