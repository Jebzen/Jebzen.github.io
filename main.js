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
    let str_2 = capname.substring(0, 1).toUpperCase();
    console.log(str_2+str_1);

    function capfirst(name){
        let str_1 = name.slice(1);
        let str_2 = name.substring(0, 1).toUpperCase();
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