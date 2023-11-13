document.addEventListener('DOMContentLoaded', function() {
    var registrar = document.getElementById('registrar');
    if (registrar) {
        registrar.addEventListener('click', function() {
            alert('Registrado!');
        });
    }
    const pagarButton = document.getElementById('botaoPagar');
    if (pagarButton) {
        pagarButton.addEventListener('click', function() {
            alert('Registrado!');
        });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const salvarButton = document.getElementById("salvar");
    salvarButton.addEventListener("click", function () {
      const modalMensagem = new bootstrap.Modal(document.getElementById("modalMensagem"), {
        backdrop: "static",
      });
      modalMensagem.show();
    });
  });
