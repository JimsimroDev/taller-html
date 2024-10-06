// Declaración de variables
let name = "Jimmis Jhoan";
let surname = " Simanca Rojas";
const age = 29;
var esEstudiante = true;

// Operacines con variables
var numero = 45;
var numero1 = 25;
console.log(numero + numero1);

var saludo = "Hola,  ";
var nombre = "Jimmis"
console.log(saludo + nombre);

//Manipulación Básica del DOM
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById('miBoton');
  const parrafo = document.getElementById('miParrafo');

  // Variable para rastrear el estado del texto
  let textoCambiado = false;


  boton.addEventListener("click", function () {
    if (textoCambiado) {
      parrafo.innerText = "Esta pagin solo es una muestra de como se usa html5 y css y un poco de Lenguaje js";
    } else {
      parrafo.innerText = "Hola, soy el texto cambiado por el botón mágico";
      parrafo.style.color = "#82D2CF"; // Color cambiado
    }
    textoCambiado = !textoCambiado; // Alternar el estado
  });
});

//Captura de eventos y Validacion de password
document.getElementById('formulario').addEventListener('submit', function (event) {
  var password = document.getElementById("password").value;
  var password1 = document.getElementById("password1").value;
  var errorMessage = document.getElementById("error-message");
  var contactModal = document.getElementById("contactModal");
  // Selecionar el modal y el mensaje
  var modal = document.getElementById('myModal');
  var modalMessage = document.getElementById('modal-message');

  if (password === password1) {
    modalMessage.textContent = "El formulario se envio con exito";
    errorMessage.style.display = "none";
    // Mostrar el modal
    modal.style.display = "block";

    // Cierra el modal después de un breve retraso
    setTimeout(function () {
      modal.style.display = "none"; // Cierra el modal
      document.getElementById('formulario').reset(); // Opcional: reinicia el formulario
    }, 2000); // Cierra el modal después de 1 segundo

  } else {
    errorMessage.textContent = "Las contraseñas no coinciden";
    errorMessage.style.display = "block";

  }
  event.preventDefault(); // evita el envio del formulario
});


// Cierra el modal cuando se hace clic en la "x"
document.querySelector('.cerrar').onclick = function () {
  document.getElementById("myModal").style.display = "none";
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
