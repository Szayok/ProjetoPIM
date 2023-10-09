document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const a = document.getElementById("joshua");
    const span = document.getElementById("close");
    
    a.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    span.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});