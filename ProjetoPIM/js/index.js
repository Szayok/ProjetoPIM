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
  date.setDate(1);
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const lastDayIndex = lastDay.getDay();
  const lastDayDate = lastDay.getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0);
  const prevLastDayDate = prevLastDay.getDate();
  const nextDays = 7 - lastDayIndex - 1;

  month.innerHTML = `${months[currentMonth]} ${currentYear}`;

  let daysHTML = "";

  // Dias anteriores
  for (let x = firstDay.getDay(); x > 0; x--) {
    const dayId = `${prevLastDayDate - x + 1}-${currentMonth + 1}-${currentYear}`;
    daysHTML += `<div class="day prev" id="${dayId}">${prevLastDayDate - x + 1}</div>`;
  }

  // Dias do mês atual
  for (let i = 1; i <= lastDayDate; i++) {
    const dayId = `${i}-${currentMonth + 1}-${currentYear}`;
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      daysHTML += `<div class="day today" onclick="toggleModal(event)" id="${dayId}">${i}</div>`;
    } else {
      daysHTML += `<div class="day" onclick="toggleModal(event)" id="${dayId}">${i}</div>`;
    }
  }

  // Próximo mês
  for (let j = 1; j <= nextDays; j++) {
    const dayId = `${j}-${currentMonth + 2}-${currentYear}`;
    daysHTML += `<div class="day next" id="${dayId}">${j}</div>`;
  }

  hideTodayBtn();
  daysContainer.innerHTML = daysHTML;
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

function toggleModal(event) {
  const dayId = event.target.id;
  const modal = document.getElementById('modal');
  const fade = document.querySelector("#fade");
  const modalTitle = document.getElementById("modal_title");
  const eventLabel = document.getElementById("event");
  const dateLabel = document.getElementById("data");
  const notesLabel = document.getElementById("notas");
  
  
  const savedEvent = localStorage.getItem("evento_${dayId}");
  const savedDate = localStorage.getItem("data_${dayId}");
  const savedNotes = localStorage.getItem("notas_${dayId}");
  
  modalTitle.innerText = `Compromisso do dia ${dayId} :`;
  eventLabel.innerText = `Evento: ${savedEvent || 'N/A'}`;
  dateLabel.innerText = `Data: ${savedDate || 'N/A'}`;
  notesLabel.innerText = `Anotações: ${savedNotes || 'N/A'}`;
  
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
  
}
function fecharModal(){
  const modal = document.getElementById("modal");
  modal.classList.add("hide");
  fade.classList.add("hide");
}

//Modal
// const modal = document.querySelector("#modal");
// const toggleModal = () => {
//   [modal, fade].forEach((el) => el.classList.toggle("hide"));
// };
// [closeModalButton, fade].forEach((el) => {
//   el.addEventListener("click", () => toggleModal());
// });


// function salvar() {
//   var evento = localStorage.setItem('evento', evento);
//   var data =  localStorage.setItem('data', data);
//   var notas = localStorage.setItem('notas', notas);

//     toggleModal();


// }
// function exibe_evento() {
//   let savedEvent = localStorage.getItem("evento");
//   let savedDate = localStorage.getItem("data");
//   let savedNotes = localStorage.getItem("notas");
//   const closeModalButton = document.querySelector("#fechar");
//   const modal = document.querySelector("#modal");
//   const fade = document.querySelector("#fade");
//   const toggleModal = () => {
//     [modal, fade].forEach((el) => el.classList.toggle("hide"));
//   };
//   [closeModalButton, fade].forEach((el) => {
//     el.addEventListener("click", () => toggleModal());
//   });
  
//   document.getElementById("event").innerHTML = "Sem Compromissos para hoje!";
//   if (savedEvent == undefined) {
//     console.log(savedEvent);
//   } else {
//     document.getElementById("event").innerHTML = "Evento: " + savedEvent;
//     document.getElementById("data").innerHTML = "Data: " + savedDate;
//     document.getElementById("notas").innerHTML = "Anotações: " + savedNotes;
//   }
// };
