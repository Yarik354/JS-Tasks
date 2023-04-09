// Задание 1
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("рома"))


// Задание 2
function checkSpam(str) {
    let lowStr = str.toLowerCase();
    return lowStr.includes('badworld') || lowStr.includes('xxx');
}
console.log(checkSpam("badWorld"))  


// Задание 3
function reverse(str) {
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse("");
    let joinStr = reverseStr.join("");
    return joinStr;
}
console.log(reverse("привет Женя"))


// Задание 4
let stations = [
'MAN675847583748sjt567654;Manchester Piccadilly',  
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];
for(let i=0; i<stations.length; i++) {
    let stns = stations[i];
    let first3 = stns.slice(0,3);
    let find = stns.indexOf(';');
    let name = stns.slice(find + 1);
    let result = first3 + ': ' + name;
    console.log(result)
}


// Задание 5
let array = [12, 4, 50, 1, 0, 18, 40];
function check() {
     let zerocheck = array.indexOf(0, 0)
     if (zerocheck != -1) {
        console.log(true)
     } 
}
check()



// Задание 6
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
function unique(arr) {
    let newStrings = [];
    for(let str of arr) {
        if (!newStrings.includes(str)) {
            newStrings.push(str); 
        }
    }
    return newStrings;
}
console.log(unique(strings))


// Задание 7
function verifyCats(catsJane,catsJulia) {
    catsJane.splice(0,1) && catsJane.splice(8,9);
    let cats = catsJulia.concat(catsJane);
    cats.forEach(function(age,index) {
        if (age >= 2) {
            console.log(`Кошка № ${index + 1} взрослая, ей ${age} лет`)
        } else {
            console.log(`Кошка № ${index + 1} ещё котёнок`)
        }        
    })
}
verifyCats([4, 5, 3, 11, 6, 2, 4, 1, 5, 9],[2, 4, 5, 1, 13, 2, 15, 8, 3, 7])
verifyCats([3, 5, 9, 14, 1, 2, 6, 8, 3, 10],[8, 2, 10, 1, 2, 5, 6, 3, 1, 4])


// Задание 8
let arr = [5, 4, 3, 8, 0];
function filterFor(arr, a) {
    let newArr = arr.filter(function(item) {
        return item >=a
    }) 
console.log(newArr)
}
filterFor(arr,5)


// Задание 9
let words =['yes', 'hello', 'no', 'easycode', 'what']
function wordfilter() {
    let result = words.filter(word => word.length > 3);
    console.log(result)
}
wordfilter()

// Задание 10
let arr2 = [ [14, 45], [1], ['a', 'c', 'd'] ];
arr2.sort(function(a,b){
    return a.length - b.length
})
console.log(arr2)


// Задание 11
function getAverageHumanAge(array) {
    let humanAge = array.map(item => {
        if (item <= 2) {
            return item * 10
        } else {
            return item * 7
        }        
    })
    let humanAges = humanAge.filter(item => {
        return item >=18
    })
    let sum = humanAges.reduce((acc,item) => acc + item,0) / humanAges.length;
    console.log(sum);
} 
getAverageHumanAge([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2])
getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2])