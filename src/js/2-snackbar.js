import iziToast from 'izitoast';
import '/iziToast/dist/css/iziToast.min.css';
import successIcon from '../img/bi_check2-circle.png'
import errorIcon from '../img/bi_x-octagon.png'

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

    iziToast.success({
        title: 'OK',
        position: 'topRight',
        message: `Fulfilled promise in ${value}ms`,
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        backgroundColor: '#59A10D',
        iconUrl: successIcon,
        iconColor: '#ffffff'
    });
    },
    (reason) => {

    iziToast.error({
        title: 'Error',
        position: 'topRight',
        message: `Rejected promise in ${reason}ms`,
        titleColor: '#ffffff',
        messageColor: '#ffffff',
        backgroundColor: '#EF4040',
        iconUrl: errorIcon,
        iconColor: '#ffffff'
    });
    }
);
});