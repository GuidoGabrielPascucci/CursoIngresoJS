/*
Autor:		Pascucci, Guido Gabriel
Enunciado:	Debemos lograr tomar Los numeros por ID, transformarlos a enteros (parseInt), realizar la operación correcta y mostrar el resultado por medio de "ALERT", ej.: "la Resta es 750"
*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;
	alert("La suma de ambos números es "+resultado);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno-numeroDos;
	alert("La resta de ambos números es "+resultado);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno*numeroDos;
	alert("La multiplicación de ambos números es "+resultado);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno/numeroDos;
	alert("La división de ambos números es "+resultado);
}

