//ЗАДАНИЕ 1

name = prompt('Введите ваше имя');
lastName = prompt('Введите вашу фамилию');
fullName = name + ' ' + lastName;
alert('Привет, ' + fullName + '!');

//ЗАДАНИЕ 2

celsius = prompt('Введите количество градусов по Цельсию')
fahrenheit = celsius * 9 / 5 + 32;
alert(celsius + ' градусов по Цельсию равны ' + fahrenheit + ' градусам по Фаренгейту')

//ЗАДАНИЕ 3

x = prompt('Введите X');
y = (4 * x ** 2 + 18 - 23 * x) / (5 / 9 * x + 18 * ((x ** 3 / 33) * x) ) + x * (15 / 12);
alert('Y = ' + y);

//ЗАДАНИЕ 4

a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = '5' == 5;

at = typeof a === 'number';
bt = typeof b === 'string';
ct = typeof c === 'boolean';
dt = typeof d === 'object';
et = typeof e === 'undefined';
ft = typeof f === 'number';
gt = typeof g === 'string';
ht = typeof h === 'number';
it = typeof i === 'number';
jt = typeof j === 'boolean';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);

//ЗАДАНИЕ 5

const NDS = 0.20
const NDFL = 0.13
const EXCISE = 0.1
const RENT = 40000
const FOOD = 15000
const OTHER = 15000
const MY_SALARY = 120000

const ndflTax = MY_SALARY * NDFL;
const mySalaryNet = MY_SALARY - ndflTax;
const otherTaxes = mySalaryNet * (NDS + EXCISE);
let totalAvailable = mySalaryNet - otherTaxes;
totalAvailable -= FOOD + OTHER + RENT
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')