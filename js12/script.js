const navTabs = document.querySelectorAll('.nav-tabs');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const infoBlocks = document.querySelectorAll('.info-item');


navTabs[0].addEventListener('click', (event => {
    if(event.target.matches('.nav-link')){
        navLinks.forEach(a => a.classList.remove('active'));
        event.target.classList.add('active');
        const index = navLinks.indexOf(event.target);
        infoBlocks.forEach(div => div.classList.remove('active'));
        infoBlocks[index].classList.add('active');
    }
}))

