const modal = document.getElementById("myModal");
const addModal = document.getElementById("addModal");
const table = document.getElementById("table");
let input = document.querySelectorAll("#modalDados input");
var confirmar = document.getElementById("aceitar");

let pos = 0;

document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            confirmar.style.display = "none";

            for (let i = 0; i < input.length; i++) {
                input[i].setAttribute("disabled", "true");
            }
        } else if (event.target == addModal) {
            addModal.style.display = "none";

            document.getElementById("nome").value = null;
            document.getElementById("cpf").value = null;
            document.getElementById("mei").value = null;
            document.getElementById("rua").value = null;
            document.getElementById("numero").value = null;
        }
    });

    if (sessionStorage.length > 1) {
        let empresa = [];
        let c = 1;

        for (let i = 0; i < sessionStorage.length; i++) {
            if (sessionStorage.key(i) == "e" + c) {
                pos++;
                empresa = sessionStorage.getItem("e" + c);

                const stringEmpresa = JSON.parse(empresa);
                console.log(stringEmpresa.nome, i, c);

                criarTabela(stringEmpresa);
                c++;
                i = 0;
            }
        }
    }

    criarModal();
});

function abrirModal() {
    if (input[0].getAttribute("disabled") != null) {
        for (let i = 0; i < input.length; i++) {
            input[i].removeAttribute("disabled");
        }
    }
    addModal.style.display = "block";
}

function armazenar() {
    // session storage
    pos++;

    var empresa = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        mei: document.getElementById("mei").value,
        rua: document.getElementById("rua").value,
        numero: document.getElementById("numero").value
    };

    const stringEmpresa = JSON.stringify(empresa);

    sessionStorage.setItem("e" + pos, stringEmpresa);

    criarTabela(empresa);
}

function criarTabela(empresas) {

    var tr = table.insertRow();
    tr.id = "row " + pos;

    var td = tr.insertCell(0);

    var texto = document.createTextNode(pos);

    td.appendChild(texto);

    // <a href="#" class="openModal" id="pos"><p>nome</p></a>
    td = tr.insertCell(1);

    var link = document.createElement("a");

    texto = document.createTextNode(empresas.nome);

    link.appendChild(texto);
    link.href = "#";
    link.className = "openModal";
    link.id = "e" + pos;

    td.appendChild(link);

    // icone
    td = tr.insertCell(2);

    var button = document.createElement("button");
    var icone = document.createElement("i");

    icone.className = "bi bi-trash";
    button.className = "btn btn-danger";
    button.id = "e" + pos;
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
    var modalID = null;

    open.forEach((openModal) => {
        openModal.addEventListener("click", function () {
            modal.style.display = "block";

            const stringEmpresa = sessionStorage.getItem(openModal.id);

            const empresa = JSON.parse(stringEmpresa);

            document.getElementById("titulo").innerHTML = empresa.nome;
            document.getElementById("mudarNome").value = empresa.nome;
            document.getElementById("mudarCPF").value = empresa.cpf;
            document.getElementById("mudarMei").value = empresa.mei;
            document.getElementById("mudarRua").value = empresa.rua;
            document.getElementById("mudarNumero").value = empresa.numero;
            for (let i = 0; i < input.length; i++) {
                input[i].setAttribute("disabled", "true");
            }

            modalID = openModal.id;
        });
    });

    excluir.forEach(button => {
        button.addEventListener("click", function () {
            button.closest("tr").remove();

            sessionStorage.removeItem(button.id);
        });
    });

    confirmar.addEventListener("click", function() {
        aceitar(modalID);
    });

    span.forEach((fechar) => {
        fechar.addEventListener("click", function () {
            addModal.style.display = "none";
            modal.style.display = "none";
            confirmar.style.display = "none";

            for (let i = 0; i < input.length; i++) {
                input[i].setAttribute("disabled", "true");
            }

            document.getElementById("nome").value = null;
            document.getElementById("cpf").value = null;
            document.getElementById("mei").value = null;
            document.getElementById("rua").value = null;
            document.getElementById("numero").value = null;
        });
    });


}

function busca() {
    let barra = document.getElementById("procura").value;
    barra = barra.toLowerCase();
    var vetor = document.querySelectorAll(".openModal");

    for (let i = 0; i < vetor.length; i++) {
        if (!vetor[i].innerHTML.toLowerCase().includes(barra)) {
            let linha = document.getElementById("row " + (i + 1));
            linha.style.display = "none";
        } else {
            let linha = document.getElementById("row " + (i + 1));
            linha.style.display = "table-row";
        }
    }
}

function editar() {
    for (let i = 0; i < input.length; i++) {
        input[i].removeAttribute("disabled");
    }
    confirmar.style.display = "block";
}

function aceitar(modalID) {

    var empresa = {
        nome: document.getElementById("mudarNome").value,
        cpf: document.getElementById("mudarCPF").value,
        mei: document.getElementById("mudarMei").value,
        rua: document.getElementById("mudarRua").value,
        numero: document.getElementById("mudarNumero").value
    };

    const stringEmpresa = JSON.stringify(empresa);

    sessionStorage.setItem(modalID, stringEmpresa);

    for (let i = 0; i < input.length; i++) {
        input[i].setAttribute("disabled", "true");
    }

    confirmar.style.display = "none";
    location.reload();
}
