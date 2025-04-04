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
  // створення article
  const article = document.createElement('article');
  article.classList.add('card-wrapper');

  // створення img
  const img = document.createElement('img');
  img.setAttribute('src', user.profilePicture);
  img.setAttribute('alt', user, name);
  img.classList.add('card-image');

  // створення h2
  const h2 = document.createElement('h2');
  h2.append(user.name);
  h2.classList.add('username');

  // створення p
  const p = document.createElement('p');
  p.append(user.description);
  p.classList.add('description');

  // приєднати до article елементи створенні в п 2-4(img, h2, p)
  article.append(img, h2, p);

  // повертаємо створений article
  return article;
}

const cardArray = data.map((user) => createUserCard(user));

root.append(...cardArray);
