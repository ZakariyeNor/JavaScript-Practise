const bar = document.getElementById('menu');

const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

const hide = document.getElementById('close');

if(hide) {
    hide.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

