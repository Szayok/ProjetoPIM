let modal = document.getElementById("myModal");
let addCard = document.getElementById("newcard");

document.addEventListener("DOMContentLoaded", function () {
  let openModalBtn = document.getElementById("openModalBtn");
  let addCardBtn = document.getElementById("addCardBtn");


  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == addCard) {
      addCard.style.display = "none";
    }
  });

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  addCardBtn.addEventListener("click", function () {
    addCard.style.display = "block";
  });

  var closeModalBtn = document.getElementById("closemod");
  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

function createSection () {
  //Get Card title and background
  let cardContent = document.getElementById("card-content").value;
  let background = document.getElementById("cardSection");
  
  //Create Card Section
  let br = document.createElement("br");
  let createSection = document.createElement("section");

  //--------------------------

  //Create Card Title
  let createCardContent = document.createElement("div");
  let createCard = document.createElement("div");
  let ulCard = document.createElement("ul");
  let liCard = document.createElement("li");
  let aCard = document.createElement("a");
  
  let dropdown = document.createElement("div");
  let btn = document.createElement("button");
  
  //create card Title content
  let type = document.createElement("type");
  let dbt = document.createElement("data-bs-toggle");
  let aria = document.createElement("aria-expanded");
  
  createCardContent.className = "content";
  createCard.className = "card";

  type.value = "button";
  dbt.value = "dropdown";
  aria.value = "false";

  dropdown.className = "dropdown";
  btn.className = "btn dropdown-toggle";
  btn.appendChild(type);
  btn.appendChild(dbt);
  btn.appendChild(aria);
  btn.innerText = cardContent;
  
  ulCard.className = "dropdown-menu";
  aCard.className = "dropdown-item";
  aCard.id = "addCardBtn";
  aCard.href = "#";

  //Append card Title
  liCard.appendChild(aCard);
  ulCard.appendChild(liCard);
  dropdown.appendChild(btn);
  dropdown.appendChild(ulCard);

  createCard.appendChild(dropdown);
  createCardContent.appendChild(createCard);

  //--------------------------

  //Create Card list
  let createCardList = document.createElement("div");
  let createList = document.createElement("div");
  let ulList = document.createElement("ul");
  let liList = document.createElement("li");
  let aList = document.createElement("a");

  //create card List Content
  createCardList.className = "content";
  createList.className = "card-list";
  
  ulList.className = "list-group list-group-flush";
  liList.className = "list-group-item";
  aList.id = "openModalBtn";
  aList.textContent = "João Haroldo"

  //Append Card List
  liList.appendChild(aList);
  ulList.appendChild(liList);
  createList.appendChild(ulList);
  createCardList.appendChild(createList);

  createSection.appendChild(createCardContent);
  createSection.appendChild(br);
  createSection.appendChild(createCardList);

  background.appendChild(createSection);

  document.getElementById("card-content").value = null;
  addCard.style.display = "none";
}