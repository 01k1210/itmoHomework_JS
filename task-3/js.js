"use strict";
// Задача
// Дана переменная count. В зависимости от значения переменной вывести в консоль слово товар в правильной форме. Например, 12 товаров, 33 товара, 21 товар и тд

// Число заканчивающееся на 1 и сама 1  (1 21 31 61 51 товар);
// диапозон чисел  от 2 до 4 (2 3 4 22 23 24 122 1222 товара);
// всё остальное товаров;


while(true){
    let a = prompt("Введите количество товара");
    let b = " ";

    if(a === null)  break;
    a = +a;
    if ((a === 1) || (a > 20 && a % 10 === 1)){
    b = "товар"
    console.log(a + " " + b);
    } else if ((a >= 2 && a <= 4) || (a > 20 && a % 10 >= 2 && a % 10 <= 4)){
    b = "товара";
    console.log(a + " " + b);
    }
    else{
    b = "товаров"
    console.log(a + " " + b);
    }
}
