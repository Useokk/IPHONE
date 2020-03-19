const clockContainer = document.querySelector(".main__time");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clockContainer.innerText = `${hours} : ${minutes}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
