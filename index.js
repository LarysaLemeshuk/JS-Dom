fetch('./uer.json')
  .then((response) => {
    return response.json(); // перетворюємо нулі та одинички на JS обʼєкт
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('FINALLY question closed');
  });
