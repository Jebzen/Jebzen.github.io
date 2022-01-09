function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}

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


assignment("How would you select elements inside a form?");


const form = document.querySelector("form");
console.log(form[0])
console.log(form.input_2)
form.input_1.value = "String from console"
form.input_2.value = 552.532

assignment("What is the event object and how do we use it? ");

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

const button = document.querySelector("input[type=submit]");
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


assignment("What is preventDefault and why do we use it?");


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    text = form.input_1.value;
    console.error(text);
})


assignment("Demonstrate and discuss at least 2 different JS design patterns.");
