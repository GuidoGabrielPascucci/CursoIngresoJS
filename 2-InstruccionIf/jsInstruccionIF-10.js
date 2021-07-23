function mostrar()
{
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
}