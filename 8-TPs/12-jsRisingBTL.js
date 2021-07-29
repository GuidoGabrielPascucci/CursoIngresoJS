/*
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
*/
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
    var sueldoBruto;
    var numeroLegajo;
    var nacionalidad;
    var ingresarNuevoDato = "si";

    while (ingresarNuevoDato == "si")
    {
        alert ("Por favor, ingrese los siguientes datos");
        edad = prompt ("Edad");

        while (edad < 18 || edad > 90)
        {
            edad = prompt ("Error. Ingrese nuevamente su edad");
        }

        sexo = prompt ("Sexo");

        while (sexo != "m" && sexo != "f")
        {
            sexo = prompt ("Error. Ingrese nuevamente su sexo");
        }

        estadoCivil = prompt ("Estado Civil");

        while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "divorciado" && estadoCivil != "viudo")
        {
            estadoCivil = prompt ("Error. Ingrese nuevamente su estado civil");
        }

        sueldoBruto = prompt ("Sueldo Bruto");

        while (sueldoBruto < 8000)
        {
            sueldoBruto = prompt ("Error. Ingrese nuevamente su sueldo bruto");
        }

        numeroLegajo = prompt ("Número de Legajo");

        while (numeroLegajo > 9999 || numeroLegajo < 1000)
        {
            numeroLegajo = prompt ("Error. Ingrese nuevamente su número de legajo");
        }

        nacionalidad = prompt ("Nacionalidad");

        while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
        {
            nacionalidad = prompt ("Error. Ingrese nuevamente su nacionalidad");
        }

        ingresarNuevoDato = prompt ("¿Desea ingresar un nuevo dato?");
    }

    txtIdEdad.value = edad;
    txtIdSexo.value = sexo;
    txtIdEstadoCivil.value = estadoCivil;
    txtIdSueldo.value = sueldoBruto;
    txtIdLegajo.value = numeroLegajo;
    txtIdNacionalidad.value = nacionalidad;
}
