function mostrar()
{

	var mesDelAño;
	mesDelAño=document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			alert(mesDelAño+" tiene 28 días");
		break;
		
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert(mesDelAño+" tiene 30 días");
		break;

		default:
			alert(mesDelAño+" tiene 31 días");
		break;
	}
}