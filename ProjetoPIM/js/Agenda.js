var button = document.getElementsByClassName("botao");
const dias = document.getElementById("dia"); 
var Grade = document.getElementById("grade");
var cont = 0;
var data = new Date();
let Ano = data.getFullYear()
var Mes = data.getMonth()
var Dia = 0;
var RightArrow = document.getElementById("ra");
var LeftArrow = document.getElementById("la");
var Grid = document.querySelector(".wrapper");

document.addEventListener("DOMContentLoaded", function(){
    // fecha.addEventListener("click", function(event){    
    //     modal.style.display="none";
    // });
    window.addEventListener("click", function(event){
        if(event.target == modal){
            modal.style.display="none";
        }
    });
   
    TrocaMes(Mes);
    RightArrow.addEventListener("click", function(event){
        Mes++;
        if (Mes == 12) {
            Ano++;
            Mes = 0;
        }
        console.log(Mes);
        TrocaMes(Mes);
    });
    
    LeftArrow.addEventListener("click", function(event){
        Mes--;
        if (Mes < 0) {
            Ano--;
            Mes = 11;
        }
        TrocaMes(Mes);
    });

    
});

function TrocaMes (){
    var mes = document.getElementById("texto");
    var ano = data.getFullYear();
    var i = 1;
        switch (Mes){
            case 0:
                Dia = 30;
                ImprimeDia(Dia);
                mes.textContent = "Janeiro";
                break;
            case 1: 
                if (Ano % 4 != 0) {
                    Dia = 27;
                } else if (Ano % 100 != 0) {
                    Dia = 28;
                } else if (Ano % 400 == 0) {
                    Dia = 28;
                } else {
                    Dia = 27;
                }
                ImprimeDia(Dia);
                mes.textContent = "Fevereiro";
                break;
            case 2: 
                Dia = 30;
                ImprimeDia(Dia);
                mes.textContent = "Março";
                break;
            case 3: 
                Dia = 29;
                ImprimeDia(Dia);
                mes.textContent = "Abril";
                break;
            case 4: 
                Dia = 30;
                ImprimeDia(Dia);
                mes.textContent = "Maio";
                break;
            case 5: 
                Dia = 29;
                ImprimeDia(Dia);
                mes.textContent = "Junho";
                break;
            case 6: 
                Dia = 30;
                ImprimeDia(Dia);
                mes.textContent = "Julho";
                break;
            case 7: 
                Dia = 30;
                ImprimeDia(Dia);
                mes.textContent = "Agosto";
                break;
            case 8: 
                Dia = 29;
                ImprimeDia(Dia);
                mes.textContent = "Setembro";
                break;
            case 9: 
                Dia = 30;
                ImprimeDia(Dia);
                mes.textContent = "Outubro";
                break;
            case 10: 
                Dia = 29;
                ImprimeDia(Dia);
                mes.textContent = "Novembro";
                break;
            case 11:
                Dia = 30;
                ImprimeDia(Dia);
                mes.textContent = "Dezembro";
                break;       
        }
}   
                            
function ImprimeDia (Dia, n_mes){
    Grid.innerHTML = null;
    Dia++;
    Mes++;
    for (var a = 1; a <= Dia; a++){
        let id = a+"/"+Mes+"/"+Ano;
        var criaBotao = `
        <button class="botao" id="${id}">${a}</button>
        `;
        Grid.innerHTML += criaBotao;
    }; 
    Mes--;
}