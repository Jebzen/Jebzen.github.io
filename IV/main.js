function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}


assignment("Show how to create an object in JavaScript and show the different ways to Get and Set properties inside an object.");


var person = {
    'name': 'Jeppe',
    'age': 22,
    increaseAge(){
        this.age++
    },
    aged(){
        if(this.age == 1){
            return `${this.age} year`
        } else{
            return `${this.age} years`
        }
    },
    describe(){
        return `${this.name} is ${this.aged()} old`
    }
}

console.log(person)

person.title = "student"
person.name = "Kaspar"
person.increaseAge();

console.log(person)
console.log(person.title)
console.log(person.describe())

var person2 = {
    'name': 'Emil',
    'age': 26
}

person.friend = person2;
person2.friend = person;
console.log(person)

delete person.friend;
console.log(person)


assignment("How are objects in JavaScript stored in memory?");


localStorage.setItem('Person', person.name)
console.log(localStorage.getItem('Person'))
console.log(localStorage.Person)

localStorage.Person = JSON.stringify(person);
console.log(localStorage.Person)

person3 = JSON.parse(localStorage.Person)
console.log(person3)


assignment("How can we convert a datatype to another datatype?");

console.log(typeof person)
console.log(parseInt(person))

str = "Hello 11";
str = parseInt(str)
console.log(str)

str = "11";
str = parseInt(str)
console.log(str)

str = "11.63262";
str = parseFloat(str)
console.log(str)
console.log()

data_input = document.getElementById("datatype");
data_input.addEventListener('change', ()=>{
    input = data_input.value;
    if(isNaN(input)){
        console.log(input + " is a string")
        //console.log(input)
    } else{
        if(parseFloat(input) === parseInt(input)){
            console.log(input + " is a integer")
            console.log(parseInt(input))
        } else{
            console.log(input + " is a float")
            console.log(parseFloat(input))
        }
    }
})
document.querySelector("form").addEventListener('submit', (e)=>{
    e.preventDefault();
})


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


assignment("Demonstrate and discuss at least 2 different JS design patterns.");