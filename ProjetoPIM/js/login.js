function registrar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;
  
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
  
    alert("Registro bem sucedido!");

    window.location.href = "login.html"
  }
function login(){
    // var email = document.getElementById("email").value;
    // var senha = document. getElementById("senha").value;

    window.location.href = "index.html"
}


