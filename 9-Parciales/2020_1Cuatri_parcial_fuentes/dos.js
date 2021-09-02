/*
Pascucci, Guido Gabriel
Enunciado: 

El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh! desea ingresar en el
sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.

Se pide informar por document.write:
A) El nombre y rareza de la carta con mayor precio.
B) Cuantas cartas de tipo "trampa" y de rareza "rara o super rara" fueron vendidas.
C) El promedio de precio de las cartas de tipo "monstruo" de rareza "ultra rara" con un precio menor a 500.
*/

function mostrar()
{
    var nombreCarta;
    var tipoCarta;
    var rareza;
    var precio;
    var seguirIngresandoCartas;
    var cartaMasCara;
    var cartaMasCaraNombre;
    var cartaMasCaraRareza;
    var cartaMasCaraBandera;
    var contadorCartasTrampa;
    var contadorRaraYSuperRara;
    var cantidadCartasPuntoB;
    var contadorMonstruoUltraRara;
    var acumuladorPrecioMonstruoUltraRara;
    var promedio;

    seguirIngresandoCartas = "si";
    cartaMasCaraBandera = 0;
    contadorCartasTrampa = 0;
    contadorRaraOSuperRara = 0;
    contadorMonstruoUltraRara = 0;
    acumuladorPrecioMonstruoUltraRara = 0;

    while (seguirIngresandoCartas == "si")
    {
      nombreCarta = prompt ("Ingrese el nombre de la carta");

      tipoCarta = prompt ("Ingrese el tipo de carta");

      while (tipoCarta != "monstruo" && tipoCarta != "magica" && tipoCarta != "trampa")
      {
        tipoCarta = prompt ("Error. Ingrese nuevamente el tipo de carta");
      }

      rareza = prompt ("Ingrese Rareza");

      while (rareza != "rara" && rareza != "super rara" && rareza != "ultra rara")
      {
        rareza = prompt ("Error. Ingrese nuevamente rareza");
      }

      precio = prompt ("Ingrese precio");
      precio = parseInt (precio);

      while (precio < 0 || precio == 0)
      {
        precio = prompt ("Error. Ingrese nuevamente el precio");
        precio = parseInt (precio);
      }

      if (cartaMasCaraBandera == 0) // A
      {
        cartaMasCara = precio;
        cartaMasCaraNombre = nombreCarta;
        cartaMasCaraRareza = rareza;
      }
      else
      {
        if (precio > cartaMasCara)
        {
          cartaMasCara = precio;
          cartaMasCaraNombre = nombreCarta;
          cartaMasCaraRareza = rareza;
        }
      }

      switch (tipoCarta)
      {
        case "monstruo":
            if (rareza == "ultra rara" && precio < 500) // C
            {
              contadorMonstruoUltraRara++;
              acumuladorPrecioMonstruoUltraRara = acumuladorPrecioMonstruoUltraRara + precio;
            }
          break;
        case "magica":
          break;
        case "trampa": // B
            contadorCartasTrampa++;
            switch (rareza)
            {
              case "rara":
              case "super rara":
                  contadorRaraOSuperRara++;
                break;
            }
          break;
      }

      seguirIngresandoCartas = prompt ("¿Desea seguir ingresando cartas?");
    } // Fin del while

    cantidadCartasPuntoB = contadorCartasTrampa + contadorRaraOSuperRara;
    promedio = acumuladorPrecioMonstruoUltraRara / contadorMonstruoUltraRara;

    document.write ("A- Nombre y rareza de la carta más cara: " + cartaMasCaraNombre + " - " + cartaMasCaraRareza + "<br/>B- Cartas trampa raras / super raras vendidas: " + cantidadCartasPuntoB + "<br/>C- Promedio de cartas monstruo ultra rara: " + promedio);
}

/*
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
*/
