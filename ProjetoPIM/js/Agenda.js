const modal = document.getElementById("modal");
const fecha = document.getElementById("xis");
const dias = document.getElementById("dia");
const botao1 = document.getElementById("radio1");
const janeiro = document.getElementById("grade");
var seletor = document.getElementById("fonte");
var mes = document.getElementsByClassName("meses");
var manualbtn = document.getElementsByClassName("manualbtn");  
var Grade = document.getElementById("grade");
var cont = 0;


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
    TrocaMes();
    VoltaMes();
    
    
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
    var Mes = manualbtn.id;

    label.forEach((manualbtn) => {
        manualbtn.addEventListener("click", function(event){
            janeiro.style.display = "block";
            document.getElementById("mudarMes").innerHTML = manualbtn.id;
        });
    });
}

// function slide_meses(){
//     var select = document.querySelector('#fonte');
//     optionValue = select.options[select.selectedIndex];

//     let value = optionValue.value;
    
//     switch(value){
//         case 'Janeiro':
//             janeiro.style.display = "block"; 
//             break;
//         case 'mes':
//             janeiro.style.display = "block";
//             break;
//         case 'semana':
//             janeiro.style.display = "block";
//             break; 
//         default:
//             janeiro.style.display = "none";
//     } 

    
// }

function VoltaMes (){
    var LeftArrow = Array.from(document.getElementsByClassName("leftarrow"));

    LeftArrow.forEach((LeftArrow) => {
            LeftArrow.addEventListener("click", function(event){
                LeftArrow = Grade.style.display = "none";
                LeftArrow[cont] = Grade.style.display = "block";
                console.log(cont);
            })
    })
}

function TrocaMes (){
    var RightArrow = Array.from(document.getElementsByClassName("rightarrow"));

        RightArrow.forEach((RightArrow) => {
            RightArrow.addEventListener("click", function(event){
                RightArrow = Grade.style.display = "none";
                RightArrow[cont] = Grade.style.display = "block";
                cont --;
                console.log(cont);
            })
        })
}   
