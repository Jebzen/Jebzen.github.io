/*

    Stuff to handle ;-):
    1. Make the fields clickable (player0 uses "X", player1 "0")
    2. Keep track of all used fields (fieldsPlayed) and of the fields each player chose (fieldsPlayer0, fieldsPlayer1)
    3. Avoid that úsed fields can be played again and implement feedback like "Field already taken" (alert();)
    4. Check for winning combinations
    5. Implement feedback to the players (winning or game is a draw)
    6. End the game, avoid further playing
    7. Add a "Play again button"
    8. Implement "eternal" game statistics (using local storage!)
    9. Style the game as fancy and responsive as you can ;-)

*/

// global game variables
var player, fields, fieldsPlayed, fieldsPlayer0, fieldsPlayer1, msg, playButton, stats, x_won = 0, o_won = 0;

//Find stats
stats= [];
if(localStorage && localStorage.getItem('stats')){

    stats = JSON.parse(localStorage.getItem('stats'));

    stats.forEach(element => {
        if(element == "O"){
            o_won++
        }
        if(element == "X"){
            x_won++
        }
    });

    document.getElementById("o-won").innerHTML = o_won;
    document.getElementById("x-won").innerHTML = x_won;
}

//Null player
player = 0;

//Find all fields
fields = [];
fields = document.getElementsByTagName('td');

//Empty the fields you'd played
fieldsPlayed = [];
fieldsPlayer0 = [];
fieldsPlayer1 = [];

//Message node
msg = document.getElementById('msg');

//Play again/restart button
playButton = document.getElementById('playAgain').addEventListener('click', () => {
    // restart the game
    window.location.reload(true)
});

//For each field, add events
for (let i = 0; i < fields.length; i++) {
    //Play
    fields[i].addEventListener('click', play)

    //Helpful hover
    fields[i].addEventListener('mouseover', hover)
    fields[i].addEventListener('mouseout', hoverdel)
}

//Helpful hover function
function hover(){
    if(!fieldsPlayed.includes(this.id)){
        if(player == 1){
            this.innerHTML = 'O';
            this.classList.add("text-secondary");
        } else if(player === 0){
            this.innerHTML = 'X';
            this.classList.add("text-secondary");
        }
    }
}
//Helpful hover function end
function hoverdel(){
    if(!fieldsPlayed.includes(this.id)){
        if(player === 1){
            this.innerHTML = '';
            this.classList.remove("text-secondary");
        } else if(player === 0){
            this.innerHTML = '';
            this.classList.remove("text-secondary");
        }
    }
}

//Play function for each player
function play() {
    // game core mechanics, marking the fields
    if (fieldsPlayed.includes(this.id)) {
        alert('No can do!')
    }
    if (player === 0 && !fieldsPlayed.includes(this.id)) {
        this.innerHTML = 'X';
        this.classList.add("text-primary");
        this.classList.remove("text-secondary");
        fieldsPlayer0.push(parseInt(this.id));
        player = 1
    } else if (player === 1 && !fieldsPlayed.includes(this.id)) {
        this.innerHTML = 'O';
        this.classList.add("text-danger");
        this.classList.remove("text-secondary");
        fieldsPlayer1.push(parseInt(this.id));
        player = 0
    }

    fieldsPlayed.push(this.id);
    console.log(fieldsPlayed);

    win();
}

//All winning conditions
function win() {
    // analyzing field choices, winning conditions, feedback
    if (fieldsPlayer0.includes(1) && fieldsPlayer0.includes(2) && fieldsPlayer0.includes(3) ||
        fieldsPlayer0.includes(4) && fieldsPlayer0.includes(5) && fieldsPlayer0.includes(6) ||
        fieldsPlayer0.includes(7) && fieldsPlayer0.includes(8) && fieldsPlayer0.includes(9) ||
        fieldsPlayer0.includes(1) && fieldsPlayer0.includes(4) && fieldsPlayer0.includes(7) ||
        fieldsPlayer0.includes(2) && fieldsPlayer0.includes(5) && fieldsPlayer0.includes(8) ||
        fieldsPlayer0.includes(3) && fieldsPlayer0.includes(6) && fieldsPlayer0.includes(9) ||
        fieldsPlayer0.includes(1) && fieldsPlayer0.includes(5) && fieldsPlayer0.includes(9) ||
        fieldsPlayer0.includes(3) && fieldsPlayer0.includes(5) && fieldsPlayer0.includes(7)) {

        // player 0 won
        msg.innerHTML = 'Player X won!';
        gameOver(1);

    } else if (fieldsPlayer1.includes(1) && fieldsPlayer1.includes(2) && fieldsPlayer1.includes(3) ||
        fieldsPlayer1.includes(4) && fieldsPlayer1.includes(5) && fieldsPlayer1.includes(6) ||
        fieldsPlayer1.includes(7) && fieldsPlayer1.includes(8) && fieldsPlayer1.includes(9) ||
        fieldsPlayer1.includes(1) && fieldsPlayer1.includes(4) && fieldsPlayer1.includes(7) ||
        fieldsPlayer1.includes(2) && fieldsPlayer1.includes(5) && fieldsPlayer1.includes(8) ||
        fieldsPlayer1.includes(3) && fieldsPlayer1.includes(6) && fieldsPlayer1.includes(9) ||
        fieldsPlayer1.includes(1) && fieldsPlayer1.includes(5) && fieldsPlayer1.includes(9) ||
        fieldsPlayer1.includes(3) && fieldsPlayer1.includes(5) && fieldsPlayer1.includes(7)) {

        // player 1 won
        msg.innerHTML = 'Player O won!'
        gameOver(2);

    } else if (fieldsPlayed.length == 9) {

        // game is a draw
        msg.innerHTML = 'It\'s a draw!'
        gameOver(0);
    }

}

function gameOver(x) {
    // ending the game 
    for (let i = 0; i < fields.length; i++) {
        fields[i].removeEventListener('click', play)
    }

    if(x === 1){
        stats.push('X');
    } else if(x == 2){
        stats.push('O');
    }
    
    localStorage.setItem( 'stats', JSON.stringify(stats));
}