//Keydown event
    let wacky_text = document.getElementById("wacky_text");
    let colors = ["red", "blue", "yellow", "green", "purple", "pink", "black"]

    document.addEventListener("keydown", function(){
        /* 
        let num = Math.floor(Math.random() * colors.length);

        wacky_text.style.color = colors[num]; 
        */

        let num_1 = Math.floor(Math.random() * 255);
        let num_2 = Math.floor(Math.random() * 255);
        let num_3 = Math.floor(Math.random() * 255);
        let color = "rgb("+num_1+", "+num_2+", "+num_3+")";

        wacky_text.style.color = color;
    });

//Keypress event with pedro
    let text_area = document.getElementById("text_area");
    let sentence = "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.";

    sentence = sentence.split(" ");
    let num = 0;

    text_area.addEventListener("keypress", function(event){
        event.preventDefault();

        if(num > sentence.length - 1){
            num = 0;
        }

        text_area.value += sentence[num] + " ";
        num++
    });

//load event for pedro & textarea
    window.addEventListener("load", function(){
        text_area.value = "";
    })

//click event for Whack A Mole
    whackAMole = {
        btn: document.getElementById("whack_btn"),
        moles: document.querySelectorAll(".moles"),
        points_span: document.getElementById("points_span"),
        points: 0,
        start: function(){
            this.ongoing = true;

            this.btn.classList.add("d-none");

            this.points_span.classList.remove("d-none")

            this.moles.forEach( function(arr){
                arr.classList.add("d-none");
            });

            let num = Math.floor(Math.random() * whackAMole.moles.length);

            this.moles[num].classList.remove("d-none")
        },
        ongoing: false,
        hitMole: function(){
            this.points++

            this.moles.forEach( function(arr){
                arr.classList.add("d-none");
            });

            let num = Math.floor(Math.random() * whackAMole.moles.length);

            this.moles[num].classList.remove("d-none")

            document.getElementById("points_span").innerHTML = "Points: " + this.points;
        }
    };

    whackAMole.points_span.classList.add("d-none");

    whackAMole.btn.addEventListener("click", function(){
        whackAMole.start();
    });

    whackAMole.moles.forEach( function(event){
        event.addEventListener("click", function(){
            if(whackAMole.ongoing == true){
                whackAMole.hitMole();
            };
        });
    });

//Mouseover
    let square = document.getElementById("square");
    let section = document.getElementById("section");
    let clone;

    for(let i = 0; i < 37; i++){
        clone = square.cloneNode(true);
        section.appendChild(clone);
    };

    let squares = document.querySelectorAll("svg");
    squares.forEach( function(e){
        e.addEventListener("mouseover", function (){
            e.classList.remove("text-info");
        });
    });

//Dobule click
    let dbl_btn = document.getElementById("dbl_btn");

    dbl_btn.addEventListener("dblclick", function(){
        setTimeout(message, 1000);
    })

    const message = function() {  
        alert("This message is shown after 1 second");
    }

//Mouseout
    let boxes = document.querySelectorAll(".shadow");

    boxes.forEach( function(e){
        e.addEventListener("mouseout", function(){
            if(e.classList.contains("shadow-lg")){
                e.classList.remove("shadow-lg");
            } else{
                e.classList.add("shadow-lg");
            }
        })
    })