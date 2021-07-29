/*
Pascucci, Guido Gabriel - Div C
Enunciado: TRES

Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre, edad, sexo ("f" o "m") y estado civil ("soltero", "casado" o "viudo") y temperatura corporal.
a) El nombre de la persona con más temperatura.
b) Cuantos mayores de edad estan viudos.
c) La cantidad de hombres que hay solteros o viudos.
d) Cuantas personas de la tercera edad (más de 60 años), tienen más de 38° de temperatura.
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var agregarPasajero;
	var temperaturaMaximaBandera;
	var temperaturaMaxima;
	var personaConMayorTemperatura; // A - mostrar
	var contadorViudos; // B - mostrar
	var contadorSolterosYViudos; // C - mostrar
	var ancianosConMasDe38; // D - mostrar
	var contadorSolteros;
	var acumuladorSolteros;
	var promedioEdadHombresSolteros; // E - mostrar

	agregarPasajero = "si";
	temperaturaMaximaBandera = 1;
	contadorViudos = 0;
	contadorSolterosYViudos = 0;
	ancianosConMasDe38 = 0;
	contadorSolteros = 0;
	acumuladorSolteros = 0;

	while (agregarPasajero == "si")
	{
		nombre = prompt ("Ingrese su nombre");
		
		edad = prompt ("Ingrese su edad");
		edad = parseInt (edad);
		
		sexo = prompt ("Ingrese su sexo");

		while (sexo != "f" && sexo != "m")
		{
			sexo = prompt ("Error. Ingrese nuevamente su sexo");
		}
		
		estadoCivil = prompt ("Ingrese estado civil");

		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt ("Error. Ingrese nuevamente su estado civil");
		}
		
		temperaturaCorporal = prompt ("Ingrese temperatura corporal");
		temperaturaCorporal = parseInt (temperaturaCorporal);

		if (temperaturaMaximaBandera == 1) // A
		{
			temperaturaMaxima = temperaturaCorporal;
			personaConMayorTemperatura = nombre;
			temperaturaMaximaBandera = 0;
		}
		else
		{
			if (temperaturaCorporal > temperaturaMaxima)
			{
				temperaturaMaxima = temperaturaCorporal;
				personaConMayorTemperatura = nombre;
			}
		}

		if (edad > 17 && estadoCivil == "viudo") // B
		{
			contadorViudos++;
		}

		if (sexo == "m" && estadoCivil != "casado") // C
		{
			contadorSolterosYViudos++;
			if (estadoCivil == "soltero") // E
			{
				contadorSolteros++;
				acumuladorSolteros = acumuladorSolteros + edad;
				promedioEdadHombresSolteros = acumuladorSolteros / contadorSolteros;
			}
		}

		if (edad > 60 && temperaturaCorporal > 38) // D
		{
			ancianosConMasDe38++;
		}

		agregarPasajero = prompt ("¿Desea agregar otro pasajero?");
	}

	document.write ("A- Persona con mayor temperatura: " + personaConMayorTemperatura + "<br/> B- Mayores de edad viudos: " + contadorViudos + "<br/> C- Cantidad de hombres solteros o viudos: " + contadorSolterosYViudos + "<br/> D- Hombres mayores de 60 años con más de 38° de temperatura: " + ancianosConMasDe38 + "<br/> E- Promedio de edad de hombres solteros: " + promedioEdadHombresSolteros);
}
