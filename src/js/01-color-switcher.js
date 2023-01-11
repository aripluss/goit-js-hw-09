const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');

stopButtonEl.disabled = true;

startButtonEl.addEventListener('click', onStartButtonClick);
stopButtonEl.addEventListener('click', onStopButtonClick);

let changeBgrColorTimerId = null;

function onStartButtonClick() {
  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
  document.body.style.backgroundColor = getRandomHexColor();
  changeBgrColorTimerId = setInterval(changeBackgroundColor, 1000);
}

function onStopButtonClick() {
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
  clearInterval(changeBgrColorTimerId);
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
