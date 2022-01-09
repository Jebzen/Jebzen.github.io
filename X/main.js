function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}

assignment("What is Firebase?");
assignment("How do you make CRUD functionality with firebase?");
assignment("What is a real-time listener?");
assignment("Why would you use Firebase instead of a relational database?");
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