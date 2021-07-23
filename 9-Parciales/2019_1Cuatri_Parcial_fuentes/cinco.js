/*
Autor: 		Pascucci, Guido Gabriel
Enunciado: 	Bienvenidos (SOLO SWITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%.
*/

function mostrar()
{
	var continente;
	var diasIngresados;
	var precioPorDia;
	var precioBruto;
	var porcentaje;
	var descuento;
	var precioFinal;
	var medioDePago;

	continente=document.getElementById('Marca').value;
	diasIngresados=prompt("Ingrese cantidad de días");
	medioDePago=prompt("Ingrese medio de pago");
	precioPorDia=100;
	precioBruto=diasIngresados*precioPorDia;
	porcentaje=0;

	switch(continente)
	{
		case "América":
			porcentaje=50;
			switch(medioDePago)
			{
				case "Débito":
					porcentaje=porcentaje+10;
				break;
			}			
		break;
		case "África":
			porcentaje=60;
			switch(medioDePago)
			{
				case "Mercado Pago":
				case "Efectivo":
					porcentaje=porcentaje+15;
				break;
			}	
		break;
		case "Europa": 
			porcentaje=20;
			switch(medioDePago)
			{
				case "Débito":
					porcentaje=porcentaje+15;
				break;
				case "Mercado Pago":
					porcentaje=porcentaje+10;
				break;
				default:
					porcentaje=porcentaje+5;
				break;
			}	
		break;
		default:
			porcentaje=-20 
		break;
	}

	descuento=precioBruto*porcentaje/100;
	precioFinal=precioBruto-descuento

	alert(precioFinal);
}
