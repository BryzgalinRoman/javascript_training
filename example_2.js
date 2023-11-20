// 2. Условия

// Задание 1
// Напишите программу, которая запрашивает у пользователя три числа: Катет A, Катет B, и Гипотенуза C. 
// Программа проверяет по теореме Пифагора эти стороны треугольника и пишет в консоль "Это прямоугольный треугольник!" или "Это не прямоугольный треугольник!". 
// Используйте if/else для проверки условия.

let catetA = prompt("Введите данные катета А:");
let catetB = prompt("Введите данные катета B:");
let gipotenusaC = prompt("Введите данные гипотенузы C:");
let pifagorTeory;

if (Math.pow(gipotenusaC, 2) === Math.pow(catetA, 2) + Math.pow(catetB, 2)) {
    console.log("Это прямоугольный треугольник!");
} else {
    console.log("Это не прямоугольный треугольник!");
}

//  решение СкиллФэктори

const a = prompt('Введите катет А')
const b = prompt('Введите катет B')
const c = prompt('Введите гипотенузу C')

if (a ** 2 + b ** 2 === c ** 2) {
    alert('Это прямоугольный треугольник!')
} else {
    alert('Это не прямоугольный треугольник!')
}

// Задание 2
// Напишите программу, которая запрашивает у пользователя три числа и выводит максимальное из них, 
// используйте if/else/else if. Попытайтесь не использовать &&.
// НЕ ПРАВИЛЬНАЯ ЛОГИКА!!!!!

let numberOne = prompt("Введите первое число:");
let numberTwo = prompt("Введите второе число:");
let numberThree = prompt("Введите третье число:");

if (numberOne > numberTwo) {
    if (numberOne > numberThree) {
        alert("Самое большое число " + numberOne);
    } else {
    console.log(numberOne, numberTwo, numberThree);
};

} else if (numberTwo > numberThree) {
    if (numberTwo > numberOne) {
    alert("Самое большое число " + numberTwo);
    console.log(numberOne, numberTwo, numberThree)
} else {
    alert("Самое большое число " + numberThree);
    console.log(numberOne, numberTwo, numberThree)
}}

//  решение СкиллФэктори НЕ ПРАВИЛЬНОЕ!!!!!!!
const a = prompt('Введите A')
const b = prompt('Введите B')
const c = prompt('Введите C')

if (a > b) {
	if (a > c) {
  	alert(a)
  } else {
  	alert(c)
  }
} else if (b > c) {
	alert(b)
} else {
	alert(c)
}

// Задание 3
// Напишите программу, которая запрашивает у пользователя число N и отвечает "Число {N} четное!" или "Число {N} нечетное!"
// Например: 3 → Число 3 нечетное!

let n = prompt("Введите любое число")

if ( n % 2 == 0) {
    alert("Число " + n + " четное");
} else {
    alert("Число " + n + " не четное");
}

// alert("Число " + n + " четное");
// alert("Число " + n + " не четное");

//  решение СкиллФэктори

const n = prompt('Введите N')
if (n % 2 === 0) {
	alert('Число ' + n + ' четное!')
} else {
	alert('Число ' + n + ' нечетное!')
}