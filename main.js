//Exercise 1
    console.info('%cExercise 1', 'color: white; background: grey;');

    let baseline = 7;
    let height = 4;

    let area = baseline * height * 0.5;

    console.log("Area:", area);

//Exercise 2
    console.info('%cExercise 2', 'color: white; background: grey;');

    const firstname = "Jeppe";
    let lastname = "Bentzen";

    let salary = 25000;
    let lmc = (salary/100) * 8;
    const tax =  0.245;
    const holipay = 0.125;

    console.log("First name:", firstname);
    console.log("Last Name:", lastname);
    console.log("Monthly Salary:", salary);
    console.log("Labor Market Contributions:", lmc);
    console.log("Tax:", tax*100, "% or just:", tax);
    console.log("Holiday Pay:", salary*holipay, "DKK extra");

    let paymentString = `${firstname} ${lastname} has a salary of ${salary} DKK a month. Their labor market contribution is ${lmc} DKK a month, and they have to pay a tax of ${tax*100}%, which will earn them ${salary-(salary*tax)}DKK a month. But because of the holiday, they get paid an extra ${salary*holipay} DKK a month in the months of June and Juli.`;
    console.log(paymentString);

//Exercise 3
    console.info('%cExercise 3', 'color: white; background: grey;');

    let sentence = "Yes, the groups consists of Bran, Charlie, Jeppe and Alixis. I think they all have a Multimediadesigner AP degree";
    console.log("Index Of 'Jeppe':", sentence.indexOf("Jeppe"));
    console.log("Sentence Length", sentence.length);

//Exercise 4
    console.info('%cExercise 4', 'color: white; background: grey;');

    let capname = "jeppe"

    let str_1 = capname.slice(1);
    let str_2 = capname[0].toUpperCase();
    console.log(str_2+str_1);

    function capfirst(name){
        let str_1 = name.slice(1);
        let str_2 = name[0].toUpperCase();
        return str_2+str_1;
    };

    console.log("Function for Capitalize Name: ", capfirst("christian"));

//Exercise 5
    console.info('%cExercise 5', 'color: white; background: grey;');
    
    let accBalance = 4000;
    console.log("Account balance:", accBalance);

    accBalance++;
    console.log("Account balance:", accBalance);

    accBalance++;
    accBalance++;
    accBalance++;
    accBalance++;
    console.log("Account balance:", accBalance);

    accBalance--;
    console.log("Account balance:", accBalance);

    accBalance -= 4;
    console.log("Account balance:", accBalance);

    accBalance += 50;
    console.log("Account balance:", accBalance);

//Exercise 6
    console.info('%cExercise 6', 'color: white; background: grey;');

    let classmates = ['Sara Nikoline Schou Andreasen', 'Amanda Eileen Morales Bløndal', 'Caroline Friis', 'Nikolaj Benjamin Juul Jensen', 'Mie Grønkjær Bechmann Jørgensen'];
    console.log("Classmates:", classmates);

    classmates.push('Jeppe Emil Bentzen');
    console.log("Classmates + me:", classmates);

    classmates.push('Lotte Kildebro');
    console.log(classmates);

    classmates[3] = 'Karolina Maria Mojsa';
    console.log(classmates);

    classmates.pop();
    console.log(classmates);

    console.log("Classmates length:", classmates.length);
    console.log("Where is my name in the array?", classmates.indexOf('Jeppe Emil Bentzen'));
    console.log("Does classmates include my name?", classmates.includes('Jeppe Emil Bentzen'));

//Exercise 6.1
    console.info('%cExercise 6.1', 'color: white; background: grey;');

    let dkActors = ["Mads Mikkelsen", "Johan Philip 'Pilou' Asbæk", "Nikolaj Coster-Waldau"];
    let enActors = ["Matthew Mercer", "Leonardo Dicaprio", "Chadwick Boseman"];

    console.log("Danish actors:", dkActors);
    console.log("American actors:", enActors);

    let actors = dkActors.concat(enActors);
    console.log("Combined actors:", actors);

//Exercise 6.2
    console.info('%cExercise 6.2', 'color: white; background: grey;');

    console.log("Index of Leonardo:", actors.indexOf("Leonardo Dicaprio"));

    actors[actors.indexOf("Leonardo Dicaprio")] = "Leonard Wilhelm Dicaprio";
    console.log(actors);

    console.log(actors.join(", "));

//Exercise 7
    console.info('%cExercise 7', 'color: white; background: grey;');

    let myAge = 22;
    let classAge = 23;

    console.log("Same age?", myAge==classAge, "I'm older?", myAge>classAge, "They're older?", myAge<classAge, "Different age?", myAge!=classAge, "I'm equal or less?", myAge<=classAge, "I'm equal or more?", myAge>=classAge);

//Exercise 8
    console.info('%cExercise 8', 'color: white; background: grey;');

    let str = "My name is Jeppe, and i'm 22 years old";
    console.log(str);

    console.log("The variables typeof:", typeof(str));

    let strArr = str.split(" ");
    console.log(typeof(strArr.indexOf("22")));

//Exercise 9
    console.info('%cExercise 9', 'color: white; background: grey;');

    //let firstname = "Jeppe";
    //let lastname = "Bentzen";
    //let myage = 22;
    let favSeries = "Jojo's Bizarre Adventure";
    let favMovie = "The End of Evangelion";
    let favBook = "Angels and Devils";

    let presentation = `Hello world! My name is ${firstname} ${lastname} and i'm ${myAge} years old. My favorite series is ${favSeries} and my favorite movie is ${favMovie}. Even though i don't read a lot, my favorite book is still ${favBook}.`;
    console.log(presentation);

//Exercise 10
    console.info('%cExercise 10', 'color: white; background: grey;');

    let i = 0;

    while(i < 10){
        i++;
        console.log(i);
    };

//Exercise 11
    console.info('%cExercise 11', 'color: white; background: grey;');

    i = 10;

    while(i > 0){
        console.log(i);
        i--;
    };

//Exercise 12
    console.info('%cExercise 12', 'color: white; background: grey;');

    x = 0;
    i = 1;

    while(i < 11){
        x += i
        i++

        console.log(x);
    };

//Exercise 13
    console.info('%cExercise 13', 'color: white; background: grey;');
    
    i = 1;
    let arr = [];

    while(i < 11){
        num = Math.floor(Math.random() * 11);
        arr.push(num);
        i++
    };

    console.log(arr);

//Exercise 14
    console.info('%cExercise 14', 'color: white; background: grey;');

    i = 0;
    console.log(firstname);

    do{
        console.log(i+1, ":", firstname[i]);
        i++;
    } while(i < firstname.length);

    /* 
    Difference between while and do while loops is where the condition is "executed". 
    In a while loop, it will excute the code once before checking if the condition is met.
    In a do while loop, it will first check the condition and then stop the execution if the condition isn't met.
    */

//Exercise 15
    console.info('%cExercise 15', 'color: white; background: grey;');

    for (let i = 1; i < 11; i++){
        console.log(i);
    };

//Exercise 16
    console.info('%cExercise 16', 'color: white; background: grey;');

    
    for (let i = 10; i > 0; i--){
        console.log(i);
    };

//Exercise 16.1
    console.info('%cExercise 16.1', 'color: white; background: grey;');

    
    let tri = "";
    i = 1

    while (i < 7){
        tri = tri + "#";
        console.log(tri);
        i++;
    };

//Exercise 17
    console.info('%cExercise 17', 'color: white; background: grey;');

    let actArr = ["Matthew Mercer", "Margot Robbie", "Ryan Renolds", "Marisha Ray", "Adam Driver"];

    for (let i = 0; i < actArr.length; i++){
        if(i == 3){
            console.log("Ladies and Gentlemen!", actArr[i]);
        } else{
            console.log(actArr[i]);
        }
    };

//Exercise 18
    console.info('%cExercise 18', 'color: white; background: grey;');

    for (let i = 0; i < actArr.length; i++){
        if(i == 3){ 
            break; 
        };
        console.log(actArr[i]);
    };

//Exercise 19
    console.info('%cExercise 19', 'color: white; background: grey;');

    let priceTV = 1000;    

    let order = ["color", "remote", "flat", 2020];
    let orderStr = order.join(', ');

    if(order.includes("color")){
        priceTV += 500;
    };
    if(order.includes("remote")){
        priceTV += 150;
    };
    if(order.includes("flat")){
        priceTV = priceTV * 2;
    };

    if(order[order.length - 1] == 1970){priceTV * 1.05}
    else if(order.includes(1980)){ priceTV = priceTV * 1.10}
    else if(order.includes(1990)){ priceTV = priceTV * 1.20}
    else if(order.includes(2000)){ priceTV = priceTV * 1.40}
    else if(order.includes(2010)){ priceTV = priceTV * 1.80}
    else if(order.includes(2020)){ priceTV = priceTV * 2.60}

    console.log("Price of a", orderStr, "TV:", priceTV);  

//Exercise 19.1
    console.info('%cExercise 19.1', 'color: white; background: grey;');

    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log("Fizzbuzz");
        } else if(i % 3 === 0){
            console.log("Fizz");
        } else if(i % 5 === 0){
            console.log("Buzz");
        } else{
            console.log(i);
        }
    };

//Exercise 20
    console.info('%cExercise 20', 'color: white; background: grey;');

    module = function(){
        let str = "Jeppe Bentzen ";
        let str_2 = "is cool";
        return str.concat(str_2);
    }

    console.log(module());

//Exercise 21
    console.info('%cExercise 21', 'color: white; background: grey;');

    ex_21_1 = function(firstname, lastname){
        let str = "My name is " + firstname + " " + lastname + ". And this is the 1st function";
        return str;
    };

    function ex_21_2(firstname, lastname){
        let str = "My name is " + firstname + " " + lastname + ". And this is the 2nd function";
        return str;
    };

    let ex_21_3 = (firstname, lastname) =>{
        let str = "My name is " + firstname + " " + lastname + ". And this is the 3rd function";
        return str;
    };

    console.log(ex_21_1("Jeppe", "Bentzen"));
    console.log(ex_21_2("Jeppe", "Bentzen"));
    console.log(ex_21_3("Jeppe", "Bentzen"));

//Exercise 22
    console.info('%cExercise 22', 'color: white; background: grey;');

    function square(x){
        return x * x;
    };

    console.log(square(10));
    
//Exercise 24
    console.info('%cExercise 24', 'color: white; background: grey;');

    let piArr = [1, 50, 7845];

    for(let i = 0; i < piArr.length; i++){
        piArr[i] = piArr[i] * 3.14;
        console.log(piArr[i]);
    };
    
//Exercise 26
    console.info('%cExercise 26', 'color: white; background: grey;');

    let bird = {
        sound: 5,
        desc: "Small and can fly",
        name: "bird"
    };

    let dog = {
        sound: 10,
        desc: "Medium and can run",
        name: "dog"
    };

    let hippo = {
        sound: 15,
        desc: "Big and can swim",
        name: "hippo"
    };

    let birdSen = `This animal is a ${bird.name}. It has a sound of ${bird.sound} and is ${bird.desc}`;
    let dogSen = `This animal is a ${dog.name}. It has a sound of ${dog.sound} and is ${dog.desc}`;
    let hippoSen = `This animal is a ${hippo.name}. It has a sound of ${hippo.sound} and is ${hippo.desc}`;

    console.log(birdSen);
    console.log(dogSen);
    console.log(hippoSen);
    
//Exercise 27
    console.info('%cExercise 27', 'color: white; background: grey;');

    bird.sound = 4;
    dog["sound"] = 9;

    console.log(bird.sound);
    console.log(dog.sound);
    
//Exercise 28
    console.info('%cExercise 28', 'color: white; background: grey;');

    let aniArr = [];
    aniArr.push(bird, dog, hippo);
    
    for(let i = 0; i < aniArr.length; i++){
        console.log("Name:", aniArr[i]["name"]);
        console.log("Description:", aniArr[i]["desc"]);
        console.log("Sound:", aniArr[i]["sound"]);
    };
    
//Exercise 29
    console.info('%cExercise 29', 'color: white; background: grey;');

    num = Math.floor(Math.random() * 3);

    console.log("Random animal: ", aniArr[num].name);

    let num2 = Math.floor(Math.random() * 2) + 1;

    console.log("Random property:", Object.keys(aniArr[num])[num2], aniArr[num][Object.keys(aniArr[num])[num2]]);
   
//Exercise 30
    console.info('%cExercise 30', 'color: white; background: grey;');

    let quiz_questions = ["What is 9 + 10?", "How long is the average person pregnant for?"];
    let quiz_answers = ["19", "9 months"];

    //Object
    let quiz_object = {
        questions: quiz_questions,
        answers: quiz_answers,
        points: 0
    };

    document.addEventListener('keydown', (e) =>{
        if (e.keyCode == 69){
            quiz();
        };
    });

    function quiz(){

        quiz_object.points = 0;

        for(let i = 0; i < quiz_object.questions.length; i++){
            let question = prompt(quiz_object.questions[i]);

            if(question == quiz_object.answers[i]){
                quiz_object.points++
            };
        };

        alert("You completed the quiz with: " + quiz_object.points + " points");
    };

    console.log("Press E to begin the quiz");


