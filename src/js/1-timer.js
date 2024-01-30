import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import errorIcon from '../img/bi_x-octagon.png'


let userSelectedDate;
let countdownInterval;

function startCountdown(targetDate) {
  countdownInterval = setInterval(() => {
    const currentTime = Date.now();
    const timeDifference = targetDate.getTime() - currentTime;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      updateTimerUI({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      updateTimerUI({ days, hours, minutes, seconds });
    }
  }, 1000);
}

function updateTimerUI({ days, hours, minutes, seconds }) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

document.querySelector('#startButton').disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    console.log(selectedDates[0]);

    if (selectedDate && selectedDate.getTime() > Date.now()) {
      userSelectedDate = selectedDate;
      document.querySelector('#startButton').disabled = false;
      
     
    } else {
      userSelectedDate = null;
      document.querySelector('#startButton').disabled = true;
      iziToast.error({
        title: 'Error',
        titleColor: '#ffffff',
        message: 'Please choose a date in the future',
        position: 'topRight',
        messageColor: '#ffffff',
        backgroundColor: '#EF4040',
        iconUrl: errorIcon,
        iconColor: '#ffffff'
        });
      clearInterval(countdownInterval);
      updateTimerUI({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  },
};

flatpickr('#datetime-picker', options);

document.querySelector('#startButton').addEventListener('click', () => {
  if (userSelectedDate) {
    startCountdown(userSelectedDate);
          document.querySelector('#datetime-picker').disabled = true;
          
  }
});
