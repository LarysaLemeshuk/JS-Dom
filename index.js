/*
https://api.openweathermap.org/data/2.5/weather?q={Dnipro}&appid={f7c576ba3699bdd0b98ddcf196639992}

f7c576ba3699bdd0b98ddcf196639992

// Задача: зробити погодний віджет

Алгоритм вирішення:


1. Зробити верстку елементів, які отримують від користувача дані про місто

2. Отримати дані з апі і обробити їх( підготувати дані для відмалювання у верстці)

3. Зробити картку з погодою і відобразити її
*/

const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const btn = document.querySelector('btn');

btn.addEventListener('click', buttonClickHandler);

function buttonClickHandler({ target }) {
  const selectValue = target.previousElementSibling.value;
  requestAPI(selectValue);
}

function requestAPI(cityName) {
  // готуєм url
  const url = `${API_BASE}?q=${cityName}&appid=${API_KEY}$units=metric`;
  console.log(url);

  // робимо запит
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // відмальовуємо погоду
      displayWeather(data);
    });
}

/*

  <article class="weather">
        <p>City name: Kyiv</p>
        <p>Temperature: 7°C</p>
        <p>Weather description: overcast clouds</p>
      </article>
*/

function displayWeather(weatherObject) {
  const {
    name,
    main: { temp },
    weather: [{ description }],
  } = weatherObject;

  // створюємо article
  const article = document.createElement('article');
  article.classList.add('weather');

  // створюємо параграф з назвою міста
  const cityName = document.createElement('p');
  cityName.append('City name: ${name) ');

  // створюємо параграф з температурою
  const temperature = document.createElement('P');
  temperature.append(`Temperature: ${temp}°C`);

  // створюємо параграф з описом погоди
  const weatherDescription = document.createElement('p');
  weatherDescription.append(`Weather description: ${description}`);

  // до article чіпляємо параграфи створені в п. 2-4
  article.append(cityName, temperature, weatherDescription);

  // знаходимо секцію і чіпляємо до неї article
  const section = document.querySelector('.wrapper');
  section.append(article);
}
