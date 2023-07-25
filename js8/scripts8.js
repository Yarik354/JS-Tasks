// Задание 1
console.log('На компьютере с ОС Windows NT 10.0 с помощью браузера YaBrowser я открыл страничку "file:///C:/Users/shogi/OneDrive/Pulpit/Java%20Script/js8/index.html" ')


// Задание 2
const lies = document.querySelectorAll('li');
lies.forEach(element => console.log(element.innerText));


// Задание 3
for (let i = 0; i < lies.length; i++) {
    lies[i].textContent = i;      
}


// Задание 4
const paragraph = document.createElement('p');
paragraph.textContent = 'Пример текста';
paragraph.style.fontSize = '36px';
paragraph.style.fontWeight = 'bold';
document.body.append(paragraph);


// Задание 5
const forAdding = document.querySelector('.forAdding');
forAdding.textContent = '05.07.2023'


// Задание 6
function tagOutput(name, color, content) {
    const tag = document.createElement(name);
    tag.style.color = color;
    tag.textContent = content; 
    document.body.append(tag);
    return tag;
}
console.log(tagOutput('p', 'red', 'текст'))
console.log(tagOutput('h1', 'blue', 'заголовок'))


// Задание 7
for (let i = 1960; i<=2020; i++) {
    let opt = document.createElement('option')
    opt.innerText = i;
    document.getElementById('addingOption').appendChild(opt);
}


// Задание 8
const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}   
]
clients.forEach(client => {
    let addLi = document.createElement('li')
    let status = client.order ? 'оплатил':'отменил'
    console.log(addLi.textContent = 'Клиент ' + client.name + ' ' + status + ' заказ')
})


// Задание 9
let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
let addDiv = document.createElement('div')
addDiv.style.backgroundColor = 'lightblue';
addDiv.style.padding = '20px';

for (let i = 0; i < linksArr.length; i++){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank')
    link.href = linksArr[i];
    link.textContent = linksArr[i];
    addDiv.appendChild(link)
    document.body.appendChild(addDiv)
}


// Задание 10
const removeElement = document.querySelectorAll('.forRemove');
for (let i = 0; i < removeElement.length; i++) {
    removeElement[i].remove();
  }


// Задание 12
const ulClass = document.querySelector('ul');
ulClass.classList.add('list');
const liClass = document.querySelectorAll('li');
for (let i = 0; i < liClass.length; i += 2) {
  liClass[i].classList.add('item');
}
const linkClass = document.querySelectorAll('a');
linkClass.forEach(link => {
  link.classList.add('custom-link');
});










