function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}

assignment("Show or explain different ways of selecting elements from the DOM.");


const element1 = document.querySelector("form");
const element2 = document.querySelector("#form");
const element3 = document.querySelector(".desc");
const element4 = document.getElementById("form");
const element5 = document.getElementsByClassName("form-control");
const element6 = document.getElementsByTagName("input");

console.log(element1, element2, element3, element4, element5, element6)


assignment("How would you select multiple elements in the DOM? Show practical examples.");


var paragraphs_single = document.querySelector("p")
console.log(paragraphs_single);

var paragraphs = document.querySelectorAll("p")
console.log(paragraphs);

paragraphs = document.querySelector("form").querySelectorAll("input")
console.log(paragraphs);


assignment("How would you select elements inside a form?");


console.log(element1[0])
console.log(element1.input_2)
element1.input_1.value = "String from console"
element1.input_2.value = 552.532


assignment("What are regular expressions and how can we use them?");


var text = `hgrkojy3 qi5b ryk 53n90jy
    ti9
    b3nrhgGS GisFu83ntmin425 631+0531+69
    42+050+23+2 tg2 g4 42tl2o4i5k130+
    g,lerwkmhg ow gkwr4lyå345y
    34yhS GGS 'Duck
    SG SGF SG 
    5435y36357yis u345G FGA 7 53y7 35y7b3y v
    yh53sG S WRQ AJIK
    lrlhg SG Duck
    3lyg  SF F
    elg vpkes4tlLA DLKPKJ`;

var Case = text.match(/Duck/i);
var Global = text.match(/is/g);
var multiline = text.match(/^is/m);

var bracket = text.match(/[b]/g);
var digits = text.match(/[1-4]/g);
var alternatives = text.match(/(SG|SF)/g);

var digit = text.match(/\d/g);
var whitespace = text.match(/\s/g);
var beginning1 = text.search(/\bhg/);
var beginning2 = text.search(/5G\b/);
var unicode = text.match(/\u0057/g);

var leastone = text.match(/o+/g);
var zero = text.match(/lo*/g);
var zeroone = text.match(/10?/g);

function print_console(){
    for (var i = 0; i < arguments.length; ++i){
        console.log(arguments[i])
    }
}

print_console(Case, Global, multiline, bracket, digits, alternatives, digit, whitespace, beginning1, beginning2, unicode, leastone, zero, zeroone)


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