import { fadeInFast } from "./modules/fade.js";

import {
  filtroSeleccion,
  tiendaControl,
  botonCart,
  datosClientes,
  botonModal,
  carritoModal,
  botonCerrarModal,
  cantidadCompra,
  divFotos,
  btnEliminar,
  btnComprar,
  botonLoQuiero,
  enviarAlCarrito,
  añadido,
  persistirCarrito,
  leerProductos,
  recordarCarrito,
  filtrar,
  CARRITO,
  sumarCantidad,
  notificar,
  enviarPedido,
  reiniciarCarrito,
} from "./modules/var_carrito.js";

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
  body.style.backgroundColor = "grey";

  // let parrafos = document.querySelector("#parrafos");
  // parrafos.style.color = "white";

  localStorage.setItem("theme", "dark");
}

function lightMode() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "white";

  // let parrafos = document.querySelector("#parrafos");
  // parrafos.style.color = "black";
  localStorage.setItem("theme", "light");
}

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("theme") == "dark") {
    darkMode();
  } else {
    lightMode();
  }
});

(window.onload = persistirCarrito()), leerProductos();
window.onload = setTimeout(recordarCarrito, 1000);

datosClientes.addEventListener("submit", enviarAlCarrito, añadido);
filtroSeleccion.onchange = () => {
  filtrar();
};

botonModal.onclick = () => {
  carritoModal.style.display = "block";
};
botonCart.onclick = () => {
  carritoModal.style.display = "block";
};
botonCerrarModal.onclick = () => {
  carritoModal.style.display = "none";
};

btnEliminar.onclick = () => {
  divFotos.removeChild(divFotos.lastChild);
  CARRITO.pop();
  sumarCantidad(CARRITO);
  localStorage.setItem("carrito-img", divFotos.innerHTML);
  localStorage.setItem("carrito", JSON.stringify(CARRITO));
  cantidadCompra.textContent === "0" && localStorage.removeItem("carrito");
};
btnComprar.onclick = () => {
  let precioTotal = 0;
  CARRITO.forEach(function (pd) {
    precioTotal += pd.precio * parseInt(pd.cantidad);
  });
  swal({
    text: `El precio total de tu compra es $${precioTotal}, ¿querés continuar?`,
    buttons: ["Cancelar", "OK"],
  }).then((conf) => {
    if (conf) {
      notificar();
      enviarPedido();
      reiniciarCarrito();
    } else {
      console.log("pedido cancelado");
      reiniciarCarrito();
    }
  });
};

// NO ME FUNCIONA
botonLoQuiero.onclick = () => {
  // tiendaControl.style.display !== "grid" && fadeInFast(tiendaControl);
  // tiendaControl.style.display = "grid";

  tiendaControl.style.display !== "grid" && fadeInFast(tiendaControl);
  tiendaControl.style.display = "grid";
};


