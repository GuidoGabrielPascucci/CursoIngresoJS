/*
Pascucci, Guido Gabriel - Div C
Enunciado:

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
*/

function mostrar()
{
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
	var contadorSputnikV;
	var contadorAztraZenecaUOtra;

	temperaturaMaximaBandera = 1;
	seguirIngresando = "si";
	contadorSputnikV = 0;
	contadorAztraZenecaUOtra = 0;

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

    	switch (genero) // B
    	{
    		case "F":
    				contadorSputnikV++;
    			break;
    		case "NB":
    				if (vacuna == "AstraZeneca" || vacuna == "Otra")
    				{
    					contadorAztraZenecaUOtra++;
    				}
    			break;
    		default:
    			break;
    	}
	} // FIN DEL WHILE.
}

/*
a) El nombre y vacuna de la persona con mayor temperatura.<br>
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.<br>
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.<br>
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura <br>mayor a 38°.<br>
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no <br>presentaron fiebre. (37° o menos)<br>
f) que porcentaje de personas se dieron “Otra” , sobre el total de personas ingresadas
*/