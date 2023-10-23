const modal = document.getElementById("myModal");
const addModal = document.getElementById("addModal");
const adicionar = document.getElementById("canto");
const excluir = document.getElementById("excluir")

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

  if (sessionStorage.length != 0) {
    pos = sessionStorage.length-1;
    var pessoa = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      if (i > 0) {
        pessoa = sessionStorage.getItem(i);

        const stringPessoa = JSON.parse(pessoa);

        criarTabela(stringPessoa);
      }
    }
  }
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

  criarTabela(pessoa);

  const stringPessoa = JSON.stringify(pessoa);

  sessionStorage.setItem(pos, stringPessoa);

}

function criarTabela(pessoas) {

  var tr = table.insertRow();
  tr.id = "row " + pos;

  var td = tr.insertCell(0);

  var link = document.createElement("a");

  var texto = document.createTextNode(pessoas.nome);

  // <a href="#" class="openModal" id="pos"><p>nome</p></a>
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
  // var open = Array.from(document.getElementsByClassName("openModal"));
  const span = Array.from(document.getElementsByClassName("fechar"));

  var open = document.getElementById("openModal");

  opener.addEventListener("click", function(){
    modal.style.display="block";
  });

  // open.forEach((openModal) => {
  //   openModal.addEventListener("click", function () {
  //     modal.style.display = "block";

  //     const stringPessoa = sessionStorage.getItem(openModal.id);

  //     const pessoa = JSON.parse(stringPessoa);

  //     // document.getElementById("mudarNome").value
  //     document.getElementById("mudarNome").innerHTML = pessoa.nome;
  //     document.getElementById("mudarTelefone").innerHTML = pessoa.telefone;
  //   });

  //   excluir.addEventListener("click", function () {
  //     document.getElementById("row " + openModal.id).remove();

  //     modal.style.display = "none";

  //     sessionStorage.clear();
  //   });
  // });

  span.forEach((close) => {
    close.addEventListener("click", function () {
      addModal.style.display = "none";
      modal.style.display = "none";

      document.getElementById("nome").value = null;
      document.getElementById("telefone").value = null;
    });
  });
}

function busca(){
  let barra = document.getElementById("procura").value;
  barra = barra.toLowerCase();
  var vetor = document.getElementsByClassName("openModal");

  for (let i = 0; i < vetor.length; i++) {
    if (!vetor[i].innerHTML.toLowerCase().includes(barra)) {
      const linha = document.getElementById("row " + (i+1));
      linha.style.display = "none";
    } else {
      const linha = document.getElementById("row " + (i+1));
      linha.style.display = "block";
    }
  }
}
