import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  inputEl: document.querySelector("input#datetime-picker"),
  startBtn: document.querySelector('button[data-start]'),
  timerEl: document.querySelector('.timer'),
  fieldEl: document.querySelector('.field'),
  valueEl: document.querySelector('.value'),
  daysEl: document.querySelector('.value[data-days]'),
  hoursEl: document.querySelector('.value[data-hours]'),
  minutesEl: document.querySelector('.value[data-minutes]'),
  secondsEl: document.querySelector('.value[data-seconds]'),
};
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  intervalId: null,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      refs.startBtn.disabled = true;
      Notify.failure('Please, choose a date in the future!!!');
      // alert('Please, choose a date in the future!!!');
    } else {
      Notify.success('Perfect!!!');
      // alert('Perfect!!!')
      refs.startBtn.disabled = false;
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