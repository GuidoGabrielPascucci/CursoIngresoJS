/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Debemos lograr tomar el importe por ID, transformarlo a entero (parseInt), luego mostrar el importe con un aumento del 10 % en el cuadro de texto "RESULTADO".
*/

function mostrarAumento()

/*
{
	var sueldo;
	var aumento;
	var resultado;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);

	aumento=sueldo*10/100
	resultado=sueldo+aumento

	document.getElementById('txtIdResultado').value=resultado;
}

*/

/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Ejercicio 9bis
*/

{
	var sueldo;
	var porcentajeIngresado;
	var aumento;
	var resultado;


	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	
	porcentajeIngresado=prompt("Ingrese porcentaje");
	porcentajeIngresado=parseInt(porcentajeIngresado);
	
	aumento=sueldo*porcentajeIngresado/100;
	resultado=sueldo+aumento;

	document.getElementById('txtIdResultado').value=resultado;
}

/*
	aumento=sueldo+

	sueldo*10/100
	resultado=sueldo+aumento

	document.getElementById('txtIdResultado').value=resultado;
*/

//ah, osea que en vez que sea un 10%, que la pagina te de la opcion de poner un porcentaje por prompt