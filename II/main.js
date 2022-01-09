function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}

assignment("Explain and show how a foreach loop works.");


let arr =[
    'Jeppe',
    'Torben',
    'Mark',
    'Morten',
    'Emil'
]

arr.forEach(element => {
    console.log(element)
})
console.log();

arr.forEach(element => console.log(typeof element))
console.log();

function plus_string(str){
    type = typeof str;
    str += " is a " + type;
    return str;
}

arr.forEach(element => console.log(plus_string(element)))
console.log();

class person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString(){
        return `${this.name} is ${this.age} years old`;
    }
}

let arr2 =[
    new person("Jeppe", 22),
    new person("Emil", 23)
]
arr2.forEach(element => {
    console.log(element.age)
    console.log(element.toString())
})


assignment("Explain and show how a for loop works.");


for(var i = 0; i < 5; i++){
    console.log(i)
}
console.log()

for(var i = 0; i < arr2.length; i++){
    console.log(i)
}
console.log()

for(var i = 0; i < arr2.length; i++){
    console.log(arr2[i])
}
console.log()

for(var i = 0; i < arr.length; i++){
    if(arr[i] == 'Mark'){
        continue;
    }
    if(arr[i] == 'Emil'){
        break;
    }
    console.log(arr[i])
}
console.log()

let number = 0;
for(var i = 0; i < 100; i++){
    number += i;
    if(number > 50){
        break;
    }
    console.log(number)
}

assignment("What is strict mode and why do we use it?");

function strict() {
    // Function-level strict mode syntax
    'use strict';
    //mistypeVariable = 17;  
    function nested() { 
        return 'And so am I!'; 
    }
    return "Hi!  I'm a strict mode function!  " + nested();
}

function notStrict() { 
    mistypeVariable = 17;  
    return "I'm not strict."; 
}

console.log(strict());
console.log(notStrict());

assignment("Show examples of how to use Filter, Map and Sort methods and how to chain the methods?");

//Filter
const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];

const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);

//Map
    const prices = [20, 10, 30, 25, 15, 40, 80, 5];

    const products = [
        {name: 'gold star', price: 20},
        {name: 'mushroom', price: 40},
        {name: 'green shells', price: 30},
        {name: 'banana skin', price: 10},
        {name: 'red shells', price: 50}
    ];

    const saleProducts = products.map(product => {
        if(product.price > 30){
            return {name: product.name, price: product.price / 2}
        } else {
            return product;
        }
    });

    console.log(products, saleProducts);

//Reduce
    let scores = [
        {player: 'mario', score: 50},
        {player: 'yoshi', score: 30},
        {player: 'mario', score: 70},
        {player: 'crystal', score: 60}
    ];
    
    const marioTotal = scores.reduce((acc, curr) => {
        if(curr.player === 'mario'){
            acc += curr.score;
        }
        return acc;
    }, 0);
    
    console.log(marioTotal);

//Find
    scores = [10, 5, 0, 40, 60, 10, 20, 70];

    const firstHighScore = scores.find(score => score > 50);
    console.log(firstHighScore);

//Sort
    // example 1 - sorting strings
    const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

    // names.sort();
    names.reverse();
    console.log(names);

    // example 2 - sorting numbers
    scores = [10, 50, 20, 5, 35, 70, 45];

    // scores.sort();
    scores.reverse();
    console.log(scores);

    // example 3 - sorting objects
    const players = [
        {name: 'mario', score: 20},
        {name: 'luigi', score: 10},
        {name: 'chun-li', score: 50},
        {name: 'yoshi', score: 30},
        {name: 'shaun', score: 70}
    ];

    // players.sort((a,b) => {
    //   if(a.score > b.score){
    //     return -1;
    //   } else if (b.score > a.score){
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });

    players.sort((a,b) => b.score - a.score);

    console.log(players);

//Chain
    const promos = products
        .filter(product => product.price > 20)
        .map(product => `the ${product.name} is ${product.price / 2} pounds`);
    
    console.log(promos);


assignment("What is the Event object and how do we use it?");

const form = document.querySelector("form");
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    text = document.getElementById("input_text").value;
    console.error(text);
})

let colors = [
    'primary',
    'secondary',
    'info',
    'danger',
    'success',
    'warning',
    'light',
    'dark'
]

const button = document.getElementById("submit_button");
button.addEventListener('click', ()=>{
    while (button.classList.length > 0) {
        button.classList.remove(button.classList.item(0));
    }
    button.classList.add('btn');
    button.classList.add("btn-" + colors[Math.floor(Math.random() * colors.length)])
})

window.addEventListener('load', ()=>{
    console.log("loaded")
})


assignment("Demonstrate and discuss at least 2 different JS design patterns.");
