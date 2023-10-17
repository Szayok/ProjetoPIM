const modal = document.getElementById("modal");
const fecha = document.getElementById("xis");

document.addEventListener("DOMContentLoaded", function(){
    fecha.addEventListener("click", function(event){
        modal.style.display="none";
    });
    window.addEventListener("click", function(event){
        if(event.target == modal){
            modal.style.display="none";
        }
    });

    abrirModal;
});

function abrirModal(){
    var button = Array.from(document.getElementsByClassName("botao"));
    
    
    button.forEach((botao) => {
        botao.addEventListener("click", function(event){
            modal.style.display = "block";
        });
    });
    
}