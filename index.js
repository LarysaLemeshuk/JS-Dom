function createDiv() {
  const div = document.createElement('div'); // 1. Створюємо елемент у памʼяті
  div.classList.add('box')// 2. До цього елементу приєднуємо стильовий клас
  div.append('Hello world'); // 3. До цього елементу приєднуємо текстовий вузол
  console.log(div);

  document.body.append(div); // 4. ПРиєднуємо створений елемент до body

}

const btn = document.querySelector('button');
btn.addEventListener('click', createDiv)


/*

Спробуйте створити декілька HTML елементів через JS. (document.createElement)
Спробуйте додати якісь стильові класи цим елементам. (element.classlist.add)
Спробуйте додати якийсь текстовий вузол для елементів. ( element append( 'text.... ')
Причепіть створені елементи до body ( document.body append (element)

*/