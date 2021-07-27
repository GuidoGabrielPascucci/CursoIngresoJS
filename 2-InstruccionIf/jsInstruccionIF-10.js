function mostrar()
{
	/*
	var numeroRandom;
	numeroRandom=Math.floor(Math.random() *10 + 1);

	if (numeroRandom==9 || numeroRandom==10)
	{
		alert(numeroRandom+": EXCELENTE");
	}
	else
	{
		if (numeroRandom>3)
		{
			alert(numeroRandom+": APROBÓ");
		}
		else
		{
			alert(numeroRandom+": Vamos, la próxima se puede");
		}
	}
	*/



	var nota;
	var maximo = 10;
	var minimo = 1;

	nota = Math.round (Math.random() * (maximo - minimo) + minimo);
	
	if (nota == 9 || nota == 10) {
		console.log ("EXCELENTE, la nota del alumno es: " + nota);
	}
	else if (nota > 3) {
		console.log ("APROBÓ, la nota del alumno es: " + nota);
	}
	else {
		console.log ("Vamos, la proxima se puede, la nota del alumno es: " + nota);
	}

	//document.write("La nota del alumno es: "+nota);
}