// const event = new Event('click');
// console.log(event.composedPath());

const button = document.querySelector('button');

button.addEventListener('click', btnCLickHandlrr);

function btnCLickHandler(event) {
  console.log('hi from buttton handler');
  // console.log(event.composedPath());
  console.log(event.tareget); // той, на кому спрацювала подія
  // target - елемент, на якому сталась подія
  // target - елемент, доя кого буде подія занурюватись
  console.log(event.currentTarget); // той, кому належить eventListener
  //currentlarget - елемент, якому належав обробник подій
}

document.body.addEventListener('click', bodyClickHandler);

function bodyClickHandler(event) {
  console.log('hi from body click handler');
  console.log(event.tareget); // той, на кому спрацювала подія
  console.log(event.currentTarget); // той, кому належить eventListener
}

const clickEvent = new MouseEvent('click');

// button.dispatchEvent(clickEvent);

/*
3 фази події:

1. Фаза занурення.
Подія стається на рівні ОС, ОС передає подію браузеру (Window), той передає подію document -> body ->.........-> елемент, на якому сталась подія

2. Фаза цілі.
Подія досягла елемента, елемент - це таргет

3. Фаза сплиття.
Подія починає спливати у зворотньому напрямку, тобто від елемента (таргета) до ОС
*/
