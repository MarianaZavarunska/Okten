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
    if (string.charAt(string.length - 1) === ',') {

        return string.slice(0, -1);
    }
}
console.log(reverseDigits(3456));

//===========================Task 5===========================
showTaskLabel(5);

// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
// При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.


let word = '';
let initialWord = '';

function catchWord(str) {

    if (str.length === 0) {
        return;
    } else {
        initialWord === '' ? initialWord = str : initialWord;

        let cut = str.charAt(str.length - 1);
        word += cut;
        str = str.slice(0, -1);
        catchWord(str);

    }

}
catchWord('potop');

(initialWord === word) ? console.log('yes') : console.log('no');

//===========================Task 6===========================
showTaskLabel(6);

// Вывести нечетные числа последовательности

// Дана последовательность натуральных чисел(одно число в строке), завершающаяся числом 0. Выведите все нечетные числа из этой последовательности, сохраняя их порядок.
// В этой задаче нельзя использовать глобальные переменные и передавать какие - либо параметры в рекурсивную функцию.
// Функция получает данные, считывая их с клавиатуры.Функция не возвращает значение, а сразу же выводит результат на экран.



document.addEventListener('keydown', function (event) {
    if (typeof event.key === 'number') {
        if (event.key % 2 !== 0) {
            console.log(event.key);
        } else {
            alert('plese')
        }
    }
})

//===========================Task 7===========================
showTaskLabel(7);

// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.

let sequence = '0234157181941006713200';
let counter = 0;
let posution = 0;

function cutedSequence() {

    let firstO = sequence.indexOf('00');
    
    let sequenceCuted = sequence.slice(0, firstO);

     findOne(sequenceCuted, posution);    
}


function findOne(sequenceCuted, position) {

    if (sequenceCuted.includes('1', position)) {
        position = sequenceCuted.indexOf('1', position);
        counter++;

        findOne(sequenceCuted, position + 1)
    }
}

cutedSequence();

console.log(counter);

//===========================Task 8===========================
showTaskLabel(8);

// Заданная сумма цифр
// Даны натуральные числа k и s. Определите, сколько существует k-значных натуральных чисел, сумма цифр которых равна s. Запись натурального числа не может начинаться с цифры 0.
// В этой задаче можно использовать цикл для перебора всех цифр, стоящих на какой-либо позиции.

let numberOfDigits = 3;
let sumOfDigits = 10;
counter = 0;

function createNumber(digitsCount){
    for (let i = 1; i < 10; i++) {
        if(digitsCount > 1) 
        {
            recursion(i, digitsCount - 1); //recursion(1, 3 - 1)
        } 
        else if(i === sumOfDigits){
            counter++;
        }
    }
}

function recursion(i, digitsCount, label){
    for (let j = 0; j < 10; j++) {
        if(digitsCount === 1)
        {
            if(i + j === sumOfDigits){ 
                counter++;
                console.log(`${label}${j}`);
            }
        }
        else{
            recursion(i + j, digitsCount - 1, `${i}${j}`); 
        }
    }
}

createNumber(numberOfDigits);
console.log(counter);