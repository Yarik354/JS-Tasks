// Задание 1 
function sumNumbers(a,b) {
    if (a == undefined || b == undefined) {
        console.log('введите два параметра')
    } if (typeof a != 'number' || typeof a != 'number') {
        console.log('введенные данные не являются числами')
    } else {
        console.log(a+b)
    }     
}
sumNumbers(9,3)


// Задание 2
function square(a) {
    if (a == undefined) {
        let err = 'Uncaught Error: Функция "square" не может быть вызвана без аргумента';
        console.error(err)
    } else {
        console.log(a * a)
    }
    
    
}
square(10)
square()

// Задание 3
let guessnumber = () => {
let num = prompt('Введите число от 1 до 10');
if (num > 10 || num < 0) {
    let num = prompt('Введите число от 1 до 10');
} else if (num == getRandomInteger(0,10)) {
    alert('Вы выиграли')
} else 
    alert(`Вы не угадали, ваше число - ${num}, а выпало число ${getRandomInteger(0,10)}`)
}
guessnumber()    
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInteger(0,10)


// Задание 4
let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a) {
    let newarr = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] >= a) {
            newarr.push(arr[i])
        }
    }
    return newarr;
}
console.log(filterFor(arr, 5))



// Задание 5
const arr1 = [1, 6, 2, 5];
const newArr1 = arr1.map(function(copyArr) {
    return copyArr;
})
console.log(newArr1)


// Задание 6
const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
}
function sumObjectValues(object) {
    let result = 0;
    for (let item in object) {
        if (typeof object[item] == 'number') {
            result += object[item];
        }
    }
    return result
}
console.log(sumObjectValues(objectWithNumbers))