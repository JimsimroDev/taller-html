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

// funcion para cambiar el theme
const mainSection = document.getElementById('main-section');
const headerSection = document.getElementById('header-section');
const themeSelector = document.getElementById('theme-selector');
const themeSectionOne = document.getElementById('section-one');

themeSelector.addEventListener('click', () => {
  // Cambia entre "light" y "dark" para ambos elementos
  const currentMainTheme = mainSection.dataset.theme;
  const currentHeaderTheme = headerSection.dataset.header;
  const currenSetionOneTheme = themeSectionOne.dataset.section;

  mainSection.dataset.theme = currentMainTheme === "dark" ? "light" : "dark";
  headerSection.dataset.header = currentHeaderTheme === "dark" ? "light" : "dark";
  themeSectionOne.dataset.section = currenSetionOneTheme === "dark" ? "light" : "dark";

});





