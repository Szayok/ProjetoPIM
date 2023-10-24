const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.menu-links');

toggle.addEventListener('mouseover', () => {
  sidebar.classList.remove('close'); // Remove a classe close
});

sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.add('close'); // Adiciona a classe close quando o mouse deixa a sidebar
});

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");

  if (sidebar.classList.contains("close")) {
    content.style.marginLeft = "55px"; 
  } else {
    content.style.marginLeft = "220px"; 
  }
});