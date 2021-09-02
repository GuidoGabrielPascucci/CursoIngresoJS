/* 
EJERCICIO 3
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar:
*marca del producto
* Tipo de galletita : "con sal", "sin sal", "dulces".
* cantidad de cajas: mas de 0
* cantidad de kilos por caja:mas de 0
* nombre proveedor
* origen: "nacional", "mercosur", "resto del mundo"
Se pide informar por document.write:
a) el ingreso con la mayor cantidad de cajas.
b) de las galletitas dulces, la que menos kilos tiene por caja.
c) que porcentaje de cajas hay sobre el total de cada tipo
[ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)]
*/

function mostrar()
{
	var marcaProducto;
  	var tipoGalletita;
  	var cantidadCajas;
  	var cantidadKilosPorCaja;
  	var nombreProveedor;
  	var origen;
  	var contadorProductos;
  	var mayorCantidadCajasBandera;

  	contadorProductos = 0;
  	mayorCantidadCajasBandera = 1;

  	while (contadorProductos < 10)
  	{
  		marcaProducto = prompt ("Ingrese marca");

  		tipoGalletita = prompt ("Ingrese el tipo de galletita");

  		while (tipoGalletita != "con sal" && tipoGalletita != "sin sal" && tipoGalletita != "dulces")
  		{
  			tipoGalletita = prompt ("Error. Ingrese nuevamente el tipo de galletita");
  		}

  		cantidadCajas = prompt ("Ingrese la cantidad de cajas");
  		cantidadCajas = parseInt (cantidadCajas);

  		while (cantidadCajas < 0 || cantidadCajas == 0)
  		{
  			cantidadCajas = prompt ("Error. Ingrese nuevamente la cantidad de cajas");
  			cantidadCajas = parseInt (cantidadCajas);
  		}

  		cantidadKilosPorCaja = prompt ("Ingrese la cantidad de kilos por caja");
  		cantidadKilosPorCaja = parseInt (cantidadKilosPorCaja);

  		while (cantidadKilosPorCaja < 0 || cantidadKilosPorCaja == 0)
  		{
  			cantidadKilosPorCaja = prompt ("Error. Ingrese nuevamente la cantidad de kilos por caja");
  			cantidadKilosPorCaja = parseInt (cantidadKilosPorCaja);
  		}

  		nombreProveedor = prompt ("Ingrese el proveedor");

  		origen = prompt ("Ingrese el orígen del producto");

  		while (origen != "nacional" && origen != "mercosur" && origen != "resto del mundo")
  		{
  			origen = prompt ("Error. Ingrese nuevamente el origen del producto");
  		}

  		contadorProductos++;	
  	} // Fin del while
}

/*
A) El nombre y rareza de la carta con mayor precio.
B) Cuantas cartas de tipo "trampa" y de rareza "rara o super rara" fueron vendidas.
C) El promedio de precio de las cartas de tipo "monstruo" de rareza "ultra rara" con un precio menor a 500.
*/

/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la 
<br>población para obtener distintos datos estadísticos:<br>
Se ingresará hasta que usuario decida:<br>
Nombre.<br>
Edad.<br>
Género: “F”, “M”, “NB”.<br>
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.<br>
Temperatura corporal (durante la primera noche).<br>
Se pide:  <br>
a) El nombre y vacuna de la persona con mayor temperatura.<br>
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.<br>
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.<br>
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura <br>mayor a 38°.<br>
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no <br>presentaron fiebre. (37° o menos)<br>
f) que porcentaje de personas se dieron “Otra” , sobre el total de personas ingresadas


var nombre;
	var edad;
	var genero;
	var vacuna;
	var temperaturaCorporal;
	
	var seguirIngresando;
	
	var temperaturaMaximaBandera;
	var temperaturaMaxima;
	var personaConMayorTemperatura;
	var vacunaMayorTemperatura;
	
	var contadorSputnikFemenino;
	var contadorAstraZenecaUOtra;
	var contadorAstraZenecaMayorA38;
	var contadorSputnikMasculinoSinFiebre;
	var acumuladorSputnikMasculinoSinFiebre;
	
	var promedioHombresConSputnikSinFiebre;

	var contadorPersonasTotales;
	var porcentajePersonasConOtraVacuna;

	
	temperaturaMaximaBandera = 1;
	seguirIngresando = "si";
	contadorSputnikFemenino = 0;
	contadorAstraZenecaUOtra = 0;
	contadorNoBinarios = 0;
	contadorAstraZenecaMayorA38 = 0;
	contadorSputnikMasculinoSinFiebre = 0;
	acumuladorSputnikMasculinoSinFiebre = 0;
	contadorPersonasTotales = 0;


	while (seguirIngresando == "si")
	{
		nombre = prompt ("Ingrese el nombre");

    	edad = prompt ("Ingrese edad");
    	edad = parseInt (edad);

    	while (genero != "F" && genero != "M" && genero != "NB")
    	{
      		genero = prompt ("Error. Ingrese nuevamente su género");
    	}

    	vacuna = prompt ("Ingrese la vacuna");

    	while (vacuna != "Sputnik V" && vacuna != "AstraZeneca" && vacuna != "Otra")
    	{
      		vacuna = prompt ("Error. Ingrese nuevamente la vacuna");
    	}

    	temperaturaCorporal = prompt ("Ingrese la temperatura corporal");


    	switch (vacuna)
    	{
    		if (temperaturaMaximaBandera == 1) // A
    		{
    			personaConMayorTemperatura = nombre;
    			temperaturaMaxima = temperaturaCorporal;
    			vacunaMayorTemperatura = vacuna;
    			temperaturaMaximaBandera = 0;
    		}
    		else
    		{
    			if (temperaturaCorporal > temperaturaMaxima)
    			{
    				temperaturaMaxima = temperaturaCorporal;
    				personaConMayorTemperatura = nombre;
    				vacunaMayorTemperatura = vacuna;
    			}
    		}
    		case "Sputnik":
    				if (genero == "F")
    				{
    					contadorSputnikFemenino++;
    				}
    				else
    				{
    					if (genero == "M" && temperaturaCorporal < 38)
    					{
    						contadorSputnikMasculinoSinFiebre++;
    						acumuladorSputnikMasculinoSinFiebre = acumuladorSputnikMasculinoSinFiebre + edad;
    					}
    				}
    			break;
    		case "AstraZeneca":
    				if (temperaturaCorporal > 38)
    				{
    					contadorAstraZenecaMayorA38++;
    				}
    		case "Otra":
    				if (genero == "NB")
    				{
    					contadorNoBinarios++;
    				}
    			break;
    	}
	} // FIN DEL WHILE.

	promedioHombresConSputnikSinFiebre = acumuladorSputnikMasculinoSinFiebre / contadorSputnikMasculinoSinFiebre;
*/