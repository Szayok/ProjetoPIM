document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const a = document.getElementById("joshua");
    const span = document.getElementById("close");
    let content = body.querySelector('.content')
    const body = document.querySelector("body");
    sideBar = body.querySelector(".sidebar");
    toggle = body.querySelector(".toggle");
    searchBtn = body.querySelector(".search-box");
    
    toggle.addEventListener("click", ()=>{
        sideBar.classList.toggle("close");
        let arrClasses = [];
        for(let i = 0; i < sideBar.classList.length; i++) {
          arrClasses.push(sideBar.classList[i]);
        }
      
        if (arrClasses.indexOf("close") > -1) {
          content.style["margin-left"] = "85px"
        } else {
          content.style["margin-left"] = "230px"
        }
    });
    
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