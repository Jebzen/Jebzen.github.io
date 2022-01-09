function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}

assignment("Explain how to use classes, constructors, properties and inheritance. Show relevant examples.");


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


assignment("What is the difference between a function and a method?");


function greet(){
    console.log("Hello")
}
console.log(Jeppe.toString())
console.log(person.text())


assignment("What is an HTML-Collection?");


console.log(document.forms[0])
console.log(document.forms.form_2)


assignment("What are Prototypes?");
assignment("What is Node.js, NPM, Babel, Webpack and the CLI?");