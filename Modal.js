const modal = document.getElementById("modal");
const fecha = document.getElementById("xis");
const dias = document.getElementById("dia");
const botao1 = document.getElementById("radio1");
const janeiro = document.getElementById("grade");


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
    slide_meses();

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

function slide_meses(){ 
    var label = Array.from(document.getElementsByClassName("manualbtn"));

    label.forEach((manualbtn) => {
        manualbtn.addEventListener("click", function(event){
            janeiro.style.display = "block";
        });
    });
}
