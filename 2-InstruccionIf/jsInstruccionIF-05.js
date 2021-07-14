function mostrar()
{
	let edadDelUsuario;

	edadDelUsuario=document.getElementById('txtIdEdad').value;
	edadDelUsuario=parseInt(edadDelUsuario);

	//Condición verdadera para valores por debajo o encima de [13;17] 
	if (edadDelUsuario<13 || edadDelUsuario>17)
	{
		alert("No es adolescente");
	}

	//Pregunto si no estoy dentro del rango
	if ( !(edadDelUsuario >= 13 && edadDelUsuario <= 17) )
	{
		alert("No es adolescente");
	}
	//Cuando la condición sea verdadera no entre, y cuando sea falsa entre

	alert("Fin de la función");
}