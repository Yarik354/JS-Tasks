// Задание 1
const inputElement1 = document.querySelector('.input1')
const ulElement1 = document.querySelector('.list1');
const liElement1 = document.createElement('li');

inputElement1.addEventListener('keyup', function(event) {
    liElement1.innerHTML = inputElement1.value;
    ulElement1.appendChild(liElement1);
    inputElement1.value = "";
})


// Задание 2
const inputElement2 = document.querySelector('.input2');

inputElement2.addEventListener('keyup', function(event) {
    console.log(inputElement2.value);
})
    


// Зaдание 3
const form1 = document.querySelector('.form1');
const inputElement3 = document.querySelector('.input3');
const ulElement3 = document.querySelector('.list3');

form1.addEventListener('submit', (event) => {
    event.preventDefault();
    const liElement3 = document.createElement('li');
    liElement3.innerHTML = inputElement3.value;
    ulElement3.appendChild(liElement3);
    inputElement3.value = '';
})


// Задание 4
// 1)
const form2 = document.querySelector('.form2');
const result1 = document.querySelector('.result1');

form2.addEventListener('submit', (event)  => {
    event.preventDefault();
    const number1 = document.querySelector('.input4').value;
    const number2 = document.querySelector('.input5').value;
    const operator = document.querySelector('.select1').value;
    let num1 = Number(number1);
    let num2 = Number(number2);
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }
    result1.textContent = result;
})

// 2)
const form3 = document.querySelector('.form3');
const result2 = document.querySelector('.result2');

form3.addEventListener('submit', (event) => {
    event.preventDefault();
    const expression = document.querySelector('.input6').value;
    result2.textContent = eval(expression)
})


// Задание 5
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const button = document.querySelector('.btn')
button.addEventListener("mouseenter", function() {
    const red = getRandomInteger(0, 256);
    const green = getRandomInteger(0, 256);
    const blue = getRandomInteger(0, 256);
    button.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
});
button.addEventListener("mouseleave", function() {
    const rotation = getRandomInteger(-180, 180)
    button.style.transform = "rotate(" + rotation + "deg" + ")"
})
    














    