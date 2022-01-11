function assignment(str){
    console.log();
    console.warn(str);
    console.log();
}

assignment("What is Node.js, NPM, Babel, Webpack and the CLI?");
assignment("What is the difference between production mode and development mode in Node.js?");
assignment("What is a module in JavaScript?");
assignment("Show different ways to import and export classes, variables, and functions.");

/*
//Export
    // export an array
    export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // export a constant
    export const MODULES_BECAME_STANDARD_YEAR = 2015;

    //if no export in front
    export {months, const}

    Named export 	            Default export
    export class User {...} 	export default class User {...}
    import {User} from ... 	    import User from ...

//Import
    import {months} from 'main.js';


    import * as MODULE_1 from 'main.js';


    import months from 'main.js';
    import MODULES_BECAME_STANDARD_YEAR from 'main.js';
*/

assignment("Show examples of how to use Filter, Map and Sort methods and how to chain the methods?");


    //Filter
    const users = [
        {name: 'shaun', premium: true},
        {name: 'yoshi', premium: false},
        {name: 'mario', premium: false},
        {name: 'chun-li', premium: true}
    ];

    const premiumUsers = users.filter(user => user.premium);
    console.log(premiumUsers);

    //Map
    const prices = [20, 10, 30, 25, 15, 40, 80, 5];

    const products = [
        {name: 'gold star', price: 20},
        {name: 'mushroom', price: 40},
        {name: 'green shells', price: 30},
        {name: 'banana skin', price: 10},
        {name: 'red shells', price: 50}
    ];

    const saleProducts = products.map(product => {
        if(product.price > 30){
            return {name: product.name, price: product.price / 2}
        } else {
            return product;
        }
    });

    console.log(products, saleProducts);

    //Reduce
    let scores = [
        {player: 'mario', score: 50},
        {player: 'yoshi', score: 30},
        {player: 'mario', score: 70},
        {player: 'crystal', score: 60}
    ];

    const marioTotal = scores.reduce((acc, curr) => {
        if(curr.player === 'mario'){
            acc += curr.score;
        }
        return acc;
    }, 0);

    console.log(marioTotal);

    //Find
    scores = [10, 5, 0, 40, 60, 10, 20, 70];

    const firstHighScore = scores.find(score => score > 50);
    console.log(firstHighScore);

    //Sort
    // example 1 - sorting strings
    const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

    // names.sort();
    names.reverse();
    console.log(names);

    // example 2 - sorting numbers
    scores = [10, 50, 20, 5, 35, 70, 45];

    // scores.sort();
    scores.reverse();
    console.log(scores);

    // example 3 - sorting objects
    const players = [
        {name: 'mario', score: 20},
        {name: 'luigi', score: 10},
        {name: 'chun-li', score: 50},
        {name: 'yoshi', score: 30},
        {name: 'shaun', score: 70}
    ];

    // players.sort((a,b) => {
    //   if(a.score > b.score){
    //     return -1;
    //   } else if (b.score > a.score){
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });

    players.sort((a,b) => b.score - a.score);

    console.log(players);

    //Chain
    const promos = products
        .filter(product => product.price > 20)
        .map(product => `the ${product.name} is ${product.price / 2} pounds`);

    console.log(promos);
