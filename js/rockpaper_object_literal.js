// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var myGame = {
	// In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces.
	// Names inside the object may be either strings or identifiers that are followed by a colon.
	// object literals can contain properties and methods:
	userChoice: "",
	computerChoice: "",
	outcome: "",

	playerPro: 0,
	compPro: 0,
	drawPro: 0,

	wins: {
		player: 0,
		computer: 0,
		draw: 0
	},

	rockBtn: document.getElementById('rockBtn'),
	paperBtn: document.getElementById('paperBtn'),
	scissorBtn: document.getElementById('scissorBtn'),
	
	// a method 
	generateComp(){
		let compChoices = ["rock", "paper", "scissor"];
		this.computerChoice = compChoices[Math.floor(Math.random()*3)];
	},

	compare: function(){
		let player = this.userChoice;
		let computer = this.computerChoice;

		if(player == computer)
		{
			this.outcome = "It's a draw!";
			this.wins.draw++;
		}
		else if(player == "rock")
		{
			if(computer == "paper")
			{
				this.outcome =  "<span class='text-danger'>Computer won!</span>"
				this.wins.computer++;
			} 
			else
			{
				this.outcome =  "<span class='text-success'>Player won!</span>"
				this.wins.player++;
			}
		}
		else if(player == "paper")
		{
			if(computer == "scissor")
			{
				this.outcome = "<span class='text-danger'>Computer won!</span>"
				this.wins.computer++;
			} 
			else
			{
				this.outcome =  "<span class='text-success'>Player won!</span>"
				this.wins.player++;
			}
		}
		else if(player == "scissor")
		{
			if(computer == "rock")
			{
				this.outcome =  "<span class='text-danger'>Computer won!</span>"
				this.wins.computer++;
			} 
			else
			{
				this.outcome =  "<span class='text-success'>Player won!</span>"
				this.wins.player++;
			}
		}
	},

	finalize: function(){
		document.getElementById('player_choice').innerHTML = this.userChoice;
		document.getElementById('computer_choice').innerHTML = this.computerChoice;
		document.getElementById('result').innerHTML = this.outcome;
		console.log(this.wins);

		this.playerPro = Math.floor(this.wins.player / (this.wins.player +this.wins.computer + this.wins.draw) * 100);
		this.compPro = Math.floor(this.wins.computer / (this.wins.player +this.wins.computer + this.wins.draw) * 100);
		this.drawPro = Math.floor(this.wins.draw / (this.wins.player +this.wins.computer + this.wins.draw) * 100);

		document.getElementById('playerPro').innerHTML = this.playerPro;
		document.getElementById('computerPro').innerHTML = this.compPro;
		document.getElementById('drawPro').innerHTML = this.drawPro;

	}

	///// module end /////
};

function start(choice){
	myGame.userChoice = choice;
	myGame.generateComp();
	myGame.compare()
	myGame.finalize();
};

let choices = ['rock', 'paper', 'scissor']
/*
setInterval(function(){
	start(choices[Math.floor(Math.random() * 3 )])
}, 10)
*/
myGame.rockBtn.addEventListener('click', () => {
	start("rock");
});
myGame.paperBtn.addEventListener('click', () => {
	start("paper");
});
myGame.scissorBtn.addEventListener('click', () => {
	start("scissor");
});