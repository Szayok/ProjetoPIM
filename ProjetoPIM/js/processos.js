const body = document.querySelector("body");
sideBar = body.querySelector(".sidebar");
toggle = body.querySelector(".toggle");
searchBtn = body.querySelector(".search-box");
let content = body.querySelector('.content')

toggle.addEventListener("click", () => {
  sideBar.classList.toggle("close");
  let arrClasses = [];
  for (let i = 0; i < sideBar.classList.length; i++) {
    arrClasses.push(sideBar.classList[i]);
  }

  if (arrClasses.indexOf("close") > -1) {
    content.style["margin-left"] = "70px"
  } else {
    content.style["margin-left"] = "220px"
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var openModalBtn = document.getElementById("openModalBtn");
  var modal = document.getElementById("myModal");

  openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
  });

  var closeModalBtn = document.getElementById("closemod");
  closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });
});
