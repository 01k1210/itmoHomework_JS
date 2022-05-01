let out = document.querySelector(".out_wrap")
let tasksPush = localStorage.getItem("tasks");
tasksPush = JSON.parse(tasksPush);


for(let i of tasksPush){
    let div = document.createElement('div');
    div.setAttribute("id", i.id )
    div.classList.add("inner")
    out.append(div);
    let p = document.createElement('p');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p.innerHTML = `Название задачи: ${i.name}`
    p1.innerHTML = `Описание задачи: ${i.description}`
    p2.innerHTML =`Выполнить к:  ${i.date} ` 
    for(let j of i.usersVal){
        let p3 = document.createElement('p');
        p3.innerHTML = `Участники: ${j}`;
        div.append(p3)
    }
    div.append(p, p1, p2)
    div.addEventListener('click', function(){
        div.classList.toggle("checked")
    })
    
}
document.querySelector(".clear_Us").addEventListener('click', function(){
    let del = document.getElementsByClassName("checked");
    for(let i of del){
        // for перебрать tasksPush от последнего элемента к первому
        console.log(tasksPush)
            for(let j = tasksPush.length-1; j >= 0; j--){
                if(i.id == tasksPush[j].id){
                    i.remove();
                    tasksPush.splice(j,1);
                }
            }

    }
    localStorage.setItem("tasks", JSON.stringify(tasksPush));
})

document.querySelector(".clear").addEventListener('click', function(){
    localStorage.clear();
    
})