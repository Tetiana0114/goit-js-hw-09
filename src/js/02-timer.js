import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  inputEl: document.querySelector("input#datetime-picker"),
  startBtn: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('.value[data-days]'),
  hoursEl: document.querySelector('.value[data-hours]'),
  minutesEl: document.querySelector('.value[data-minutes]'),
  secondsEl: document.querySelector('.value[data-seconds]'),
};

refs.startBtn.disabled = true;
refs.startBtn.addEventListener("click", startTimer);

const DELAY = 1000;
let selectedDate = null;
let deltaTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      refs.startBtn.disabled = true;
      Notify.failure('Please, choose a date in the future!!!');
      // alert('Please, choose a date in the future!!!');
    } else {
      refs.startBtn.disabled = false;
      selectedDate = selectedDates[0];
      Notify.success('Timer is ready to start!');
      // alert('Timer is ready to start!')
    }
    console.log(selectedDates[0]);
  },
};
flatpickr(refs.inputEl, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

function startTimer() {
  const timer = setInterval(() => {
    const currentTime = Date.now();
    deltaTime = selectedDate - currentTime;
    updateTimerInterface(convertMs(deltaTime));
    if (deltaTime < DELAY) {
      clearInterval(timer);
      Notify.success('Timer is finished!');
      // alert('Timer is finished!')
    }
  }, DELAY);
}

function updateTimerInterface({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minutesEl.textContent = minutes;
  refs.secondsEl.textContent = seconds;
}