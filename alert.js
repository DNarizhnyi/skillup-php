"use strict";


/* Сделайте функцию, которая возвращает квалрат числа. Число передается параметром  */

function sqr (number) {
    return number * number;
}
/* Result */

console.log(('Квадрат числа =' + sqr(9)));

/*Сделайте функцию, которая возвращает сумму двух чисел.  */

function sum (number1, number2) {
    return number1 + number2;
}
/* результат в элемент на странице */

var resultP = document.getElementById('results');

resultP.innerHTML = '2+15 = '+ sum(2,15);

/*Сделайте функцию, которая принимает параметром число от
1 до 7, а возвращает день недели на русском языке.*/

function dayOfWeek(day) {

    switch (day) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';

            }
            return 'Wrong day';
}
resultP.innerHTML +='<br>';
resultP.innerText +='Day of Week: ' + dayOfWeek(2);
resultP.innerHTML +='<br>';
resultP.innerText +='Day of Week: ' + dayOfWeek(2+4);

/* Вычисление факториала */
function Fact(value) {
    var ret;
    if (value < 1){
        ret = null;

        } else if (value == 1) {
        ret = 1;

    } else {
        ret = value * Fact(value - 1);
    }
    return ret;
}
resultP.innerHTML +='<br>';
debugger;
resultP.innerText +='Factorial 5 = ' + Fact(prompt('Put the number'));
