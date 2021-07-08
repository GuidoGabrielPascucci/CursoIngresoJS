/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Debemos lograr tomar el importe por ID. Transformarlo a entero (parseInt), luego mostrar el importe con un Descuento del 25 % en el cuadro de texto "RESULTADO"
*/

function mostrarAumento()

/*
{
	var importe;
	var descuento;
	var resultado;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	descuento=importe*25/100
	resultado=importe-descuento

	document.getElementById('txtIdResultado').value=resultado;
}

*/

/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Ejercicio 10bis
*/

{
	var importe;
	var porcentajeIngresado;
	var descuento;
	var resultado;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);
	
	porcentajeIngresado=prompt("Ingrese porcentaje");
	porcentajeIngresado=parseInt(porcentajeIngresado);
	
	descuento=importe*porcentajeIngresado/100;
	resultado=importe-descuento;

	document.getElementById('txtIdResultado').value=resultado;
}