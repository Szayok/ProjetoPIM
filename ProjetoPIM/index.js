const body = document.querySelector("body");
    sideBar = body.querySelector(".sidebar");
    toggle = body.querySelector(".toggle");
    searchBtn = body.querySelector(".search-box");
    
    toggle.addEventListener("click", ()=>{
        sideBar.classList.toggle("close");
    });

    // calendar
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();
      });