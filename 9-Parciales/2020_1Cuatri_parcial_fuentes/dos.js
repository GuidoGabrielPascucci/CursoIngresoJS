/*
Pascucci, Guido Gabriel
Enunciado: Punto 2

Nos dedicamos a la venta exclusiva de Discos rígidos. <br>
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los <br>
siguientes datos:<br>
Tipo: (validar "HDD", "SSD" o "SSDM2")<br>
Precio: (validar entre 5000 y 18000),<br>
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).<br>
Marca: (validar “Seagate”, “WD”, “Kingston”)<br>
Capacidad: (validar 250, 500, 1, 2)<br>
Se debe Informar al usuario lo siguiente:<br>
a) Del más barato de los SSD, la cantidad de unidades y marca.<br>
b) que tipo tiene mas unidades vendidas en total  <br>
c) Cuántas unidades de HDD hay en total.<br>
d) el porcentaje que tiene HDD, SSD y SSDM2 sobre el total de unidades compradas.
*/

function mostrar()
{
  var tipoDeDisco;
  var precioPorDisco;
  var cantidadUnidades;
  var marca;
  var capacidad;
  var ssdMasBaratoBandera;
  var ssdMasBarato;
  var ssdMasBaratoUnidades;
  var ssdMasBaratoMarca;
  var acumuladorHDD;
  var acumuladorSSD;
  var acumuladorSSDM2;
  var tipoDeDiscoMasVendido;
  var totalUnidadesCompradas;
  var contadorProductos;
  var porcentajeHDD;
  var porcentajeSSD;
  var porcentajeSSDM2;

  ssdMasBaratoBandera = 1;

  acumuladorHDD = 0;
  acumuladorSSD = 0;
  acumuladorSSDM2 = 0;

  contadorProductos = 0;

  while (contadorProductos < 5)
  {
    
    tipoDeDisco = prompt ("Ingrese el tipo de disco");

    while (tipoDeDisco != "HDD" && tipoDeDisco != "SSD" && tipoDeDisco != "SSDM2")
    {
      tipoDeDisco = prompt ("Error. Ingrese nuevamente tipo de disco");
    }

    precioPorDisco = prompt ("Ingrese precio del disco");
    precioPorDisco = parseInt (precioPorDisco);

    while (precioPorDisco < 5000 || precioPorDisco > 18000)
    {
      precioPorDisco = prompt ("Error. Ingrese nuevamente precio del disco");
      precioPorDisco = parseInt (precioPorDisco);
    }

    cantidadUnidades = prompt ("Ingrese la cantidad de unidades");
    cantidadUnidades = parseInt (cantidadUnidades);

    while (cantidadUnidades < 0 || cantidadUnidades == 0 || cantidadUnidades > 50)
    {
      cantidadUnidades = prompt ("Error. Ingrese nuevamente la cantidad de unidades");
      cantidadUnidades = parseInt (cantidadUnidades);
    }

    marca = prompt ("Ingrese marca");

    while (marca != "Seagate" && marca != "WD" && marca != "Kingston")
    {
      marca = prompt ("Error. Ingrese nuevamente la marca");
    }

    capacidad = prompt ("Ingrese la capacidad");
    capacidad = parseInt (capacidad);

    while (capacidad != 250 && capacidad != 500 && capacidad != 1 && capacidad != 2)
    {
      capacidad = prompt ("Error. Ingrese nuevamente la capacidad");
      capacidad = parseInt (capacidad);
    }

    if (tipoDeDisco == "SSD")
    {
      if (ssdMasBaratoBandera == 1)
      {
        ssdMasBarato = precioPorDisco;
        ssdMasBaratoUnidades = cantidadUnidades;
        ssdMasBaratoMarca = marca;
        ssdMasBaratoBandera = 0;
      }
      else
      {
        if (precioPorDisco < ssdMasBarato)
        {
          ssdMasBarato = precioPorDisco;
          ssdMasBaratoUnidades = cantidadUnidades;
          ssdMasBaratoMarca = marca;
        }
      }
    }

    switch (tipoDeDisco)
    {
      case "HDD":
              acumuladorHDD = acumuladorHDD + cantidadUnidades;
          break;
      case "SSD":
              acumuladorSSD = acumuladorSSD + cantidadUnidades;
          break;
      default:
              acumuladorSSDM2 = acumuladorSSDM2 + cantidadUnidades;
          break;
    }

    contadorProductos++
  } // FIN DEL WHILE.

  if (acumuladorHDD > acumuladorSSD && acumuladorHDD > acumuladorSSDM2)
  {
    tipoDeDiscoMasVendido = "HDD";
  }
  else
  {
    if (acumuladorSSD > acumuladorSSDM2)
    {
      tipoDeDiscoMasVendido = "SSD";
    }
    else
    {
      tipoDeDiscoMasVendido = "SSDM2";
    }
  }

  totalUnidadesCompradas = acumuladorHDD + acumuladorSSD + acumuladorSSDM2;

  porcentajeHDD = totalUnidadesCompradas / acumuladorHDD;
  porcentajeSSD = totalUnidadesCompradas / acumuladorSSD;
  porcentajeSSDM2 = totalUnidadesCompradas / acumuladorSSDM2;

  document.write ("Del más barato de los SSD, cantidad de unidades = " + ssdMasBaratoUnidades + "; marca = " + ssdMasBaratoMarca + "<br/>Tipo de disco con más unidades vendidas en total = " + tipoDeDiscoMasVendido + "<br/>Unidades totales de HDD = " + acumuladorHDD + "<br/>Porcentaje HDD = " + porcentajeHDD + "; porcentaje SSD = " + porcentajeSSD + "; porcentaje SSDM2 = " + porcentajeSSDM2);
}
