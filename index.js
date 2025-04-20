/*
Регулярні вирази - своєрідний фільтр для текстових даних
Регулярні вирази - інструменттпорівняння якогось рядка із заданим шаблоном
За допомогою регулярки ми описуємо, як має виглядати рядок який ми очікуємо від користувача

^ - початок рядка
$ - кінець рядка
[] - послідовність символів
[a-z] - діапазон
[a-zA-Z] - два діапазони одночасно
[abcdifghi] - перерахувати вручну

/^[a-zA-Z]{2,5}/ - шукаємо від 2 до 5 літер великих чи маленьких
/^[a-zA-Z]{2,}[0-9]+$/ - шукаємо слово будь-якої довжини  бідьше двох літер, в кінці має бути мінімум 1 цифра
/^[a-zA-Z]{2,}[0-9]+\.$/ - шукаємо слово будь-якої довжини більше двох літер, в кінці має бути мінімум одна цифра і після цифри має бути крапка
/^[^0-9]+$/ -
*/

//const regexp = /^Test$/

const str1 = 'Hello';
const str2 = new String('Hello');

// Regexp

const reg1 = /^[a-zA-Z]{2,5}$/;
//console.log(reg1);

const reg2 = new RegExp('^[a-zA-Z]{2,5}$');
//console.log(reg2);

// Експереминтуємо: валідуємо емейл через регулярки
const testString = 'sunnyday56@gmail.com'
const emailRegExp = /[^@ Itirin]+@[^@|tlrin]+1.[@ItIrIn]+/;

emailRegExp.exec(testString) // array
emailRegExp.test(testString) // true

testString.match(emailRegExp) // array спрацює як exec

let str = 'Blue SKY' ;
str.replace(/[A-Z]{3}/, 'test123'); // Blue test123