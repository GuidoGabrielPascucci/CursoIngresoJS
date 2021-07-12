/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	TP 02 --- Ferrete Construcción (E/S)
2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largoDelTerreno;
	let anchoDelTerreno;
	let sumaDeLosLados;
	let totalDeAlambreAComprar;
	let mensajeSalida;

	largoDelTerreno=document.getElementById('txtIdLargo').value;
	largoDelTerreno=parseInt(largoDelTerreno);

	anchoDelTerreno=document.getElementById('txtIdAncho').value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	sumaDeLosLados=largoDelTerreno*2+anchoDelTerreno*2;
	totalDeAlambreAComprar=sumaDeLosLados*3;

	mensajeSalida="Total de alambre a comprar = "+totalDeAlambreAComprar;
	alert(mensajeSalida);

}
function Circulo () 
{
	let radioDelTerreno;
	let diametroDelCirculo;
	let numeroPi;
	let circunferencia;
	let totalDeAlambreAComprar;
	let mensajeSalida;
	
	radioDelTerreno=document.getElementById('txtIdRadio').value;
	radioDelTerreno=parseFloat(radioDelTerreno);

	diametroDelCirculo=radioDelTerreno*2;
	numeroPi=3.14;
	circunferencia=diametroDelCirculo*numeroPi;
	totalDeAlambreAComprar=circunferencia*3;

	mensajeSalida="Total de alambre a comprar = "+totalDeAlambreAComprar;
	alert(mensajeSalida);
}
function Materiales () 
{
	let largoDelTerreno;
	let anchoDelTerreno;
	let metrosCuadradosDeContrapiso;
	let bolsasDeCemento;
	let bolsasDeCal;
	let mensajeSalida;

	largoDelTerreno=document.getElementById('txtIdLargo').value;
	largoDelTerreno=parseFloat(largoDelTerreno);

	anchoDelTerreno=document.getElementById('txtIdAncho').value;
	anchoDelTerreno=parseFloat(anchoDelTerreno);

	metrosCuadradosDeContrapiso=largoDelTerreno*anchoDelTerreno;
	
	bolsasDeCemento=metrosCuadradosDeContrapiso*2
	bolsasDeCal=metrosCuadradosDeContrapiso*3

	mensajeSalida="Usted necesita "+bolsasDeCemento;
	mensajeSalida=mensajeSalida+" bolsas de cemento, ";
	mensajeSalida=mensajeSalida+"y necesita "+bolsasDeCal;
	mensajeSalida=mensajeSalida+" bolsas de cal";
	alert(mensajeSalida);
}