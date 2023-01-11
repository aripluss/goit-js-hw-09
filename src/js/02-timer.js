import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// const inputEl = document.querySelector('input#datetime-picker');
const startButtonEl = document.querySelector('[data-start]');
const daysSpanEl = document.querySelector('[data-days]');
const hoursSpanEl = document.querySelector('[data-hours]');
const minutesSpanEl = document.querySelector('[data-minutes]');
const secondsSpanEl = document.querySelector('[data-seconds]');

let selectedTime = null;
startButtonEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedTime = selectedDates[0].getTime();

    Notiflix.Notify.init({ clickToClose: true });

    if (selectedTime < options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('Success');
      startButtonEl.disabled = false;
      startButtonEl.addEventListener('click', onStartButtonElClick);
    }
  },
};

flatpickr('#datetime-picker', options);

function onStartButtonElClick() {
  startButtonEl.disabled = true;
  const timerId = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeDifference = selectedTime - currentTime;
    const convertedTime = convertMs(timeDifference);
    const { days, hours, minutes, seconds } = convertedTime;

    daysSpanEl.innerHTML = addLeadingZero(days);
    hoursSpanEl.innerHTML = addLeadingZero(hours);
    minutesSpanEl.innerHTML = addLeadingZero(minutes);
    secondsSpanEl.innerHTML = addLeadingZero(seconds);

    // const newTimerId = setTimeout(() => {
    //   secondsSpanEl.style.fontSize = '50px';
    // }, 1);

    // secondsSpanEl.style.fontSize = '55px';

    if (timeDifference < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
