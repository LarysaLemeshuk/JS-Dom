//console.log(this);

// alert('test'); // window.alert('test)

//console.dir(document);

/*

1. Всі елементи на сторінці - окремі обʼєкти
2. Всі елементи можна підписати під події

*/

function getAlert(event) {
  const btn = event.target;

  if (btn.style.backgroundColor === red) {
    btn.style.backgroundColor = 'unset';
  } else {
    btn.style.backgroundColor = 'red';
  }
}

const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', getAlert);
// 1 варіант: зареєстрували обробник  події натискання миші на кнопку
// 2 варіант: навісили обробник натискання миші на кнопку

/*

Зробіть кнопку, додайте id
Напишіть функцію, яка виводить в консоль "привіт"
Навісити обробку події наведення миші на цю кнопку

*/

const secondButton = document.getElementById('second-btn');

function consoleHello() {
  console.log('Привіт');
}

secondButton.addEventListener('mouseenter', consoleHello);

// При наведені на кнопку ні - потрібно її приховати (display: 'none')

const noBtn = document.getElementById('no-btn');

function ghostBtn(event) {
//   const btn = event.target;
//   btn.style.display = 'none';

  event.target.removeEventListener('mouseenter', ghostBtn);
  console.log('test');
}

noBtn.addEventListener('mouseenter', ghostBtn);
