function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}

assignment("How do you use the Rest parameter and the Spread operator?");


function myFun(a,  b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
}
myFun("one", "two", "three", "four", "five", "six")
myFun("one", "two")

//rest parameter
function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
        return multiplier * element
    })
}
  
let arr = multiply(2, 15, 25, 42)
console.log(arr)  // [30, 50, 84]

//Normal function
function sum(x, y, z) {
    return x + y + z;
}
  
const numbers = [1, 2, 3];

//Using spread on sum function
console.log(sum(...numbers));
// expected output: 6
  
console.log(sum.apply(null, numbers));
// expected output: 6

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];

console.log(numberStore)


assignment("How can we use Sets to create unique values? show some examples.");


// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Create a Set
const letters = new Set();

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
letters.add(c);

console.log(letters)
// Create an Iterator
let myIterator = letters.values();

// List all Values
let text = "";
for (const entry of myIterator) {
    text += entry;
}
console.log(text)

myIterator = letters.entries();

// List all Entries
text = "";
for (const entry of myIterator) {
  text += entry;
}
console.log(text)

assignment("In JS - What are Prototypes?");


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";


Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
  
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log(myFather, myMother)
console.log(myFather.nationality)
console.log(myFather.name())



assignment("How are objects in JavaScript stored in memory?");


var person = {
    'name': 'Jeppe',
    'age': 22
}
localStorage.setItem('Person', person.name)
console.log(localStorage.getItem('Person'))
console.log(localStorage.Person)

localStorage.Person = JSON.stringify(person);
console.log(localStorage.Person)

person3 = JSON.parse(localStorage.Person)
console.log(person3)


assignment("What is Node.js, NPM, Babel, Webpack, CLI and how is the setup?");