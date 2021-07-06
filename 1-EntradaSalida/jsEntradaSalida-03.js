/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Debemos lograr tomar un dato por 'ID' y luego mostrarlo por 'alert' al presionar el botón 'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	var mensajeSalida

	//nombreIngresado=txtIdNombre.value;
	
	nombreIngresado=document.getElementById('txtIdNombre').value;

	mensajeSalida="su nombre es "+nombreIngresado;

	alert(mensajeSalida);

	document.getElementById('txtIdNombre').value="";

}


