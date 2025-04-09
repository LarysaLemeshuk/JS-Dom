// / <article class="card-wrapper">
// <div class="image-wrapper">
//   <img
//     class="card-image"
//     src="https://i.pinimg.com/736x/cd/c8/ea/cdc8ea2b188ae3b030a3b3ac87157a5a.jpg"
//     alt="John avatar "
//   />
// </div>
// <h2 class="user-name">John</h2>
// <p class="description">Description for John</p>
// </article>

const root = document.querySelector('#root');

function createUserCard(user) {
  // створення обгорти для картинки
  const imgWrapper = createImageWrapper(user);

  // створення h2
  const h2 = createElement('h2', { classNames: ['username'] }, user.name);

  // створення p
  const p = createElement(
    'p',
    { classNames: ['description'] },
    user.description
  );

  // створення і повернення article, в який вкладені створені елементи
  return createElement(
    'article',
    { classNames: ['card-wrapper'] },
    imgWrapper,
    h2,
    p
  );
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

function imageLoadHandler({ target }) {
  console.log('image successfully loaded');
  const parentWrapper = document.querySelector(`#wrapper${target.dataset.id}`);
  parentWrapper.append(target);
}

function imageErrorHandler({ target }) {
  target.remove();
  console.log('image loading has error');
}

function createUserImage(user) {
  const img = document.createElement('img');
  img.setAttribute('src', user.profilePicture);
  img.setAttribute('alt', user.name);
  img.dataset.id = user.id;
  img.classList.add('card-image');

  img.addEventListener('load', imageLoadHandler);
  img.addEventListener('error', imageLoadHandler);
  return img;
}

function createImageWrapper(user) {
  //створення заглушки
  const imgWrapper = createElement('div', { classNames: ['image-wrapper'] });
  imgWrapper.setAttribute('id', `wrapper${user.id}`);

  // створення img
  const img = createUserImage(user);
  return imgWrapper;
}
