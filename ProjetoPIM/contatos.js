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

function armazenar (){

    // session storage
    
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    const table = document.getElementById("table");
        sessionStorage.setItem("nome", nome);
        sessionStorage.setItem("telefone", telefone);
        
        const tr = table.insertRow();
        
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(nome));
        
        td = tr.insertCell();
        td.appendChild(document.createTextNode(telefone));
    
    // content change
    
}
    
