const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const dateinNumber = document.querySelector(".dateinnumber");
const day = document.querySelector(".day");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  

function updateClock() {
  const today = new Date();
  hour.innerHTML = today.getHours() + " :";
  minutes.innerHTML = today.getMinutes() + " :";
  const paddedSeconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
  seconds.innerHTML = paddedSeconds;
  month.innerHTML = months[today.getMonth()]
  year.innerHTML = today.getFullYear()
  dateinNumber.innerHTML = today.getDate()
  day.innerHTML = days[today.getDay()]
}

updateClock();

setInterval(updateClock, 1000);

