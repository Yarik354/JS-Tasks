// Задание 1
let n = '1';
if (n == 'hidden') {
    n = 'visible';
} else {
    n = 'hidden';
}


// Задание 2
let x = 2;
if (x == 0) {
    x = 1;
} else if (x < 0) {
    x = 'less then zero';
} else {
    x = x *10;
}


// Задание 3
let number = prompt('Введите число');
number = Number(number);
let result = (number < 5) ? 0 : 1;
console.log(result);


//  Задание 4
let number1 = prompt('Введите число');
let number2 = prompt('Введите число');
number1 = Number(number1);
number2 = Number(number2);
if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else {
    console.log(number2, number1);
}


// Задание 5
let num1 = prompt('Введите число');
let num2 = prompt('Введите число');
num1 = Number(num1);
num2 = Number(num2);
let remains = num1 % num2;
if (remains == 0) {
    console.log(0);
} else {
    console.log(num1 % num2);
}


// Задание 6
let mid = prompt('Введите ваш срдений бал');
mid = Number(mid);
if (mid < 5) {
    alert('Двоечник, иди учись!');
} else if (mid < 9) {
    alert('Неплохо, но давай еще поднажмем!');
} else if (mid < 11) {
    alert('Ого, да ты настоящий отличник!');
}


// Задание 7
let mark = prompt('Введите ваш балл за экзамен');
let project = prompt('Введите количество выполненных проектов');
mark = Number(mark);
project = Number(project);
if (mark > 90 || project > 10) {
    console.log(100);
} else if (mark > 75 || project >= 5) {
    console.log(90);
} else if (mark >50 || project >= 2) {
    console.log(75);
} else {
    console.log(0)
}


// Задание 8
let day = prompt('Введите колличество дней, на которое хотите арндевать авто.')
let cost = 40;
day = Number(day);
if (day >= 7) {
    alert(day * cost - 50)
} else if (day >= 3) {
    alert(day * cost -20)
} else {
    alert(day * cost)
}


// Задание 9
for (let i = 10; i < 21; i++) {
    console.log(i)
}


// Задание 10
for (i = 0; i <= 8; i = i + 2) {
    let num = prompt('Введите число');
    if (num == 10) {
        console.log('Равно 10');
    } else {
        console.log('Не равно 10');
    }
}


// Задание 11
for (i = 0; i < 100; i++) {
    console.log(i*i)
}


// Задание 12
for (i = 1; i<=100; i= i + 1) {
    if (((i % 3) == 0) && ((i % 5) == 0)){
        console.log('FizzBuzz')
    }  else if ((i % 3) == 0) {
        console.log('Fizz');
    } else if ((i % 5) == 0) {
        console.log('Buzz');
    }  else {
        console.log(i);
    }
}
