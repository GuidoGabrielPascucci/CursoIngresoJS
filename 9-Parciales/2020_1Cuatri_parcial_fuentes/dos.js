/*
Pascucci, Guido Gabriel - Div C
Enunciado: DOS

Realizar el algoritmo que permita ingresar los datos de una compra
productos de la construccion, hasta que el cliente quiera:
Validar tipo ("arena"; "cal"; "cemento").
Cantidad de bolsas, Precio por bolsa (más de cero).

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro.
*/

function mostrar()
{
  var tipoDeProducto;
  var seguirIngresandoProductos;
  var cantidadBolsas;
  var precioPorBolsa;
  
  var precioBruto;
  var acumuladorPrecioBruto;
  var acumuladorBolsas;
  var precioFinal;
  var descuento;
  
  var contadorArena;
  var contadorCal;
  var contadorCemento;

  var tipoProductoMasComprado;

  var tipoMasCaroBandera;
  var precioMaximoIngresado;
  var tipoMasCaro;

  seguirIngresandoProductos = "si";
  acumuladorPrecioBruto = 0;
  acumuladorBolsas = 0;
  contadorArena = 0;
  contadorCal = 0;
  contadorCemento = 0;
  tipoMasCaroBandera = "1";

  while (seguirIngresandoProductos == "si")
  {
    tipoDeProducto = prompt ("Ingrese un nuevo producto");

    while (tipoDeProducto != "arena" && tipoDeProducto != "cal" && tipoDeProducto != "cemento")
    {
      tipoDeProducto = prompt ("Error. Ingrese nuevamente un producto");
    }

    cantidadBolsas = prompt ("Ingrese la cantidad de bolsas");
    cantidadBolsas = parseInt (cantidadBolsas);
    precioPorBolsa = prompt ("Ingrese el precio por bolsa");
    precioPorBolsa = parseInt (precioPorBolsa);

    while ((cantidadBolsas < 0 || cantidadBolsas == 0) || (precioPorBolsa < 0 || precioPorBolsa == 0))
    {
      if (cantidadBolsas < 0 || cantidadBolsas == 0)
      {
        cantidadBolsas = prompt ("Error. Ingrese nuevamente la cantidad de bolsas");
      }
      else
      {
        precioPorBolsa = prompt ("Error. Ingrese nuevamente el precio por bolsa");
      }
    }

    switch (tipoDeProducto)
    {
      case "arena":
          contadorArena = contadorArena + cantidadBolsas;
        break;
      case "cal":
          contadorCal = contadorCal + cantidadBolsas;
        break;
      case "cemento":
          contadorCemento = contadorCemento + cantidadBolsas;
        break;
    }
    
    while (seguirIngresandoProductos == "si")
    {
      while (tipoMasCaroBandera == "1")
      {
        precioMaximoIngresado = precioPorBolsa;
        if (tipoDeProducto == "arena")
        {
          tipoMasCaro = "Arena - el precio más caro es: " + precioMaximoIngresado;
        }
        else
        {
          if (tipoDeProducto == "cal")
          {
            tipoMasCaro = "Cal - el precio más caro es: " + precioMaximoIngresado;
          }
          else
          {
            tipoDeProducto = "Cemento - el precio más caro es: " + precioMaximoIngresado;
          }
        }
        tipoMasCaroBandera = "0";
      }
      if (precioPorBolsa > precioMaximoIngresado)
      {
        switch (tipoDeProducto)
        {
          case "arena":
              tipoMasCaro = "Arena - el precio más caro es: " + precioPorBolsa;
            break;
          case "cal":
              tipoMasCaro = "Cal - el precio más caro es: " + precioPorBolsa;
            break;
          case "cemento":
              tipoMasCaro = "Cemento - el precio más caro es: " + precioPorBolsa;
            break;
        }
      }
      seguirIngresandoProductos = "no";
    }

    precioBruto = cantidadBolsas * precioPorBolsa;
    acumuladorPrecioBruto = acumuladorPrecioBruto + precioBruto;
    acumuladorBolsas = acumuladorBolsas + cantidadBolsas; 

    seguirIngresandoProductos = prompt ("¿Desea seguir ingresando productos?");
  } // FIN DEL WHILE

  if (acumuladorBolsas > 30) // 25% sobre el total a pagar
  {
    descuento = acumuladorPrecioBruto * 25 / 100;
    precioFinal = acumuladorPrecioBruto - descuento;
  }
  else
  {
    if (acumuladorBolsas > 10) // 15% sobre el total a pagar
    {
      descuento = acumuladorPrecioBruto * 15 / 100;
      precioFinal = acumuladorPrecioBruto - descuento;
    }
    else
    {
      precioFinal = "-";
    }
  }

  if (contadorArena > contadorCal && contadorArena > contadorCemento)
  {
    tipoProductoMasComprado = "Arena";
  }
  else
  {
    if (contadorCal > contadorCemento)
    {
      tipoProductoMasComprado = "Cal";
    }
    else
    {
      tipoProductoMasComprado = "Cemento";
    }
  }

  document.write ("A <br/> Importe total a pagar, bruto (sin descuento): " + acumuladorPrecioBruto + "<br/> B <br/> Importe total a pagar (con descuento): " + precioFinal + "<br/> C <br/> Tipo con más cantidad de bolsas: " + tipoProductoMasComprado + "<br/> E <br/> Tipo más caro: " + tipoMasCaro);
}
