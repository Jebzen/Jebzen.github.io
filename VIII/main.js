function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}

assignment("Explain what localStorage is.");


var person = {
    'name': 'Jeppe',
    'age': 22
}


assignment("Show a practical example with localStorage.");


localStorage.setItem('Person', person.name)
console.log(localStorage.getItem('Person'))
console.log(localStorage.Person)

localStorage.Person = JSON.stringify(person);
console.log(localStorage.Person)

person3 = JSON.parse(localStorage.Person)
console.log(person3)


assignment("What is a callback function?");


function greeting(name) {
    console.log('Hello ' + name);
}
  
function processUserInput(callback) {
    var name = "Jeppe";
    callback(name);
}
  
processUserInput(greeting);


assignment("What is Node.js, NPM, Babel, Webpack, CLI and how is the setup?");
assignment("Demonstrate and discuss at least 2 different JS design patterns.");