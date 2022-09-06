let button = document.querySelector('#btn');

button.addEventListener('click', function () {
    let link = document.createElement('a');
    link.href = 'https://www.instagram.com/vova_kasper/';


    button.appendChild(link);

    window.open(link);
});

button.addEventListener('blur', function(){
let ask = prompt('введите ваше имя!');
let answer = confirm('добро пожаловать'  + ask);

});