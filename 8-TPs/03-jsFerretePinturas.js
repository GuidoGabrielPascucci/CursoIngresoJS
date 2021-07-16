/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaIngresada;
	let gradosCentigrados;
	let mensajeSalida;

	temperaturaIngresada=document.getElementById('txtIdTemperatura').value;
	temperaturaIngresada=parseFloat(temperaturaIngresada);

	gradosCentigrados=5/9*(temperaturaIngresada-32);

	mensajeSalida=temperaturaIngresada+"° Fahrenheit";
	mensajeSalida=mensajeSalida+" son ";
	mensajeSalida=mensajeSalida+gradosCentigrados;
	mensajeSalida=mensajeSalida+"° Centígrados";

	alert(mensajeSalida);
}

function CentigradosFahrenheit () 
{
	let temperaturaIngresada;
	let gradosFahrenheit;
	let mensajeSalida;

	temperaturaIngresada=document.getElementById('txtIdTemperatura').value;
	temperaturaIngresada=parseFloat(temperaturaIngresada);

	gradosFahrenheit=(temperaturaIngresada*1.8)+32;

	mensajeSalida=temperaturaIngresada+"° Centígrados";
	mensajeSalida=mensajeSalida+" son ";
	mensajeSalida=mensajeSalida+gradosFahrenheit;
	mensajeSalida=mensajeSalida+"° Fahrenheit";

	alert(mensajeSalida);
}
