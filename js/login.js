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

  let htmlCode = "";
  const container = document.querySelector(".container-father-error");

  if (name.value.length < 6) {
    let htmlCode = 
      `<div class="container-error">
        <p>El usuario debe tener al menos seis carácteres</p>
      </div>`; 
    container.innerHTML = htmlCode;  
  }

  else if (password.value.length < 5) {
    htmlCode = 
      `<div class="container-error">
        <p>La contraseña debe tener al menos cinco carácteres</p>
      </div>`; 
    container.innerHTML = htmlCode;       
  } 

  else if (isMayus(password.value) === undefined) {
    htmlCode = 
      `<div class="container-error">
        <p>La contraseña debe tener al menos un carácter en mayúscula</p>
      </div>`; 
    container.innerHTML = htmlCode;           
  }

  else if (isNumber(password.value) === undefined) {
    htmlCode = 
      `<div class="container-error">
        <p>La contraseña debe tener al menos un número</p>
      </div>`; 
    container.innerHTML = htmlCode;                 
  }

  else {
    document.querySelector(".container-father-error").innerHTML = "";
    Swal.fire({
      icon: "success",
      title: "¡Success!",
    });

    const buttonAlert = document.querySelector(".swal2-confirm");
    buttonAlert.addEventListener("click", () => {
      window.location.pathname = "/index.html";
    });
  }
}

// Se encarga de validar si en la clave hay una letra en mayúscula
function isMayus(caracter) {
  for (const letter of caracter) {
    if(letter === letter.toUpperCase() && !Number(letter)) return true
  }  
}


// Se encarga de determinar si en la clave hay números
function isNumber(caracter) {
  for (var i = 0; i < caracter.length; i++) {
    let element = caracter[i];
    if (Number(element) || element == 0) {
      console.log(element)
      return true;
    }
  }
}




