function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}

assignment("Explain the difference between: var, const and let? Show some examples.");


console.log(I) //console.log(II) //console.log(III)
console.log()

function print_console(){
    for (var i = 0; i < arguments.length; ++i){
        console.log(arguments[i])
    }
    console.log()
}

var I = "Var";
let II = "Let";
const III = "Const";

print_console(I, II, III)

var I = "Var II";
//let II = "Let II";
//const III = "Const II";

print_console(I, II, III)

I = "Var III"
II = "Let III"
//III = "Const III"

print_console(I, II, III)

if(true){
    var I = "Var IV";
    let II = "Let IV";
    const III = "Const IV";
}
print_console(I, II, III)

if(true){
    I = "Var V";
    II = "Let V";
    //III = "Const V";
}
print_console(I, II, III)

if(true){
    var IV = "Var New scope";
    let V = "Let New scope";
    const VI = "Const New scope";
    print_console(IV, V, VI)
}
print_console(IV)

IV = "Var New";
V = "Let New";
VI = "Const New";

print_console(IV, V, VI)

for(x = 0; x < 5; x++){  //index has a global scope
    console.log(x)
} 
console.log();


assignment("Explain what template literals/template strings are? Show some examples.");


let str = `Hello`;
console.log(str); console.log();

str = `My strings are I: ${I}, II: ${II}, III: ${III}. `
console.log(str); console.log();

str = `Look at what i can do: 
    "Hello" Johnny, 
    'Hello Tobias'.`
console.log(str); console.log();

let number1 = 5;
let number2 = 10;

str = `Calculations:
        ${number1 + number2}`
console.log(str); console.log();

str = `Calculations:
        ${(number1 * number1) + number2}`
console.log(str); console.log();


assignment("Which are the datatypes of JavaScript?");


str = `Datatypes are:
    strings
    numbers
    booleans
    undefined
    null`

console.log(str); console.log();

function print_datatypes(){
    for (var i = 0; i < arguments.length; ++i){
        console.log(typeof arguments[i])
    }
    console.log()
}

var truth = true;
var obj = {
    string: "Hello"
};

print_datatypes(str, number1, truth, obj, obj.unknown)


assignment("Explain how to use classes, constructors, properties and methods. Show relevant examples.");


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


assignment("What is Node.js, NPM, Babel, Webpack and the CLI?");
