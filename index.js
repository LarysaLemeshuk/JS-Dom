// fetch('./user.json')
//   .then((response) => {
//     return response.json(); // перетворюємо нулі та одинички на JS обʼєкт
//   })
//   .then((data) => {
//     console.log(data);
//   });

fetch('https://api.monobank.ua/bank/currency')
  .then((response) => {
    return response.json(); // перетворюємо нулі та одинички на JS обʼєкт
  })
  .then((data) => {
    console.log(data);
  });

