// Obtém o botão de abrir o modal
var openModalBtn = document.getElementById("openModalBtn");

// Obtém o modal
var modal = document.getElementById("modal");

// Obtém o elemento <span> que fecha o modal
var closeBtn = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
