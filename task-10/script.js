let prises = {
    postcard: "Открытка",
    headphones: "Наушники",
    book: "Книга",
 };

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
          cell.style.border = "1px solid black";
          cell.style.height = "30px";
          cell.style.width = "30px";
        }
    }
    let cells = document.querySelectorAll(".table__wrap_2 td")
    for(let i = 0; i < 3; i++){
        let q = Math.floor(Math.random() * cells.length ); 
        let randomCell = cells[ q ];  
        randomCell.style.background = "blue";
        randomCell.setAttribute("prises", Object.values(prises)[i]);
    }
    let click = 6;
// table.onclick = clikUs;
// function clikUs(event){
//     click--;
//     console.log(`У вас осталось ${click} попыток`);
//     if(click === 0){
//         console.log("Игра закончена, перезагрузите страничку!")
//         table.onclick = null;
//     }
// }

table.addEventListener("click", listener);
function listener(event){
    click--;
    alert(`У вас осталось ${click} попыток`);
if(click === 0){
    alert("Игра закончена, перезагрузите страничку!")
    table.removeEventListener("click", listener)
}
if(event.target.hasAttribute("prises")){
    event.target.innerHTML = event.target.getAttribute("prises")
    alert("Вы выйграли, перезагрузите страничку")
    table.removeEventListener("click", listener)
}
}
}

generateTable(4)

