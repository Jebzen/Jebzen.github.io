//Keydown event
    //Find the span for "Wacky text"
    let wacky_text = document.getElementById("wacky_text");

    //Make an array with the colors for the colors i want the text to change to.
    let colors = ["red", "blue", "yellow", "green", "purple", "pink", "black"]

    //Add an eventListener to the whole document for a simple keydown
    document.addEventListener("keydown", function(){
        //Get a random number based on the length of the colors array
        let num = Math.floor(Math.random() * colors.length);

        //Make the color of the wacky text a random color from the array, based on the previous random number
        wacky_text.style.color = colors[num]; 

        /* 
        let num_1 = Math.floor(Math.random() * 255);
        let num_2 = Math.floor(Math.random() * 255);
        let num_3 = Math.floor(Math.random() * 255);
        let color = "rgb("+num_1+", "+num_2+", "+num_3+")";

        wacky_text.style.color = color;
        */
    });

//Keypress event with pedro
    //Get the text area
    let text_area = document.getElementById("text_area");

    //Have a really long sentence as a string
    //This is a copy-paste, sorry for profanity
    let sentence = "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.";

    //Split the string up into a array
    //It can be the same variable, so just replace it
    sentence = sentence.split(" ");

    //Have a starting number
    let num = 0;

    //Have an eventListener for the text area
    //This means that it only listens when you are in the text area
    //It listens every time you type in the text area
    text_area.addEventListener("keypress", function(event){
        //Prevent default typing
        event.preventDefault();

        //This is made, so when the sentence is over, it restarts
        if(num > sentence.length - 1){
            num = 0;
        }

        //Put the word from the array into the text area based on which number we are on
        text_area.value += sentence[num] + " ";

        //Add 1 to the number
        //This is last for the sake of good looping
        //This read a single keypress command a whole word in the array
        num++
    });

//load event for pedro & textarea
    //This is a small event, but helpfull
    //This deletes the text areas input on load
    window.addEventListener("load", function(){
        text_area.value = "";
    })

//click event for Whack A Mole
    //Large object for Whack A Mole
    whackAMole = {
        //First, the button to start
        btn: document.getElementById("whack_btn"),

        //Then all the moles
        //I chose SelectorAll because it's easier than to have lots of different variables
        moles: document.querySelectorAll(".moles"),

        //The points text in the game
        points_span: document.getElementById("points_span"),

        //Start of the game with 0 points
        points: 0,

        //Function to start the game
        start: function(){
            //A boolean variable to read if the game has started
            this.ongoing = true;

            //Remove the button
            this.btn.classList.add("d-none");

            //Show the point text
            this.points_span.classList.remove("d-none")

            //Remove all the moles
            this.moles.forEach( function(arr){
                arr.classList.add("d-none");
            });

            //Get a random number based on all the moles
            let num = Math.floor(Math.random() * whackAMole.moles.length);

            //Show the mole based on the random number
            this.moles[num].classList.remove("d-none")
        },
        //Start of with not having the game started
        ongoing: false,

        //Function when you hit a mole
        hitMole: function(){
            //Get 1 point
            this.points++

            //Remove all moles
            this.moles.forEach( function(arr){
                arr.classList.add("d-none");
            });

            //Get a random number based on all the moles
            let num = Math.floor(Math.random() * whackAMole.moles.length);

            //Show the mole based on the random number
            this.moles[num].classList.remove("d-none")

            //Add the point to the point text
            document.getElementById("points_span").innerHTML = "Points: " + this.points;
        }
    };

    //Remove the point text
    whackAMole.points_span.classList.add("d-none");

    //EventListener when you start the game
    whackAMole.btn.addEventListener("click", function(){
        whackAMole.start();
    });

    //EventListener when you hit a mole
    //Used a foreach to add the Listener to each mole
    whackAMole.moles.forEach( function(event){
        event.addEventListener("click", function(){

            //Condition based on if the game is ongoing or not
            if(whackAMole.ongoing == true){
                whackAMole.hitMole();
            };

        });
    });

//Mouseover
    //Get the "square"
    //It was first a square, but changed it to a circle late. Now it's just funny
    let square = document.getElementById("square");

    //Get the entire section
    let section = document.getElementById("section");

    //Empty object for dublication
    let clone;

    //Close the sqaure 37 times
    //Easy for loop
    for(let i = 0; i < 37; i++){
        //Close the square
        clone = square.cloneNode(true);

        //Append the clone to the section
        section.appendChild(clone);
    };

    //Chose all the squares
    //This is important that it comes after the cloning
    let squares = document.querySelectorAll("svg");

    //Add an eventListener for alle squares
    squares.forEach( function(e){
        //Remove the blue from the square when you mouse over it
        e.addEventListener("mouseover", function (){
            e.classList.remove("text-info");
        });
    });

//Dobule click
    //Get the button
    let dbl_btn = document.getElementById("dbl_btn");

    //Add an EventListen for the square with a dobule click
    //This functions as a callback function for the function below this function
    dbl_btn.addEventListener("dblclick", function(){
        setTimeout(message, 1000);
    })

    //Simple message function for a little alert
    const message = function() {  
        alert("This message is shown after 1 second");
    }

//Mouseout
    //Ran out of creativty
    //Chose to change the shadows based on mouseout
    let boxes = document.querySelectorAll(".shadow");

    //Choose each square
    boxes.forEach( function(e){
        //Add mouse out event
        e.addEventListener("mouseout", function(){
            //Little condition to check and change the shadow based on the already established shadow
            if(e.classList.contains("shadow-lg")){
                e.classList.remove("shadow-lg");
            } else{
                e.classList.add("shadow-lg");
            }
        })
    })