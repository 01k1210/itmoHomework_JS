let goods = [
    {
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },
    {
        title: "Flute",
        price: 900,
        count: 50
    },
    {
        title: "Harp",
        price: 3400,
        count: 5
    }
];


function table(arr){
    let wrap = document.querySelector('.table__wrap')
    let table = document.createElement("table");
    wrap.append(table)
    let firstRow = table.insertRow();
    let keys = Object.keys(arr[0])
    for(let i of keys){
        let cell = firstRow.insertCell();
        cell.innerText = i.toUpperCase()
    }
for(let elem of arr){
    let row = table.insertRow();
    for(let prop in elem){
        let cell = row.insertCell();
        cell.innerText = elem[prop];
    }
}
}
table(goods);

let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];

// 2задача
function generateTable(n){
    if(n < 3) return;
    let wrap = document.querySelector(".table__wrap_2");
    let table = document.createElement("table");
    table.style.border = "1px solid black"
    wrap.append(table);
    for(let i = 0; i < n; i++){
        let firstRow = table.insertRow();
        firstRow.style.border = "1px solid black"
        for(let k = 0; k < n; k++){
          let cell = firstRow.insertCell();
          cell.classList.add('box')
          cell.style.border = "1px solid black";
        }
    }
    let prises = {
        headphones: "Наушники",
        book: "Книга",
        postcard: "Открытка"
     };
     let values = Object.values(prises);
    let cells = document.querySelectorAll(".table__wrap_2 td")
    for(let i = 0; i < 4; i++){
        let randomCell = cells[Math.floor(Math.random() * cells.length)];
        randomCell.setAttribute("prise", values[i]);
    }

 
}
generateTable(4)


let count = 10;
document.querySelector(".table__wrap_2 table").addEventListener('click', click )

function click (event){
    count--;

    if(event.target.hasAttribute("prise")){
        event.target.innerHTML = event.target.getAttribute("prise");
        document.querySelector(".table__wrap_2 table").removeEventListener('click', click )
        return;
    }


    else if (count === 3 || count === 2 ){
        alert("осталось:" + " " + count + " " + "попытки")
    }
    else if(count === 1 ){
        alert("осталось:" + " " + count + " " + "попытка")
    }
    else{
        alert("осталось:" + " " + count + " " + "попыток")
        document.querySelector(".table__wrap_2 table").removeEventListener('click', click )
    }
}