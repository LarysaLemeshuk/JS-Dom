/* <article class="card-wrapper">
<img
  class="card-image"
  src="https://i.pinimg.com/736x/cd/c8/ea/cdc8ea2b188ae3b030a3b3ac87157a5a.jpg"
  alt="John avatar "/>
<h2 class="user-name">John</h2>
<p class="description">Description for John</p>
</article> */

const root = document.querySelector('#root');

function createUserCard(user) {
  
  // створення img
  const img = document.createElement('img');
  img.setAttribute('src', user.profilePicture);
  img.setAttribute('alt', user, name);
  img.classList.add('card-image');

  // створення h2
  const h2 = createElement('h2', { classNames: ['username'] }, user.name);

  // створення p
  const p = createElement(
    'p',
    { classNames: ['description'] },
    user.description
  );

  // створення і повернення article, в якй вкладені створені елементи
  const article = createElement('article', { classNames: ['card-wrapper'] }, img, h2, p);
  return article;
  
}

const cardArray = data.map((user) => createUserCard(user));

root.append(...cardArray);

/**
 *
 * @param {String} type - тег елемента, який потрібно створити
 * @param {String []} classNames - список класів, які потрібно додати до елемента
 * @param  {...Node} chilNodes - список дочірніх вузлів
 * @returns {HTML Element}
 */

function createElement(type, { classNames }, ...chilNodes) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...chilNodes);

  return elem;
}
