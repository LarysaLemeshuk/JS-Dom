/*

1. Ми маємо div
2. Маємо 5 кнопок, на кожній з яких написаний колір
3. Задача: за натисненням на кнопку, фоновий колір діва має змінитися на відповідний колір, вказаний на кнопці

*/

const buttons = document.querySelectorAll('button');
const div = document.querySelector('#root');

console.dir(buttons);

// for (let i = 0; i < buttons.clickHandler; i++) {
//   buttons[i].addEventListener('click', clickHandler);
// }

for (let btn of buttons) {
  btn.addEventListener('click', clickHandler);
}

function clickHandler({ target:{dataset:{color}, parentNode} }) {
//   const {
//     dataset: { color },
//   } = target;
//   const { parentNode } = target;
  parentNode.style.backgroundColor = color;
}
