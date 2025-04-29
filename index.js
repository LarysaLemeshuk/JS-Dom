function loadImage(src) {
  // створюємо саму картинку
  const img = document.createElement('img');
  imd.setAttribute('src', src);

  // створюємо елемент у верстці, який буде слугувати нам для того, що вказує, чи вантажимо ми щось чи ні
  const h2 = document.createElement('h2');
  h2.id = 'loading-h2';
  h2.append('Loading image.....');
  document.body.append(h2);

  // повертаємо проміс (промісифікаціям - коли ми огортажмо якийсь код в проміс, для того щоб забезпечити собі зручну роботу)
  return new Promise((resolve, reject) => {
    // підписуємо створену картинку на подію лоад
    // якщо картинка завантажиться _ ми резолвимо проміс з елементом картинки
    img.addEventListener('load', () => {
      resolve(img);
    });

    // підписуємо створену картинку на подію ерор
    // якщо картинка не завантажується - ми реджектимо з повідомленням про помилку
    img.addEventListener('error', () => {
      reject('Image can`t be loaded');
    });
  });
}

loadImage(
  'https://zoobonus.ua/storage/breeds/images/big/VgPIiISj7OizrLf5V6EL8RyXdLldPgLlCNRG02Gl.jpg'
)
  .then(
    (img) => {
      document.body.append(img);
      const loadingH2 = document.querySelector('#loading-h2');
      loadingH2.remove();
    },
    (errorMessage) => {
      const h2 = document.createElement('h2');
      h2.append(errorMessage);
      document.body.append(h2);
    }
  )
  .finally(() => {
    const loadingH2 = document.querySelector('#loading-h2');
    loadingH2.remove();
  });
