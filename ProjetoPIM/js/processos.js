
    document.addEventListener("DOMContentLoaded", function () {
      const cardContainer = document.getElementById("card-container");
      const addCardButton = document.getElementById("adicionar");
  
      // Function to create a new card
      function createCard() {
          const card = document.createElement("div");
          card.classList.add("card");
  
          const cardContent = document.createElement("div");
          cardContent.classList.add("card-content");
          cardContent.setAttribute("contenteditable", "true");
          cardContent.textContent = "Click to edit...";
  
          card.appendChild(cardContent);
  
          // Add an event listener to make the card editable
          cardContent.addEventListener("click", function () {
              this.focus();
          });
  
          // Append the card to the container
          cardContainer.appendChild(card);
      }
  
      // Add event listener to the "Add Card" button
      addCardButton.addEventListener("click", createCard);
  });