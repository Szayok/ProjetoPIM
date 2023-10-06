document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const addModal = document.getElementById("addModal");
  const adicionar = document.getElementById("adicionar");
  const content = document.getElementById("modalContent");

  const span = Array.from(document.getElementsByClassName("close"));

  var open = Array.from(document.getElementsByClassName("openModal"));

  open.forEach((openModal) => {
    openModal.addEventListener("click", function (event) {
      modal.style.display = "block";
      
      document.getElementById("mudarNome").innerHTML = oi;
    });
  });

  span.forEach((close) => {
    close.addEventListener("click", function () {
      addModal.style.display = "none";
      modal.style.display = "none";
    });
  });

  adicionar.addEventListener("click", function (event) {
    event.preventDefault();
    addModal.style.display = "block";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == addModal) {
      addModal.style.display = "none";
    }
  });
});

function armazenar() {
  // session storage

  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;

  const table = document.getElementById("table");

  localStorage.setItem("nome", nome);
  localStorage.setItem("telefone", telefone);
  const tr = table.insertRow();

  var td = tr.insertCell();
  td.appendChild(document.createTextNode(nome));

  td = tr.insertCell();
  td.appendChild(document.createTextNode(telefone));

  // content change
}
