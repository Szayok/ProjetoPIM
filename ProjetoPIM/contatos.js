const modal = document.getElementById("myModal");
const addModal = document.getElementById("addModal");
const adicionar = document.getElementById("adicionar");
const excluir = document.getElementById("excluir");

document.addEventListener("DOMContentLoaded", function () {
  adicionar.addEventListener("click", function (event) {
    event.preventDefault();
    addModal.style.display = "block";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == addModal) {
      addModal.style.display = "none";

      document.getElementById("nome").value = null;
      document.getElementById("telefone").value = null;
    }
  });
});

var pos = 0;
const table = document.getElementById("table");

function armazenar() {
  // session storage
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;

  pos += 1;

  var pessoa = {
    nome: nome,
    telefone: telefone,
  };

  const stringPessoa = JSON.stringify(pessoa);

  sessionStorage.setItem(pos, stringPessoa);

  var tr = table.insertRow();
  tr.id = "row " + pos;

  var td = tr.insertCell(0);

  var link = document.createElement("a");

  var texto = document.createTextNode(nome);
  link.appendChild(texto);
  link.href = "#";
  link.className = "openModal";
  link.id = pos;

  td.appendChild(link);
  criarModal();

  addModal.style.display = "none";
  modal.style.display = "none";
}

function criarModal() {
  var open = Array.from(document.getElementsByClassName("openModal"));
  const span = Array.from(document.getElementsByClassName("fechar"));

  open.forEach((openModal) => {
    openModal.addEventListener("click", function () {
      modal.style.display = "block";

      const stringPessoa = sessionStorage.getItem(openModal.id);

      const pessoa = JSON.parse(stringPessoa);

      document.getElementById("mudarNome").innerHTML = pessoa.nome;
      document.getElementById("mudarTelefone").innerHTML = pessoa.telefone;
    });

    excluir.addEventListener("click", function () {
      document.getElementById("row " + openModal.id).remove();

      modal.style.display = "none";

      sessionStorage.clear();
    });
  });

  span.forEach((close) => {
    close.addEventListener("click", function () {
      addModal.style.display = "none";
      modal.style.display = "none";

      document.getElementById("nome").value = null;
      document.getElementById("telefone").value = null;
    });
  });
}
