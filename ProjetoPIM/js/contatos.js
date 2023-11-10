const modal = document.getElementById("myModal");
const addModal = document.getElementById("addModal");
const table = document.getElementById("table");

let pos = 0;

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
    }
  });

  if (sessionStorage.length > 1) {
    let pessoa = [];
    let c = 1;

    for (let i = 0; i < sessionStorage.length; i++) {
      if (sessionStorage.key(i) == "p"+c) {
        pos++;
        pessoa = sessionStorage.getItem("p"+c);
        
        const stringPessoa = JSON.parse(pessoa);
        console.log(stringPessoa.nome);
        
        criarTabela(stringPessoa);
        c++;
      }
    }
  }
});

function armazenar() {
  // session storage
  pos++;

  var pessoa = {
    nome: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    data: document.getElementById("data").value,
    rua: document.getElementById("rua").value,
    numero: document.getElementById("numero").value
  };

  criarTabela(pessoa);

  const stringPessoa = JSON.stringify(pessoa);

  sessionStorage.setItem("p"+pos, stringPessoa);

}

function criarTabela(pessoas) {

  var tr = table.insertRow();
  tr.id = "row " + pos;

  var td = tr.insertCell(0);

  var texto = document.createTextNode(pos);

  td.appendChild(texto);

  // <a href="#" class="openModal" id="pos"><p>nome</p></a>
  td = tr.insertCell(1);

  var link = document.createElement("a");

  texto = document.createTextNode(pessoas.nome);

  console.log(pos);

  link.appendChild(texto);
  link.href = "#";
  link.className = "openModal";
  link.id = "p"+pos;

  td.appendChild(link);

  // icone
  td = tr.insertCell(2);

  var button = document.createElement("button");
  var icone = document.createElement("i");

  icone.className = "bi bi-trash";
  button.className = "btn btn-danger";
  button.appendChild(icone);

  td.appendChild(button);

  criarModal();

  addModal.style.display = "none";
  modal.style.display = "none";
}

function criarModal() {
  var open = Array.from(document.getElementsByClassName("openModal"));
  var span = document.querySelectorAll(".fechar");
  var excluir = document.querySelectorAll(".btn-danger");

  open.forEach((openModal) => {
    openModal.addEventListener("click", function () {
      modal.style.display = "block";

      const stringPessoa = sessionStorage.getItem(openModal.id);

      const pessoa = JSON.parse(stringPessoa);

      document.getElementById("titulo").innerHTML = pessoa.nome;
      document.getElementById("mudarNome").value = pessoa.nome;
      document.getElementById("mudarCPF").value = pessoa.cpf;
      document.getElementById("mudarData").value = pessoa.data;
      document.getElementById("mudarRua").value = pessoa.rua;
      document.getElementById("mudarNumero").value = pessoa.numero;
    });
  });

  excluir.forEach(button => {
    button.addEventListener("click", function () {
      button.closest("tr").remove();

      sessionStorage.clear();
    });
  });

  span.forEach((fechar) => {
    fechar.addEventListener("click", function () {
      addModal.style.display = "none";
      modal.style.display = "none";

      document.getElementById("nome").value = null;
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
      linha.style.display = "table-block";
    }
  }
}
