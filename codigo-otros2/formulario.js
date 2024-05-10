var formulario = document.querySelector(".formulario");

formulario.onsubmit = function(e) {
  e.preventDefault();

  var n = formulario.elements[0];
  var e = formulario.elements[1]; 
  var na = formulario.elements[2]; 

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  if (nombre.length === 0) {
    n.classList.add("error");
  } else {
    n.classList.remove("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  } else {
    e.classList.remove("error");
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};


function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var contenedorInvitado = document.createElement("div");
  contenedorInvitado.classList.add("elemento-lista");
  lista.appendChild(contenedorInvitado);

  crearElemento("Nombre", nombre, contenedorInvitado);
  crearElemento("Edad", edad, contenedorInvitado);
  crearElemento("Nacionalidad", nacionalidad, contenedorInvitado);

  var botonBorrarInvitado = document.createElement("button");
  botonBorrarInvitado.textContent = "Eliminar invitado";
  botonBorrarInvitado.onclick = function() {
    contenedorInvitado.remove();
  };

  contenedorInvitado.appendChild(botonBorrarInvitado);
}

function crearElemento(descripcion, valor, contenedor) {
  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  spanNombre.textContent = descripcion + ": ";
  inputNombre.value = valor;
  contenedor.appendChild(spanNombre);
  contenedor.appendChild(inputNombre);
  contenedor.appendChild(document.createElement("br"));
}

