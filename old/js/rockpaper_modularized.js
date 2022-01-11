// Global variables
var computerChoice;
var userChoice;
let game;

const rockBtn = document.getElementById('rockBtn').addEventListener('click', () => {
    userChoice = "rock";
    playerHTML.innerHTML = userChoice;
    play();
});
const paperBtn = document.getElementById('paperBtn').addEventListener('click', () => {
    userChoice = "paper";
    playerHTML.innerHTML = userChoice;
    play();
});
const scissorBtn = document.getElementById('scissorBtn').addEventListener('click', () => {
    userChoice = "scissor";
    playerHTML.innerHTML = userChoice;
    play();
});

const playerHTML = document.getElementById('player_choice');
const compHTML = document.getElementById('computer_choice');
const resultHTML = document.getElementById('result');

// main function containing the game logic
function play() {
	// user input?
	computerInput();
	game = compare(userChoice, computerChoice);

    resultHTML.innerHTML = display();
}

// method generating the computer's choice
function computerInput() {
    let compchoices = ["rock", "paper", "scissor"];
    computerChoice = compchoices[Math.floor(Math.random() * 3)];
    compHTML.innerHTML = computerChoice;
}

// method comparing the choices
function compare(x, y) {
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
}

// method displaying the choices
function display() {
    switch(game){
        case 0:
            return "It's a draw!";
        case 1:
            return "<span class='text-success'>Player won!</span>";
        case 2:
            return "<span class='text-danger'>Computer won!</span>";
        default:
            return "<b class='text-danger'>ERROR</b>";
    }
}
