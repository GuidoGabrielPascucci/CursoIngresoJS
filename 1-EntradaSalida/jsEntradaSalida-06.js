/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Debemos lograr tomar Los numeros por ID , transformarlos a enteros (parseInt) y Sumarlos. mostrar el resultado por medio de "ALERT"
*/

function sumar()

{

	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;
	mensaje=resultado;

	alert("La suma de ambos numeros es "+mensaje);

/*
	
	var primero;
	var segundo;
	var suma;

	primero=10;
	segundo=5;

	suma=primero+segundo

	alert(suma);


*/

}	





