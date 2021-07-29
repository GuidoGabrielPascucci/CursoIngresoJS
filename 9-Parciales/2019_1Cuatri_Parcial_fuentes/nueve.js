/*
Pascucci, Guido - Div C
Enunciado: Parcial 2019 - Nueve

Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperatura mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar()
{
	var nombrePais;
	var cantidadHabitantes;
	var temperaturaIngresada;
	var contadorTemperaturasPares;
	var paisConMenosHabitantes;
	var paisConMenosHabitantesBandera;
	var contadorPaisesConMasDe40Grados;
	var promedioHabitantes;
	var contadorPaisesIngresados;
	var acumuladorHabitantes;
	var paisConMenorTemperatura;
	var temperaturaMinimaBandera;
	var temperaturaMinima;
	
	var seguirRegistrandoPaises;

	seguirRegistrandoPaises = "si";
	contadorTemperaturasPares = 0;
	paisConMenosHabitantesBandera = 1;
	contadorPaisesConMasDe40Grados = 0;
	contadorPaisesIngresados = 0;
	acumuladorHabitantes = 0;
	temperaturaMinimaBandera = 1;


	while (seguirRegistrandoPaises == "si")
	{
		nombrePais = prompt ("Ingrese un país");
		cantidadHabitantes = prompt ("Ingrese la cantidad de habitantes en millones");
		cantidadHabitantes = parseInt (cantidadHabitantes);

		while (cantidadHabitantes < 1 || cantidadHabitantes > 7000)
		{
			cantidadHabitantes = prompt ("Error. Ingrese nuevamente la cantidad de habitantes");
			cantidadHabitantes = parseInt (cantidadHabitantes);
		}

		temperaturaIngresada = prompt ("Ingrese la temperatura");
		temperaturaIngresada = parseInt (temperaturaIngresada);

		while (temperaturaIngresada < -50 || temperaturaIngresada > 50)
		{
			temperaturaIngresada = prompt ("Error. Ingrese nuevamente la temperatura");
			temperaturaIngresada = parseInt (temperaturaIngresada);
		}

		if (temperaturaIngresada % 2 == 0)
		{
			contadorTemperaturasPares++;
		}

		if (paisConMenosHabitantesBandera == 1)
		{
			paisConMenosHabitantes = nombrePais;
			paisConMenosHabitantesBandera = 0;
		}
		else
		{
			if (cantidadHabitantes < paisConMenosHabitantes)
			{
				paisConMenosHabitantes = nombrePais;
			}
		}

		if (temperaturaIngresada > 40)
		{
			contadorPaisesConMasDe40Grados++;
		}

		if (temperaturaMinimaBandera == 1)
		{
			paisConMenorTemperatura = nombrePais;
			temperaturaMinima = temperaturaIngresada;
			temperaturaMinimaBandera = 0;
		}
		else
		{
			if (temperaturaIngresada < temperaturaMinima)
			{
				paisConMenorTemperatura = nombrePais;
				temperaturaMinima = temperaturaIngresada;
			}
		}
		
		contadorPaisesIngresados++;
		acumuladorHabitantes = cantidadHabitantes;

		seguirRegistrandoPaises = prompt ("¿Desea registrar otro país?")	
	}
	
	promedioHabitantes = acumuladorHabitantes / contadorPaisesIngresados;

	document.write ("A- Cantidad de temperaturas pares = " + contadorTemperaturasPares + "<br/>B-País con menos habitantes = " + paisConMenosHabitantes + "<br/>C- Cantidad de paises que superan los 40 grados = " + contadorPaisesConMasDe40Grados + "<br/>D- Promedio de habitantes de los paises ingresados = " + promedioHabitantes + "<br/>E- Temperatura mínima ingresada y país que registró esa temperatura = " + temperaturaMinima + " " + paisConMenorTemperatura);
}
