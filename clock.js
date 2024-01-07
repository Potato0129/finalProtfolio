const clock = document.querySelector("#clock");
const nowDate = document.querySelector("#now-date");

function getClock() {
  const date = new Date();
  const year = String(date.getFullYear()).padStart(2,"0");
  const month = String(date.getMonth()+1).padStart(2,"0");
  const nowsDate = String(date.getDate()).padStart(2,"0");
  const hour = String(date.getHours()).padStart(2,"0");
  const min = String(date.getMinutes()).padStart(2,"0");
  nowDate.innerText = `${year}. ${month}. ${nowsDate}.`
  clock.innerText = `${hour}:${min}`;
}
getClock();
setInterval(getClock, 1000);