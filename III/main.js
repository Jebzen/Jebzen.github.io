function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}

assignment("Explain the difference between a function expression and a function declaration.");


//Declartions
functionA('Before A');
function functionA(a){
    console.log(a)
}

//Expression
//functionB('Before B');
const functionB = function(b){
    console.log(b)
}

functionA('After A');
functionB('After B');

let math = {
    'factit': function factorial(n) {
        console.log(n)
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
};

math.factit(3); //3;2;1;


assignment("What are anonymous functions?");


const form = document.querySelector("form");
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e)
});

(function() {
    console.log('Code runs!')
})();

// or

!function() {
    console.log('Code runs!')
}();


assignment("What are arrow functions and when would you use them?");

//Function expression alternative
    // Arrow Function Break Down

    // 1. Remove the word "function" and place arrow between the argument and opening body bracket
    var AA = (a) => {
        return a + 100;
    }
    console.log(AA(50))
    
    // 2. Remove the body braces and word "return" -- the return is implied.
    AA = (a) => a + 100;
    console.log(AA(50))    
    
    // 3. Remove the argument parentheses
    AA = a => a + 100;
    console.log(AA(50))    


assignment("What are callback functions? Show an example.");

function greeting(name) {
    console.log('Hello ' + name);
}
  
function processUserInput(callback) {
    var name = "Jeppe";
    callback(name);
}
  
processUserInput(greeting);
  

assignment("Explain how to use classes and inheritance. Show relevant examples.");

class person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    increase_age() {
        this.age++;
    }
    increase_age_to(age) {
        this.age = age;
    }
    toString(){
        return `${this.name} is ${this.age} years old`;
    }
    static text(){
        return "This class is Person. A template for people";
    }
}

class student extends person{
    constructor(name, age) {
        super(name, age);
        this.title = "Student";
    }
}

var Jeppe = new student("Jeppe", 22);
console.log(Jeppe)

Jeppe.increase_age()
console.log(Jeppe.toString())

console.log(person.text())
console.log(Jeppe.name)
console.log()