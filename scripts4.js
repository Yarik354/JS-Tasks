// Задание 1
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}


// Задание 2
let country = 'Sweden';
let access = country == 'Sweden' ? 'true' : 'false'


// Задание 3
const roles = [true, false, false, true, false];
let newRoles = [];
for (let i =  0; i < roles.length; i++) {
    let rol = roles[i] == true ? 'admin:' : 'user'
    newRoles.push({role:rol})
}
console.log(newRoles)

// Задание 4
const nums = [5, 4, 3, -3, -10, -1, 8, -20, 0];
const numbers = [443, -39, 0, -105, -21, 38, -20, 3, 90];
 let newArray = [];
function findPositiveNumbers(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i] > 0) {
            newArray.push(array[i])
        }
    }
}
findPositiveNumbers(nums)
findPositiveNumbers(numbers)
console.log(newArray)

// Задание 5
function fill(text, count) {
    let newA = [];
    for (let i = 0; i < count; i++){
        newA.push(text)
    }
    console.log(newA)
}
fill('куку', 3)




// Задание 6
let arr = [5, 4, 3, 8, 0];
let newArr = [];
function filterFor(arr, a){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] >= a) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
filterFor(arr, 5)
console.log(newArr)


// Задание 7
function getRandomRGB() {
    let r = getRandomInteger(0,255);
    let g = getRandomInteger(0,255);
    let b = getRandomInteger(0,255);
    return `rgb(${r},${g},${b})`
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// Задание 8
function getSquares(min, max) {
    for (let i = 0; i <= max-min; i++) {
        console.log((i+min)**2)
    }
}
getSquares(5,10)


// Задание 9
function isInteger(x) {
    return x % 1 == 0;   
}
console.log(isInteger(22))


// Задание 10
function integerOrDecimal(n) {
    for (let i = 0; i < n; i = i + 0.5) {
        if (i % 1 == 0) {
            console.log(i + ' integer')
        } else {
            console.log(i + ' decimal')
        }
    }
}
integerOrDecimal(3)