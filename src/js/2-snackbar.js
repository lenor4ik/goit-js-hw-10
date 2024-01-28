import iziToast from 'izitoast';
import "iziToast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(document.querySelector('input[name="delay"]').value, 10);
  const state = document.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise.then(
    (value) => {
      // Виконується при успішному виконанні
      iziToast.success({
          title: 'OK',
          position: 'topRight',
          message: `✅ Fulfilled promise in ${value}ms`,
          titleColor: 'white',
             messageColor: 'white',
          backgroundColor: 'rgb(89, 161, 13)',

      });
    },
    (reason) => {
      // Виконується при відхиленні
      iziToast.error({
          title: 'Error',
          position: 'topRight',
          message: `❌ Rejected promise in ${reason}ms`,
                    titleColor: 'white',
     messageColor: 'white',
        backgroundColor: 'rgb(239, 64, 64)',
      });
    }
  );
});