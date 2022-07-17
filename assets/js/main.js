// INTERACTUAR CON HTML
// Formato: Página HTML y código fuente en JavaScript. Debe identificar el apellido del estudiante en el nombre de archivo comprimido por “claseApellido”.
// Sugerencia: Generalmente, identificamos a un único elemento del DOM con el atributo id y a un conjunto asociado por class.

// >> Consigna:  Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. En función del tipo de simulador que hayas elegido, deberás:
// Crear elementos manipulando el DOM a partir de la informaciòn de tus objetos.
// Modificar etiquetas existentes en función del resultado de operaciones.
// >>Aspectos a incluir en el entregable:
// Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que opere sobre el DOM, modificando, agregando o eliminado elementos.
// >>Ejemplo:
// Podemos crear elementos HTML en función del listado de nuestros objetos identificados en la clase 6.
// Establecer un mensaje de bienvenida aleatorio usando un array de mensajes.
// Capturar una o màs entradas por promp() y mostrarlas en el HTML, modificando el DOM

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

  venderProducto() {
    this.disponible = false;
  }
}

function mostrarValores(array) {
  for (let producto of array) {
    console.log(producto.nombre);
    console.log(producto.precio);
    console.log(producto.cantidad);
    console.log(producto.talle);
  }
}

// agregue Modo Oscuro con un evento

let boton = document.querySelector("#boton");

boton.addEventListener("click", function () {
  // e.preventDefault()

  if (localStorage.getItem("theme") == "dark") {
    lightMode();
  } else {
    darkMode();
  }
});

function darkMode() {
  // let lista = document.querySelector("ul");
  // lista.style.backgroundColor = "blue";

  // let lista2 = document.querySelector("li");
  // lista2.style.backgroundColor = "blue";

  // let div = document.querySelector("div");
  // div.style.color = "blue";

  let body = document.querySelector("body");
  body.style.backgroundColor = "black";

  let parrafos = document.querySelector("#parrafos");
  parrafos.style.color = "white";

  localStorage.setItem("theme", "dark");

  // let nav2 = document.querySelector("nav");
  // nav2.style.color = "blue";
}

function lightMode() {
  // let lista = document.querySelector("ul");
  // lista.style.backgroundColor = "red";

  // let lista2 = document.querySelector("li");
  // lista2.style.backgroundColor = "red";

  // let div = document.querySelector("div");
  // div.style.color = "red";
  let body = document.querySelector("body");
  body.style.backgroundColor = "white";

  let parrafos = document.querySelector("#parrafos");
  parrafos.style.color = "black";
  localStorage.setItem("theme", "light");
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("theme") == "dark") {
    darkMode();
  } else {
    lightMode();
  }
});

// NO ME FUNCIONA
// let agregarProducto = document.querySelector("#btnAgregarCantidad");

// agregarProducto.addEventListener("click", agregarCantidadProducto)
// agregarProducto.addEventListener("click", agregarCantidadProducto)
// function agregarCantidadProducto() {
// e.preventDefault();

// console.log("Sumar Producto");
// alert("Sumar Producto");

// arrayProductos.push(new Producto(nombreAux, precio, talleAux, cantidad));
// cantidadTotal += cantidad;
// precioTotal += precio * cantidad;

// renderizarProducto(arrayProductos);
// }

function renderizarProducto(array) {
  // console.log();

  array.forEach((element) => {
    let contenedor = document.createElement("div");

    if (element.cantidad > 0) {
      //innerHTML plantilla de texto
      contenedor.innerHTML = `
        <div class="col-1 m-3">
          <img src="assets/img/dummies/team1.jpg" alt="Producto" class="card-img-top" />
          <div class="card-body">
            <ul class="social-profile" id ="carrito">
              <p class="card-text">
              <h3> Producto: ${element.nombre} </h3>
              <p> Cantidad: ${element.cantidad}</p>
              <p> Precio: ${element.precio}</p>
              <p> Talle: ${element.talle}</p>
              </p>

              <div class="d-flex justify-content-center align-items-center">
                <a href="#" class="btn btn-primary" 
                  ><button class="material-symbols-outlined" id="btnAgregarCantidad">
                    add_shopping_cart
                  </button></a
                >
              </div>
            </ul>
          </div>
        </div>
     `;

      document.body.appendChild(contenedor);
    }
  });
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

// do {
//   producto = prompt(
//     "¿Queres comprar algun producto A) Remera B) Camisa C) Chomba D) NO?"
//   );

//   if (seguirComprando == true && producto != "D") {
//     cantidad = Number(prompt("¿Cuantos queres comprar?"));
//     talle = prompt(
//       "Que talle sos? A) Talle-XS B) Talle-S C) Talle-M D) Talle-L E) Talle-XL F) Talle-XXL"
//     );

//     switch (talle) {
//       case "A":
//         talleAux = "XS";
//         precio = 100;

//         break;
//       case "B":
//         talleAux = "S";
//         precio = 101;

//         break;
//       case "C":
//         talleAux = "M";
//         precio = 102;

//         break;
//       case "D":
//         talleAux = "L";
//         precio = 103;

//         break;
//       case "E":
//         talleAux = "XL";
//         precio = 104;

//         break;
//       case "F":
//         talleAux = "XXL";
//         precio = 105;

//         break;
//     }
//   }

//   switch (producto) {
//     case "A":
//       nombreAux = "Remera";
//       break;

//     case "B":
//       nombreAux = "Camisa";
//       // console.log(Producto);
//       break;

//     case "C":
//       nombreAux = "Chomba";
//       break;

//     case "D":
//       seguirComprando = false;
//       cantidadTotal = cantidad--;
//       alert("Lamentamos que no quiera comprar");

//       break;
//     default:
//       alert("Algunos de los datos ingresados no son correctos");
//       precio = 0;
//       cantidad = 0;

//       break;
//   }

//   arrayProductos.push(new Producto(nombreAux, precio, talleAux, cantidad));
//   cantidadTotal += cantidad;
//   precioTotal += precio * cantidad;

//   if (seguirComprando === true) {
//     seguirComprando = confirm("¿Queres seguir comprando?");
//   }
// } while (seguirComprando == true);

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

mostrarValores(arrayProductos);
renderizarProducto(arrayProductos);

// PRODUCTOS sin STOCK que la cantidad del objeto sea igual a 0 o que la disponibilidad este en false
let sinStock = arrayProductos.filter((producto) => producto.cantidad === 0);
console.log(sinStock);

console.log("Lista de Productos sin Stock:");

mostrarValores(sinStock);
// renderizarProducto(sinStock);

let ordenadosCantidad = [];
ordenadosCantidad = arrayProductos.map((elemento) => elemento);
ordenadosCantidad.sort(function (a, b) {
  return b.cantidad - a.cantidad;
});

console.log("Ordenados por Cantidad Descendente");
console.log(ordenadosCantidad);

mostrarValores(ordenadosCantidad);
// renderizarProducto(ordenadosCantidad);

let ordenadosPrecio = [];
ordenadosCantidad = arrayProductos.map((elemento) => elemento);
ordenadosPrecio = arrayProductos;
ordenadosPrecio.sort(function (a, b) {
  return b.precio - a.precio;
});

console.log("Ordenados por Precios Descendente");
console.log(ordenadosPrecio);

mostrarValores(ordenadosPrecio);

// renderizarProducto(ordenadosPrecio);
