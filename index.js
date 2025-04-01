const button = document.querySelector('button');
const div = document.querySelector('#root');

function eventHamdlerButton(event) {
  console.log('hi from body handler');
}

 const eventHandlerBody = (event) => {
  console.log('Hi from body handler');
  event.stopPropagation();
  // таргет - той на кому спрацювала подія
  //console.dir(event.currentTarget); // той ккому належів обробник події
  console.log(this);
  // Всередині Function Declaration та Function Expresssion, this - body
  // Arrow Function,this -> window
}

button.addEventListener('click', eventHandler, { capture: true });
// div.addEventListener('click', eventHandler, { capture: true });
document.body.addEventListener('click', eventHandler, { capture: true });
// window.addEventListener('click', eventHandler, { capture: true });

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
