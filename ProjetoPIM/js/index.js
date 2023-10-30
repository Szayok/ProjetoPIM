 // calendar
  const daysContainer = document.querySelector(".days"),
  nextBtn = document.querySelector(".next-btn"),
  prevBtn = document.querySelector(".prev-btn"),
  month = document.querySelector(".month"),
  todayBtn = document.querySelector(".today-btn");

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

// Pega a data atual
const date = new Date();

// Pega o mês atual
let currentMonth = date.getMonth();

// Pega o ano atual
let currentYear = date.getFullYear();

// função que renderiza os dias
function renderCalendar() {
  // pega o mês passado, o mês atual e o mês seguinte
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  // atualiza o ano e o mês no header
  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  // atualiza os dias no html
  let days = "";

  // dias anteriores html
  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  // Dias do mês atual
  for (let i = 1; i <= lastDayDate; i++) {
    // Checa se é hoje, e
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      // if date month year matches add today
      days += `<div class="day today">${i}</div>`;
    } else {
      //else dont add today
      days += `<div class="day ">${i}</div>`;
    }
  }

  // next MOnth days
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next">${j}</div>`;
  }

  // run this function with every calendar render
  hideTodayBtn();
  daysContainer.innerHTML = days;
}

renderCalendar();

nextBtn.addEventListener("click", () => {
  // increase current month by one
  currentMonth++;
  if (currentMonth > 11) {
    // if month gets greater that 11 make it 0 and increase year by one
    currentMonth = 0;
    currentYear++;
  }
  // rerender calendar
  renderCalendar();
});

// prev monyh btn
prevBtn.addEventListener("click", () => {
  // increase by one
  currentMonth--;
  // check if let than 0 then make it 11 and deacrease year
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

// go to today
todayBtn.addEventListener("click", () => {
  // set month and year to current
  currentMonth = date.getMonth();
  currentYear = date.getFullYear();
  // rerender calendar
  renderCalendar();
});

// lets hide today btn if its already current month and vice versa

function hideTodayBtn() {
  if (
    currentMonth === new Date().getMonth() &&
    currentYear === new Date().getFullYear()
  ) {
    todayBtn.style.display = "none";
  } else {
    todayBtn.style.display = "flex";
  }
}


//Modal
const openModalButton = document.querySelector("#abrir");
const closeModalButton = document.querySelector("#fechar");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const toggleModal = () =>{
  [modal, fade].forEach((el)=> el.classList.toggle("hide"));
};
[openModalButton,closeModalButton, fade].forEach((el) =>{
  el.addEventListener("click", () =>toggleModal());
});
function salvar() {
  var evento = document.getElementById("event").value;
  var data = document.getElementById("data").value;
  var notas = document.getElementById("notes").value;
  var event = document.getElementById("submit").value;


  localStorage.setItem('evento', evento);
  localStorage.setItem('data', data);
  localStorage.setItem('notas', notas);

  console.log(localStorage.getItem('evento'));
  console.log(localStorage.getItem ("data"));
  console.log(localStorage.getItem ("notas"));

  event.addEventListener("submit", (event) => {
    event.preventDefault();

    const eventDate = document.getElementById("eventDate").value;
    const eventDescription = document.getElementById("eventDescription").value;

    
  });

  
}
