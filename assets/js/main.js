// PRIMERA ENTREGA DEL PROYECTO FINAL
// Formato: Página HTML y  código fuente en JavaScript. Debe identificar el apellido del alumno/a en el nombre de archivo comprimido por “claseApellido”.
// Sugerencia: Si bien, por el momento solo podemos hacer entradas con prompt() y salidas con alert() o console.log(), es suficiente para empezar a pensar el proceso a simular en términos de entradas, variables, estructuras, funciones, métodos y salidas. Verificar Rúbrica

// >>Objetivos Generales:
// Codificar la funcionalidad inicial del simulador.
// Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.

// >>Objetivos Específicos:
// Capturar entradas mediante prompt().
// Declarar variables y objetos necesarios para simular el proceso seleccionado.
// Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
// Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().

// >>Para tener en cuenta:
// La estructura hace referencia a el html y css, correspondientes al armado de la página general, pero que el JS que se evalúa, aún no está interactuando con ella.

// >>Se debe entregar:
// Estructura HTML del proyecto.
// Variables de JS necesarias.
// Funciones esenciales del proceso a simular.
// Objetos de JS
// Arrays
// Métodos de búsqueda y filtrado sobre el Array

let producto = "";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = true;
let talle = "";

let nombreAux = "";
let talleAux = "";
let precioAux;

var arrayProductos = [];

class Producto {
  constructor(nombre, precio, talle, cantidad) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.talle = talle;
    this.cantidad = cantidad;
    this.disponible = true;
  }
}

// calcularIva al producto seleccionado
function calcularIva(precio) {
  return precio * 0.21;
}

// sumar el Iva + el precio del producto
function sumarIva(precio) {
  return precio + calcularIva(precio);
}

// Programa principal

do {
  producto = prompt(
    "¿Queres comprar algun producto A) Remera B) Camisa C) Chomba D) NO?"
  );

  if (seguirComprando == true && producto != "D") {
    cantidad = Number(prompt("¿Cuantos queres comprar?"));
    talle = prompt(
      "Que talle sos? A) Talle-XS B) Talle-S C) Talle-M D) Talle-L E) Talle-XL F) Talle-XXL"
    );

    switch (talle) {
      case "A":
        talleAux = "XS";
        precio = 100;

        break;
      case "B":
        talleAux = "S";
        precio = 101;

        break;
      case "C":
        talleAux = "M";
        precio = 102;

        break;
      case "D":
        talleAux = "L";
        precio = 103;

        break;
      case "E":
        talleAux = "XL";
        precio = 104;

        break;
      case "F":
        talleAux = "XXL";
        precio = 105;

        break;
    }
  }

  switch (producto) {
    case "A":
      nombreAux = "Remera";
      break;

    case "B":
      nombreAux = "Camisa";
      // console.log(Producto);
      break;

    case "C":
      nombreAux = "Chomba";
      break;

    case "D":
      seguirComprando = false;
      alert("Lamentamos que no quiera comprar");
      break;
    default:
      alert("Algunos de los datos ingresados no son correctos");
      precio = 0;
      cantidad = 0;

      break;
  }

  cantidadTotal += cantidad;
  precioTotal += precio * cantidad;

  arrayProductos.push(new Producto(nombreAux, precio, talleAux, cantidad));

  if (seguirComprando === true) {
    seguirComprando = confirm("¿Queres seguir comprando?");
  }
} while (seguirComprando == true);

// si la cantidad es mayor de 0 quiere decir que compro ,
// calculo el IVA con el precio del producto x talle
if (cantidad > 0) {
  precioTotal = sumarIva(precioTotal);
  alert(
    "Ha comprado: " +
      cantidadTotal +
      " unidades y el precio final es: $" +
      parseFloat(precioTotal)
  );

  finalizarCompra = confirm("¿Quiere finalizar la compra?");
  if (finalizarCompra) {
    alert("Su compra ha sido realizada con exito");
  } else {
    alert("Esperamos volverlo a ver pronto. Saludos");
  }
}

console.log(arrayProductos);

for (let producto of arrayProductos) {
  document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li></ul>");
  document.write("<ul><li><h3>Precio: " + producto.precio + "</h3></li></ul>");

  document.write("<ul><li><h3>Talle: " + producto.talle + "</h3></li></ul>");
  document.write(
    "<ul><li><h3>Cantidad: " + producto.cantidad + "</h3></li></ul>"
  );

  console.log(producto.nombre);
  console.log(producto.precio);
  console.log(producto.nombre);
  console.log(producto.nombre);
  console.log(producto.nombre);
}

// PRODUCTOS sin STOCK que la cantidad del objeto sea igual a 0 o que la disponibilidad este en false
let sinStock = arrayProductos.filter(
  (producto) => producto.cantidad === 0 || producto.disponible == false
);
console.log(sinStock);

document.write("<ul><li><h3>Lista de Productos sin Stock: </h3></li></ul>");

for (let producto of sinStock) {
  console.log(producto.nombre);
  console.log(producto.precio);
  console.log(producto.nombre);
  console.log(producto.nombre);
  console.log(producto.nombre);
}

let ordenadosCantidad = [];
ordenadosCantidad = arrayProductos.map((elemento) => elemento);
ordenadosCantidad.sort(function (a, b) {
  return  b.cantidad - a.cantidad;
});

console.log("Ordenados por Cantidad Descendente");
console.log(ordenadosCantidad);

document.write("<ul><li><h3>Lista de Productos por cantidad: </h3></li></ul>");

for (let producto of ordenadosCantidad) {
  console.log(producto.nombre);
  console.log(producto.talle);
  console.log(producto.cantidad);
}

let ordenadosPrecio = [];
ordenadosCantidad = arrayProductos.map((elemento) => elemento);
ordenadosPrecio = arrayProductos;
ordenadosPrecio.sort(function (a, b) {
  return a.precio - b.precio;
});

console.log("Ordenados por Precios Ascendente");
console.log(ordenadosPrecio);

document.write("<ul><li><h3>Lista de Productos por Precio: </h3><li>");

for (let producto of ordenadosPrecio) {
  console.log(producto.nombre);
  console.log(producto.talle);
  console.log(producto.cantidad);
}
