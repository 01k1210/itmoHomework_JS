"use strict";


let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 0,
        img: "https://picsum.photos/id/345/300"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/300"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/300"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 0,
        img: "https://picsum.photos/id/162/300"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "https://picsum.photos/id/163/300"
    }
};

let cardsSection = document.querySelector(".cards-section");
for (let x of Object.values(goods)) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.innerText = x.title;

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", x.img);

    let price = document.createElement("p");
    price.innerText = x.price;

    let count = document.createElement("div");
    count.classList.add("card__count-info");
    if (x.count > 0) {
        count.innerHTML =
            `<button>-</button>
             <span>0</span>
             <button>+</button>`;
    } else {
        count.innerHTML = "<span>Товара нет в наличии</span>";
    }
    card.append(title, img, price, count);
    cardsSection.append(card);
}



let btn = document.getElementsByTagName('button');
    for(let i = 0; i< btn.length; i++){
        if(i % 2 === 0){
            btn[i].classList.add("minus")
        }
        if(i % 2 !== 0){
            btn[i].classList.add("plus")
        }
    }

let summ = document.querySelectorAll(".plus");
for(let i of summ){
    i.addEventListener('click',function(){
        i.previousElementSibling.innerHTML++
    })
}
let minus = document.querySelectorAll(".minus");
for(let i of minus){
    i.addEventListener('click', function(){
        if(i.nextElementSibling.innerHTML <= 0)return;
        i.nextElementSibling.innerHTML--;
    })
}
