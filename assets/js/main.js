let producto = "";
let precio = 0;
let cantidad = 0;
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = false;
let talle = "";

// matriz de talles y precio

// Talles
// 	i/j	Remera/Chomba/Camisa
//  XS  99
// 	S	100
// 	M	101
// 	L	103
// 	XL	114
//  XXL 118

// matriz de talles x precio

let mTalles = [
  ["XS", "S", "M", "L", "XL", "XXL"],
  [100, 101, 102, 103, 104, 105],
];

// calcularIva al producto seleccionado
function calcularIva(precio) {
  return precio * 0.21;
}

// sumar el Iva + el precio del producto
function sumarIva(precio) {
  return precio + calcularIva(precio);
}

function pedirTalle(talle) {
  talle = prompt("Que talle sos? A) XS B) S C) M D) L E) XL F) XXL");
  precio = obtenerPrecio(talle);
  //   alert(precio);

  return precio;
}

function obtenerPrecio(talle) {
  //    recorre el vector de talles , si el talle ingresado por teclado es igual al indice del vector
  for (let i = 0; i < mTalles.length; i++) {
    for (let j = 0; j < mTalles[i].length; j++) {
      //   console.log(parseInt(mTalles[i][j]));
      const element = mTalles[i][j];

      //   alert(element);
      // si el talle ingresado por teclado es igual a lo que esta dentro del vector de talles asigna el precio sobre la fila posterior
      if (talle === element) {
        precio = mTalles[i + 1][j];
        break;
      }
    }
    return precio;
  }
}

do {
  producto = prompt(
    "¿Queres comprar algun producto A) Remera B) Camisa C) Chomba D) NO?"
  );

  cantidad = Number(prompt("¿Cuantos queres comprar?"));

  switch (producto) {
    case "A":
    case "B":
    case "C":
      precio = pedirTalle(talle);
      break;
    case "D":
      alert("Lamentamos que no quiera comprar");
      finalizarCompra: false;

      break;
    default:
      alert("Algunos de los datos ingresados no son correctos");
      precio = 0;
      cantidad = 0;

      break;
  }

  cantidadTotal += cantidad;
  precioTotal += precio * cantidad;
  seguirComprando = confirm("¿Queres seguir comprando?");
} while (seguirComprando);

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
