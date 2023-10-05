document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const a = document.getElementById("joshua");
    const addModal = document.getElementById("addModal");
    const adicionar = document.getElementById("adicionar");

    const span = Array.from(document.getElementsByClassName("close"));

    span.forEach(close => {
        close.addEventListener("click", function() {
            addModal.style.display = "none";
            modal.style.display = "none";
        });
    });

    adicionar.addEventListener("click", function(event) {
        event.preventDefault();
        addModal.style.display = "block";
    });

    a.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        } else if (event.target == addModal) {
            addModal.style.display = "none";
        }
    });
});

// session storage

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;

sessionStorage.setItem("nome", nome);
sessionStorage.setItem("email", email);
sessionStorage.setItem("telefone", telefone);

// content change

