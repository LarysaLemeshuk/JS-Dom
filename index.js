// Серіалізація - процес перетворення JS обʼєктів в JSON
// Десеріалізація - процес перетворення JSON в JS обʼєктів

// Поверхнева копія обʼєкту (shallow copy) - копія, де копіюються тільки посилання на елементи , а не самі значення

const originalObject = {
  users: [
    {
      name: 'John',
      age: 25,
    },
    {
      name: 'Lucky',
      age: 33,
    },
  ],
};

const shallowCopy = { ...originalObject };

// Глибока копія (deep copy) - створення повноцінної копії обʼєкта, де копіюються як посилання на його елементи, так і їхні значення

const deepCopy = json.pars(JSON.stringify(originalObject));
