// 1
const div = document.querySelector('div')
let http = new XMLHttpRequest();

http.open('GET', 'https://jsonplaceholder.typicode.com/todos');

http.send();

http.onload = function() {
    let response = http.response;
    const tasks = JSON.parse(response);
    div.innerText = tasks[0].title
}

// 2
let search = new XMLHttpRequest();

search.open('GET', 'https://jsonplaceholder.typicode.com/todos');

search.send();

search.onload = function() {
    let response = search.response;
    const tasks = JSON.parse(response);
    let ul = document.createElement('ul');
    for (let i = 0; i < 20; i++) {
        let li = document.createElement('li');
        li.innerText = tasks[i].title
        ul.appendChild(li);
    }
    document.body.append(ul)
}