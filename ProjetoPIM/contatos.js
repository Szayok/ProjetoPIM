const modal = document.getElementById("myModal");
const addModal = document.getElementById("addModal");
const adicionar = document.getElementById("adicionar");

const span = Array.from(document.getElementsByClassName("close"));

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
    }
  });
});

var pos = 0;

function armazenar() {
  // session storage
  var nome = document.getElementById("nome").value;
  var telefone = document.getElementById("telefone").value;

  const table = document.getElementById("table");

  pos += 1;

  var pessoa = {
    'nome': nome, 'telefone': telefone
  }

  const stringPessoa = JSON.stringify(pessoa);

  sessionStorage.setItem(pos, stringPessoa);

  const tr = table.insertRow();
  var td = tr.insertCell();

  var link = document.createElement("a");
  var texto = document.createTextNode(nome);
  var a = document.createAttribute("id");
  a.value = pos;

  link.appendChild(texto);
  link.href = "#";
  link.className = "openModal";
  link.setAttributeNode(a);
  
  td.appendChild(link);
  criarModal();
}

function criarModal() {

  var open = Array.from(document.getElementsByClassName("openModal"));

  open.forEach((openModal) => {
    openModal.addEventListener("click", function () {
      modal.style.display = "block";

      const stringPessoa = sessionStorage.getItem(openModal.id);

      const pessoa = JSON.parse(stringPessoa);

      document.getElementById("mudarNome").innerHTML = pessoa.nome;
      document.getElementById("mudarTelefone").innerHTML = pessoa.telefone;
    });
  });

  span.forEach((close) => {
    close.addEventListener("click", function () {
      addModal.style.display = "none";
      modal.style.display = "none";
    });
  });
}

function excluir () {
  sessionStorage.clear();
}
