let showTaskLabel = (number) => console.log(`=========================Task ${number}=========================`);

//===========================Task 1===========================
showTaskLabel(1);

// Даны два целых числа A и В (каждое в отдельной строке).
// Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.


function showNumbers(a, b) {

    console.log(a);

    if (a < b) {
        newNumber = ++a;
        if (newNumber <= b) {
            showNumbers(newNumber, b);
        }
    } else {
        newNumber = --a;
        if (newNumber >= b) {
            showNumbers(newNumber, b);
        }
    }

}
showNumbers(27, 20);

console.log("////////");

showNumbers(7, 20);


//===========================Task 2===========================
showTaskLabel(2);

// Точная степень двойки
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


function checkPower(N, power) {

    if (N % 2 !== 0) {
        return console.log('No');
    }
    if (N === (2 ** power)) {
        console.log('Yes');
    } else {
        power++;
        checkPower(N, power);
    }
}

checkPower(16, 1);


//===========================Task 3===========================
showTaskLabel(3);

// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
// При решении этой задачи нельзя использовать строки,
// списки, массивы ну и циклы, разумеется.


let sum = 0;

function getSumOfDigits(number) {

    if (number === 0) {
        return number;
    } else {
        sum += number % 10;
        rest = Math.floor(number / 10);
        getSumOfDigits(rest);
    }
    return sum;
}

console.log(getSumOfDigits(467));


//===========================Task 4===========================
showTaskLabel(4);

// Цифры числа справа налево
// Дано натуральное число N.
// Выведите все его цифры по одной, в обратном порядке, разделяя их пробелами или новыми строками.
// При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
// Разрешена только рекурсия и целочисленная арифметика.

let string = '';

function reverseDigits(number) {

    // string += number % 10 + ',';

    // rest = Math.floor(number / 10);
    // string += rest % 10 + ',';

    // restNext = Math.floor(rest / 10);
    // string += restNext % 10 + ',';

    // restNext2 = Math.floor(restNext / 10);
    // string += restNext2 % 10;

    if (number === 0) {
        return number;
    } else {
        string += number % 10 + ',';
        rest = Math.floor(number / 10);

        reverseDigits(rest);
    }
    if(string.charAt(string.length - 1) === ','){

       return string.slice(0,-1);
    }
}
console.log(reverseDigits(3456));

//===========================Task 5===========================
showTaskLabel(5);

// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.


let word = '';

function catchWord(str) {

    if (str.length === 0) {
        return word;
    } else {
       
       let cut =  str.charAt(str.length - 1);
       return cut;
    }
   
}
console.log(catchWord('potop'));
