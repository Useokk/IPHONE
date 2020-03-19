const doo = document.querySelector(".main__date");

function getDater() {
  const week = new Array("일", "월", "화", "수", "목", "금", "토");
  const date = new Date();
  const month = date.getMonth() + 1;
  const dayName = week[date.getDay()];
  const day = date.getDate();
  doo.innerText = `${month}월 ${day}일 ${dayName}요일`;
}

function init() {
  getDater();
  setInterval(getDater, 1000);
}

init();
