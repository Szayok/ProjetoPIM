let modal = document.getElementById("myModal");
let addCard = document.getElementById("newcard");
let closeModalBtn = document.querySelectorAll(".fechar");

let pos = 0;

document.addEventListener("DOMContentLoaded", function () {
  let openModalBtn = document.getElementById("openModalBtn");
  let addCardBtn = document.getElementById("addCardBtn");

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == addCard) {
      addCard.style.display = "none";
    }
  });

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  addCardBtn.addEventListener("click", function () {
    addCard.style.display = "block";
  });

  closeModalBtn.forEach(closemod => {
    closemod.addEventListener("click", function () {
      modal.style.display = "none";
      addCard.style.display = "none";
    });

  });

  if (sessionStorage.length > 1) {
    let pessoa = [];
    let c = 1;

    for (let i = 0; i < sessionStorage.length; i++) {
      if (sessionStorage.key(i) == "p" + c) {
        pos++;
        pessoa = sessionStorage.getItem("p" + c);

        const stringPessoa = JSON.parse(pessoa);

        mudarPessoa(stringPessoa);
        c++;
      }
    }
  }
});

function createSection() {
  //Get Card title and background
  let cardContent = document.getElementById("card-content").value;
  let background = document.getElementById("cardSection");

  var section = `
  <div class="cardSection" id="cardSection">
    <section>
      <div class="content">
        <div class="card">
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              ${cardContent}
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" id="addCardBtn" href="#">Adicionar</a></li>
              <li><a class="dropdown-item" href="#">Editar</a></li>
              <li><a class="dropdown-item" href="#">Excluir</a></li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <div class="content">
        <div class="card-list">
          <ul class="list-group list-group-flush" id="lista"></ul>
        </div>
      </div>
    </section>
  </div>
  `;
  background.innerHTML += section;

  document.getElementById("card-content").value = null;
  addCard.style.display = "none";
}

function mudarPessoa(pessoa) {
  document.querySelector("#p1 a").textContent = pessoa.nome;
  document.getElementById("titulo").textContent = pessoa.nome;
  document.getElementById("mudarNome").value = pessoa.nome;
  document.getElementById("mudarCPF").value = pessoa.cpf;
  document.getElementById("mudarData").value = pessoa.data;
  document.getElementById("mudarRua").value = pessoa.rua;
  document.getElementById("mudarNumero").value = pessoa.numero;
}