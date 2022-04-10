// Задача 1 на метод sort()
// Дан массив, необходимо отсортировать его по возрастанию длин вложенных массивов

let numbers = [
    [0, 89, 444, 512, 0, -33, 200, 15],
    [4, 89, 12, 0, -33],
    [14, 170, -330],
    [44, 2, 56, -88],
    [4, 89, 45, 12, 0, -33, 90],
    [5, -12, 87, 67, -22, 111]
];
let a = [];
for(k of numbers){
  for(i of k){
    a.push(i);
  };
};
function sortTemps(a,b){
  if ( a === b) return 0;
  if( a < b) return - 1;
  return 1;
};
a.sort(sortTemps);
console.log(a);

// Задача 2 на методы sort() и Math.random()
// Необходимо случайным образом изменить порядок элементов в массиве.

let presents = ["книга", "ручка", "блокнот", "дождевик", "скрепки", "брелок"];
// function sorts(){
//  return Math.random() - 0.5
// }
presents.sort(function(){return Math.random() - 0.5 });
console.log(presents);

// Задача 3 на методы filter() и includes()
// Создать массив из пересечений массива first и second.
// В итоге должен быть создан массив: ["Октябрь", "Май"]

let first = ["Апрель", "Июль", "Октябрь", "Май"],
second = ["Май", "Январь", "Декабрь", "Октябрь"];

let v = first.filter(function(n){return second.includes(n)});
console.log(v)

// Задача 4 на метод some()
// Дан массив температур. Необходимо выяснить, поднималась ли температура выше 500, вывести информацию об этом в консоль.

let temperatures = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];

let newTemp = [];
for(t of temperatures){
  for(i of t){
    newTemp.push(i)
  };
};
let newTemp1 = newTemp.some(function(temp){return temp > 500});
console.log(newTemp1);