const modal = document.getElementById("modal");
const fecha = document.getElementById("xis");
const dias = document.getElementById("dia");


document.addEventListener("DOMContentLoaded", function(){
    fecha.addEventListener("click", function(event){
        modal.style.display="none";
    });
    window.addEventListener("click", function(event){
        if(event.target == modal){
            modal.style.display="none";
        }
    });

    abrirModal();
});

function abrirModal(){
    var button = Array.from(document.getElementsByClassName("botao"));

    
    button.forEach((botao) => {
        botao.addEventListener("click", function(event){
            modal.style.display = "block";


            var pos = botao.id;
            
            document.getElementById("mudarDia").innerHTML = pos;
        });
        
    });
    
}

// function tabela(){
//     const setaE = document.getElementsByClassName("seta-prox");
//     var Meses = Array.from(document.getElementsByClassName("grade"));

//     setaE.forEach((seta-prox) => {
//         seta-prox.addEventListener("click", function(event){
//             Meses.style.display = "block";
//         });
//     });
// }
