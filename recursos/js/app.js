console.log("el archivo de js se cargo");
// Obtener el modal
var modal = document.getElementById("contactModal");

// Obtener el botón que abre el modal
var btn = document.querySelector(".open-modal-btn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementById("closeModal");


// Cuando el usuario hace clic en el botón, abre el modal
btn.onclick = function () {
  modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function () {
  modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, cierra el modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

