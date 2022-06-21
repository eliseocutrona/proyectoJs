let producto = "";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = true;
let talle = "";

// calcularIva al producto seleccionado
function calcularIva(precio) {
  return precio * 0.21;
}

// sumar el Iva + el precio del producto
function sumarIva(precio) {
  return precio + calcularIva(precio);
}

function obtenerPrecioxTalle(talle, precio) {
  talle = prompt("Que talle sos? A) XS B) S C) M D) L E) XL F) XXL");

  switch (talle) {
    case "A":
      precio = 100;
    case "B":
      precio = 101;
    case "C":
      precio = 102;
      break;
    case "D":
      precio = 103;
    case "E":
      precio = 104;
    case "F":
      precio = 105;

    default:
      alert("Precio no definido");

      break;
  }

  return precio;
}

do {
  producto = prompt(
    "¿Queres comprar algun producto A) Remera B) Camisa C) Chomba D) NO?"
  );

  if (seguirComprando === true) {
    cantidad = Number(prompt("¿Cuantos queres comprar?"));
  }

  switch (producto) {
    case "A":
    case "B":
    case "C":
      precio = parseInt(obtenerPrecioxTalle(talle, precio));
      // alert(talle);
      // alert(precio); debugeo
      break;
    case "D":
    case "":
      alert("Lamentamos que no quiera comprar");
      seguirComprando = false;
      break;
    default:
      alert("Algunos de los datos ingresados no son correctos");
      precio = 0;
      cantidad = 0;

      break;
  }

  cantidadTotal += cantidad;
  precioTotal += precio * cantidad;

  if (seguirComprando === true) {
    seguirComprando = confirm("¿Queres seguir comprando?");
  }
} while (seguirComprando === true);

// si la cantidad es mayor de 0 quiere decir que compro ,
// calculo el IVA con el precio del producto x talle
if (cantidad > 0) {
  precioTotal = sumarIva(precioTotal);
  alert(
    "Ha comprado: " +
      cantidadTotal +
      " unidades y el precio final es: $" +
      parseInt(precioTotal)
  );

  finalizarCompra = confirm("¿Quiere finalizar la compra?");
  if (finalizarCompra) {
    alert("Su compra ha sido realizada con exito");
  } else {
    alert("Esperamos volver a verlo pronto");
  }
}
