// Variables globales
const name = document.querySelector("#admin");
const password = document.querySelector("#password");
const container = document.querySelector(".container");
const btnLogin = document.querySelector("#iniciar");

// Evento que escucha todo el DOM, luego que se cargue, ejecuta la función "action"
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", action);
});

// Función que se ejecuta después que hagamos click en el btn del formulario
function action(event) {
  event.preventDefault();
  if (name.value.length < 5 || password.value.length < 5 || isMayus(password.value[0]) === false || isNumber(password.value) === undefined) { 
    const htmlCode = 
      `<div class="container-error">
        <p>Ingrese correctamente su contraseña o usuario</p>
      </div>`; 
      document.querySelector(".container-father-error").innerHTML = htmlCode;
  } else {
    document.querySelector(".container-father-error").innerHTML = "";
    Swal.fire({
      icon: "success",
      title: "¡Success!",
    });
  }
}

// Se encarga de validar si en la clave hay una letra en mayúscula
function isMayus(caracter) {
  return caracter === caracter.toUpperCase();
}

// Se encarga de determinar si en la clave hay números
function isNumber(caracter) {
  for (var i = 0; i < caracter.length; i++) {
    let element = caracter[i];
    if (Number(element)) {
      return true;
    }
  }
}




