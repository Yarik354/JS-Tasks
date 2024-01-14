let i = 1;

const message = setInterval(() => {
    console.log(`Сообщение номер ${i}`);
    i++
}, 2000);

setTimeout(() => {
    clearInterval(message);
}, 10000)


const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const timer = setInterval(() => {
    const date = new Date()
    hours.textContent = date.getHours()
    minutes.textContent = date.getMinutes()
    seconds.textContent = date.getSeconds()
}, 1000)