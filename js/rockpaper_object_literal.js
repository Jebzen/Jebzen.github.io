// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var myGame = {
	// In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces.
	// Names inside the object may be either strings or identifiers that are followed by a colon.
	// object literals can contain properties and methods:
	userChoice: "",
	compChoices: ["rock", "paper", "scissor"],
	computerChoice: "",
	outcome: 0,
	
	// a method 
	functionkey: function () {
		'use strict';
	},

	generateComp(){
		myGame.computerChoice = myGame.compChoices[Math.floor(Math.random()*3)];
		document.getElementById('computer_choice').innerHTML = myGame.computerChoice;
	},

	compare: function(x,y){
		if(x == y){
			return 0;
		} else if(x == "rock"){
			if(y == "paper"){
				return 2
			} else{
				return 1
			}
		}else if(x == "paper"){
			if(y == "scissor"){
				return 2
			} else{
				return 1
			}
		}else if(x == "scissor"){
			if(y == "rock"){
				return 2
			} else{
				return 1
			}
		}
	},

	///// module end /////
};

function play() {
	console.log('Playing');
	/*
	myGame.userChoice = x;
    document.getElementById('player_choice').innerHTML = myGame.userChoice;
	myGame.generateComp();
	myGame.outcome = myGame.compare(myGame.userChoice, myGame.computerChoice)
	*/
}

const buttons = document.querySelectorAll("button");
console.log(buttons);

for(i = 0; i > buttons.length; i++){
	buttons[i].addEventListener('click', play)
};