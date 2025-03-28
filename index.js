/*
Завдання: створити конвертер валют

Декомпозиція:

1. Створити html-сторінку  формою, яка містить два поля вводу:
одне поле для введення суми в оній валюті
інше поле - для вибору валюти, в яку ми будемо конвертувати

2. Додати в форму кнопку "Конвертувати"

3. Написати в js-обробник події відправки форми:
- отримати значення введеної суми та обраної валюти
- обчислити конвертовану суму, помноживши введену користувачем суму на курс обміну вибраної користувачем валюти
- вивести результат конвертації на сторінку для відображення результату (innrHTML)

4. Підписати форму на подію "submit", в якості лісенера використовувати функцію з п. 3


*/

const CURRENCY = {
  USD_TO_UA: 41.25,
  EUR_TO_UA: 44.87,
};

const converterForm = document.querySelector('#currency-converter-form');

converterForm.addEventListener('submit', convertHandler);

function convertHandler(event) {
  event.preventDefault();

  const amount = Number(document.querySelector('#amount').value);
  const currency = document.querySelector('#currency').value;

  let convertedAmount;

  const { USD_TO_UA: usdCours, EUR_TO_UA: eurCours } = CURRENCY;

  switch (currency) {
    case 'USD': {
      convertedAmount = amount * usdCours;
      break;
    }
    case 'EUR': {
      convertedAmount = amount * eurCours;
      break;
    }
    default:
      throw 'Something problem.....!';
  }

//   if (currency === 'USD') {
//     convertedAmount = amount * usdCours;
//   } else if (currency === 'EUR') {
//     convertedAmount = amount * eurCours;
//   } else {
//     throw 'Something problem.....!';
//   }

  const resuldDiv = document.querySelector('#result');
  resuldDiv.innerHTML = `${amount} ${currency} = ${convertedAmount.toFixed(
    2
  )} UAN`;
}
