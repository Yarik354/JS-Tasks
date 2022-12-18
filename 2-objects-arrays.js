// Задание 1 
let n = 22;
let compare = n > 0 && n <=100;
console.log(compare);


// Задание 2 
const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}
console.log(`Заработная плата Den состовляет ${engineers.Den} рублей`)
console.log(`Заработная плата Matt состовляет ${engineers.Matt} рублей`)
console.log(`Заработная плата Steve состовляет ${engineers.Steve} рублей`)


// Задание 3
let array = [12, 34, 98, 45, 22]
for (let i = 1; i < array.length; i = i + 2) {
    console.log(array[i]);
}


// Задание 4
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
for (let i = 0; i  < numbers.length; i++) {
    console.log(`Индексу ${i} соответствует число ${numbers[i]}`)
}


// Задание 5
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];


// Задание 6
// 1)
let numbers1 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
for (let i = 0; i  < numbers1.length; i++) {
    console.log(numbers1[i])
}
for (let item of numbers1) {
    console.log(item)
}
// 2)
let sum = 0;
for (let i = 0; i < numbers1.length; i++) {
    sum = sum + numbers1[i];
}
console.log(sum)
// 3)
let sum1 = 0;
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 == 0) {
        sum1 = sum1 + numbers1[i];
    }
}
console.log(sum1)
// 4)
let max = numbers1[0];
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] > max) {
        max = numbers1[i]
    }
}
console.log(max)
// 5)
for (let i = 0; i < numbers1.length; i++) {
 if (numbers1[i] == max) {
    console.log(i)
 }
}



// Задание 7 
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        newArr.push(arr[i])
    }
}


// Задание 8
let nums = [5, 4, 3, 8, 0];
let limit = 5;
let newNums = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= limit) {
        newNums.push(nums[i])
    }
}


//Задание 9
const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
for (let item of users){
    if (item.age > 15)
    console.log(item.name)
}


// Задание 10
// 1)
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let newVeg = [];
for (let item of vegetables) {
    newVeg.push({word:item,length:item.length})
}
console.log(newVeg)
// 2)
for (let i = 0; i < newVeg.length; i++) {
    console.log('длина - ' + newVeg[i].length)
}
