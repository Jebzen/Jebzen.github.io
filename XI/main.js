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

function multiply(multiplier, ...theArgs) {
    return theArgs.map(element => {
        return multiplier * element
    })
}
  
let arr = multiply(2, 15, 25, 42)
console.log(arr)  // [30, 50, 84]
  
function sum(x, y, z) {
    return x + y + z;
}
  
const numbers = [1, 2, 3];
  
console.log(sum(...numbers));
// expected output: 6
  
console.log(sum.apply(null, numbers));
// expected output: 6

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];

console.log(numberStore)


assignment("How can we use Sets to create unique values? show some examples.");
assignment("In JS - What are Prototypes?");
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