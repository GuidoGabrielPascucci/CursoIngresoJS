function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			alert ("Hace frío");
			break;

		default:
			alert ("Hace calor");
			break;
	}	
}