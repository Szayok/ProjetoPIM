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
    content.style["margin-left"] = "50px"
  } else {
    content.style["margin-left"] = "230px"
  }
});
