// Задание 1
console.log(Math.round(5.4)) // Возвращает значение числа, округлённое до ближайшего целого.
console.log(Math.ceil(5.4))  // Возвращает значение числа, округлённое к большему целому.
console.log(Math.floor(5.4)) // Возвращает значение числа, округлённое к меньшему целому.
console.log(Math.round(5.5))
console.log(Math.ceil(5.5))
console.log(Math.floor(5.5))
console.log(Math.round(5.6))
console.log(Math.ceil(5.6))
console.log(Math.floor(5.6))


// Задание 2
let now = new Date();
let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
console.log('Сегодня ' + now.toLocaleString('ru-Ru', options));
let hours = now.getHours();
let minutes = now.getMinutes();
console.log(`${hours} часов ${minutes} минут`)