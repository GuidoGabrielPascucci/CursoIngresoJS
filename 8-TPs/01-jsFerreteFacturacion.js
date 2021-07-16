/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	TP 01 --- Ferrete Facturación (E/S)
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioIngresado1;
	let precioIngresado2;
	let precioIngresado3;
	let resultadoDeLaSuma;

	precioIngresado1=document.getElementById('txtIdPrecioUno').value;
	precioIngresado1=parseInt(precioIngresado1);

	precioIngresado2=document.getElementById('txtIdPrecioDos').value;
	precioIngresado2=parseInt(precioIngresado2);

	precioIngresado3=document.getElementById('txtIdPrecioTres').value;
	precioIngresado3=parseInt(precioIngresado3);

	resultadoDeLaSuma=precioIngresado1+precioIngresado2+precioIngresado3;
	alert("La suma de los 3 precios = "+resultadoDeLaSuma);
}
function Promedio () 
{
	let precioIngresado1;
	let precioIngresado2;
	let precioIngresado3;
	let sumaDePrecios;
	let promedio;

	precioIngresado1=document.getElementById('txtIdPrecioUno').value;
	precioIngresado1=parseInt(precioIngresado1);

	precioIngresado2=document.getElementById('txtIdPrecioDos').value;
	precioIngresado2=parseInt(precioIngresado2);

	precioIngresado3=document.getElementById('txtIdPrecioTres').value;
	precioIngresado3=parseInt(precioIngresado3);

	sumaDePrecios=precioIngresado1+precioIngresado2+precioIngresado3;
	promedio=sumaDePrecios/3;
	alert("El promedio de la operación = "+promedio);
}
function PrecioFinal () 
{
	let precioIngresado1;
	let precioIngresado2;
	let precioIngresado3;
	let sumaDePrecios;
	let precioFinalMasIva;
	let impuestoValorAgregado;

	precioIngresado1=document.getElementById('txtIdPrecioUno').value;
	precioIngresado1=parseInt(precioIngresado1);

	precioIngresado2=document.getElementById('txtIdPrecioDos').value;
	precioIngresado2=parseInt(precioIngresado2);

	precioIngresado3=document.getElementById('txtIdPrecioTres').value;
	precioIngresado3=parseInt(precioIngresado3);

	sumaDePrecios=precioIngresado1+precioIngresado2+precioIngresado3;
	impuestoValorAgregado=sumaDePrecios*21/100;
	precioFinalMasIva=sumaDePrecios+impuestoValorAgregado;
	alert("El precio + IVA = "+precioFinalMasIva);
}