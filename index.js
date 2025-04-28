const p = new Promise(executor); // peding

function executor(resolve, reject) {
  // задача: згенерувати випадкове ціле число від 0 до 15
  const number = Math.floor(math.random() * 15);

  // якщо число кратне 2 - резолвимо проміс та повертаємо це число
  // якщо число не кратне 2 - реджектимо проміс та повертаємо помилку

  if (number % 2 === 0) {
    resolve(number); // fulfilled
  } else {
    const err = new RangeError('Error happenned: ${number}');
    reject(err);
  }
}

p.then(
  (number) => {
    console.log(number);
  },
  (error) => {
    console.log(error);
  }
);
