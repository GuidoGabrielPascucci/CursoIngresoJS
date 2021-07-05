/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Al presionar el botón 'Mostrar' debemos lograr tomar un dato por '=prompt()'y luego mostrarlo por 'alert()'.*/

function mostrar()

{
	var nombre; 
	var mensajeSalida;
	
	nombre = prompt("Ingresa tu nombre");

	mensajeSalida= "Usted se llama "+nombre

	alert(mensajeSalida);
	

}

