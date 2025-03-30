/*
Створити кнопку, яка буде змінювати тему сайту(html)

js. Якщо ви натискаєте  на цю кнопку - на сайті вмикається темний режим
(дляя тегу body встановіть backgroundColor = якийсь_темний_колір
color: white

Якщо ви натискаєте на цю кнопку ще раз - на сайті вимикається темний режим (toggle)
*/

const themeToggleBtn = document.querySelector('#theme-toggle');
const body = document.body;


themeToggleBtn.addEventListener('click', toggleTheme)

function toggleTheme(){
body.classList.toggle('dark-theme')
}