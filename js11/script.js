// Задание 1
let obj = { name: 'John' };
let json = JSON.stringify(obj);
let parsedJson = JSON.parse(json);


// Задание 2
let user = {
    name: 'Olga',
    age: '20'
}
localStorage.setItem("user", JSON.stringify(user));
let newUser = JSON.parse(localStorage.getItem("user"));


// Задание 3
const images = Array.from(document.getElementsByTagName('img'))


window.addEventListener('click', (event => {
    const clickedImage = event.target;
    images.forEach(image => image.classList.remove('active'));
    clickedImage.classList.add('active');
    localStorage.setItem('selectedImage', clickedImage.src);
    document.body.style.backgroundImage = `url(${clickedImage.src})`;
}))


const selectedImageURL = localStorage.getItem('selectedImage')
if (selectedImageURL) {
    const selectedImage = images.find(image => image.src === selectedImageURL)
    if (selectedImage) {
        selectedImage.classList.add('active')
        document.body.style.backgroundImage = `url(${selectedImageURL})`
    }
} else {
    if (images.length > 0) {
        images[0].classList.add('active')
        document.body.style.backgroundImage = `url(${images[0].src})`
    }
}




console.log(localStorage)