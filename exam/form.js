document.forms.tasks.elements.name.addEventListener('input',function(){
    if(this.validity.valueMissing){
        this.nextElementSibling.innerText = "Необходимо ввести значение";
    }
    if(this.validity.tooShort){
        this.nextElementSibling.innerText = `Значение должно быть в диапозоне от  ${this.minLength} до ${this.maxLength} `;return
    }
    if(this.value.length > 3){
        this.nextElementSibling.innerText = " ";
    }
});

document.forms.tasks.elements.date.addEventListener('input', function(){
    let startDate = new Date(document.getElementById('biday').value);
    let today = new Date();
    if (startDate.getTime() <= today.getTime()) {
        this.nextElementSibling.innerText = "Дата не может быть в прошлом"
    }
    else if(startDate.getTime() >= today.getTime()) {
        this.nextElementSibling.innerText = " ";
    }
});

document.forms.tasks.addEventListener('submit',function(event){
    event.preventDefault();
    let name = this.elements.name.value;
    if(name.length < 3)return;
    let description = this.elements.description.value;
    let date = this.elements.date.value;
    let users = document.getElementsByName("users");
    let usersVal = [];
    for(let user of users){
        usersVal.push(user.value);
    }
    // this.elements.users.value = "";
    
    let tasksInfo = {name, description, date, usersVal};
    let tasksPush = localStorage.getItem("tasks");
    let idVal = 1;
    if(tasksPush !== null){
        tasksPush = JSON.parse(tasksPush);
        idVal = tasksPush[tasksPush.length -1].id + 1;
    }  else tasksPush = [];

    tasksInfo.id = idVal;
    tasksPush.push(tasksInfo);
    localStorage.setItem("tasks", JSON.stringify(tasksPush));


    this.elements.name.value = "";
    this.elements.description.value = "";
    this.elements.date.value = "";
    console.log(JSON.stringify(tasksPush));

    document.querySelector(".wrap_Us").innerHTML = ""
});


let addUser = document.querySelector(".add_Us");
let click = 4;
addUser.addEventListener('click', function(event){ 
    event.preventDefault();
    let input = document.createElement('input');
    input.setAttribute('name', "users")
    if(click === 0 )return 
    click--;
    let button = document.createElement('button');
    button.innerHTML = "X";
    button.style.margin = "0 2px"
    document.querySelector(".wrap_Us").append(input, button);
    button.addEventListener('click', function(){
        input.remove();
        button.remove()
    })
    
});


