

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const menu = document.getElementById('menu');

if(bar){
    bar.addEventListener('click',() =>{
        menu.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',() =>{
        menu.classList.remove('active')
    })
}

