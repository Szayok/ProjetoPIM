// function redireciona_reg() {
//     window.location.href = "registro.html";
// }
// function register() {
//     var mensagemErro = document.getElementById("mensagem-erro");
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var nome = document.getElementById("name").value;


//     if (email.trim() == "" || password.trim() == "" || nome.trim() == "") {
//         //caso deixem em branco
//         document.getElementById("name").style.borderColor = "red";
//         document.getElementById("password").style.borderColor = "red";
//         document.getElementById("email").style.borderColor = "red";
//         mensagemErro.textContent = "Preencha os campos.";
//     } else {
//         alert("Registro bem-sucedido! Redirecionando para a página de login.");
//         window.location.href = "index.html";
//         //salva os dados
//         localStorage.setItem("emailRegistrado", email);
//         localStorage.setItem("senhaRegistrada", password);
//     }
// }
function login() {
    var loginEle = document.getElementById("email").value;
    var passEle = document.getElementById("password").value;
    var mensagemErro = document.getElementById("mensagem-erro");
    document.getElementById("login").style.background = "rgb(255, 255, 255)";
    setTimeout(() => { document.getElementById("login").style.background = "rgb(235, 28, 28)"; }, 100);

    if (passEle.trim() == "" || loginEle.trim() == "") {
        //caso deixem em branco
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("email").style.borderColor = "red";
        mensagemErro.textContent = "Preencha os campos.";
    } else {
        // retira do local storage
        var emailRegistrado = "kaue@gmail.com";
        var senhaRegistrada = 123;
        // var emailRegistrado = localStorage.getItem("emailRegistrado");
        // var senhaRegistrada = localStorage.getItem("senhaRegistrada");

        if (loginEle === emailRegistrado && passEle === senhaRegistrada) {
            // volta ao menu
            window.location.href = "/pages/sign_up.html";
        } else {
            // Credenciais inválidas
            mensagemErro.textContent = "Credenciais inválidas.";
        }
    }
}

