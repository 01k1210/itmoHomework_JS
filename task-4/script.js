// Задача на цикл for of
// Создать массив из целых чисел. Отрицательные элементы массива перенести в новый массив.
let a = [-10, 8, 4, -15, 3, -19, 1, 10, -11] , b = [];
for(let i of a){
    if(i < 0){
        b.push(i)
    }
}
console.log(b);

// Задача на цикл for
// Создать массив из целых чисел, заполнить массив семью рандомными значениями в диапазоне [5; 300). Поменять элементы с максимальным и минимальным значениями местами.

let a2 = [];
let max = 5;
let maxIndex = 0;

let min = 300;
let minIndex = 0;
for( i = 0; i < 7 ; i++ ) {
    let value = Math.round( 5 + Math.random() * 295);
    a2.push(value);
    if (max < value){
        max = value;
        maxIndex = i;
    }
    if (min > value){
        min = value;
        minIndex = i;
    }

}
console.log(a2);
a2[maxIndex] = min;
a2[minIndex] = max;
console.log(a2);


// Задача на цикл while и метод массива
// Дан массив и строка. Значение строки необходимо получать от пользователя в цикле while и добавлять в массив, если такой строки в нем еще не существует. 0 для выхода из цикла.

let a3 = ["php", "javascript", "npm", "234", "es6", "434"];
console.log(a3);
while(true){
    let b3 = prompt("Введите строку");
    if(b3 === "0")break;
   else if(a3.indexOf(b3) == -1){
        a3.push(b3)}
console.log(a3)
};
