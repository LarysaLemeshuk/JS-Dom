/*
1.В HTML маємо елемент img
2. В HTML маємо дві кнопки
Ці кнопки в data-атрибутах містять постлання на певну картинку(адреса картинки)
3. Задача: за натисненням на кнопку має відобразитись посилання в тезі img відповідна цій кнопці картинка

 https://innovet.com.ua/wp-content/uploads/2020/07/afade8d0b4aa9967ddac510a785914a3.jpg
https://wikizoo.ru/upload/iblock/64b/7t5t1vfph4d0c2m3x5qs5gsxgbx6wdsu.jpg
*/
const [btn1, btn2] = document.querySelectorAll('button');
//console.log(btns);

btn1.addEventListener('click', clickHandler);
btn2.addEventListener('click', clickHandler);

function clickHandler(target) {
  const img = target.parentNode.children[0];
  img.setAtribute('src', target.dataset.src);
}
