/* 
    1. 7 event listeners

    2. Needs a:
        * String
        * Number
        * Array
        * Object
        * Callback functions
        * Functions
        * Input Fields
        * Buttons
        * Images

    3. 250 lines of code

    4. Previous exercise 30
    
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
*/
/*
let error_input_username = document.getElementById("error-username");

let begin_box = document.getElementById("begin_box");
let begin_button = document.getElementById("button_1");

let question_title = document.getElementById("question_title");
let question = document.getElementById("question");
let question_box = document.getElementById("question_box");

let user_box = document.getElementById("user_box");
let username_input = document.getElementById("username_input");
let user_botton = document.getElementById("button_user");

let user = {
    name: "",
    points: 0
};

let quiz_data = {
    questions: [
        "What was your name?",
        "",
        ""
    ],
    answers: [
        "",
        "",
        ""
    ],
    stage: 0
};

let errors = {
    username_input: ["Error, please fill in a username", "Error, you have to put in a username", "Error, username not valid", "Error, please fill in a authorized username"]
};

function quiz(num){

    switch (num){
        case 0:
            begin_button.classList.add("d-none");
            user_box.classList.remove("d-none");
            question_box.classList.add("d-none");

            user.points = 0;
            quiz_data.stage = 0;
            break;

        case 1:
            begin_button.classList.add("d-none");
            user_box.classList.add("d-none");
            question_box.classList.remove("d-none");

            quiz_data.stage = 1;
            question_title.innerHTML = "Question " + quiz_data.stage;

            question.innerHTML = quiz_data.questions[quiz_data.stage - 1];
            break;

        case 2:
            break;

        case 3:
            break;

        default:
            break;
    }
};

begin_button.addEventListener("click", function(){
    quiz(0);
});

window.addEventListener("load", () => {
    user_box.classList.add("d-none");
    question_box.classList.add("d-none");
    user.points = 0;
});

user_botton.addEventListener("click", function(){
    if(username_input.value != ""){
        user.name = username_input.value;
        quiz_data.answers[0] = username_input.value;

        quiz(1);
    } else{
        error_input_username.innerHTML = errors.username_input[Math.floor(Math.random() * errors.username_input.length)];
    }

});

*/

let begin_box = document.getElementById("begin_box");
let question_box = document.getElementById("question_box");
let begin_button = document.getElementById("begin_button");
let answer_text_submission = document.getElementById("answer_text_submission");
let question_title = document.getElementById("question_title");
let question_undertitle = document.getElementById("question_undertitle");

let user = {
    name: "",
    points: 0
};

let quiz = {
    on_going: false,
    stage: 0,

    start: function(){
        getName();

        begin_box.classList.add("d-none");
        question_box.classList.remove("d-none");

        this.on_going = true,
        this.stage = 1;
        this.question(1);
    },

    questions: [
        "What is your name?", 
        "How many fingers does the average person have?",
        "What language is this quiz made in?",
        "Where is London located",
        "In which country do i live in",
        "Which course is this?"
    ],
    answers: [
        "", 
        "2",
        "Javascript",
        "England",
        "Denmark",
        "Frontend"
    ],

    question: function(x){

        if(user.name != ""){
            this.answers[0] = user.name;
        } else{
            console.error("Error defining username");
            return;
        }

        if(quiz.stage > 6){
            alert("Quiz finished");
            this.on_going = false;
            return;
        }

        if(x > this.stage){
            console.error("Cannot get to question")
            return;
        } else{
            btn.info(this.stage);
        }

        switch(x){
            case 1:
                question_title.innerHTML = "Question 1";
                question_undertitle.innerHTML = this.questions[0];
                answer_text_submission.type = "text";
                break;
            case 2:
                question_title.innerHTML = "Question 2";
                question_undertitle.innerHTML = this.questions[1];
                answer_text_submission.type = "number";
                break;
            case 3:
                question_title.innerHTML = "Question 3";
                question_undertitle.innerHTML = this.questions[2];
                answer_text_submission.type = "text";
                break;
            case 4:
                question_title.innerHTML = "Question 4";
                question_undertitle.innerHTML = this.questions[3];
                answer_text_submission.type = "text";
                break;
            case 5:
                question_title.innerHTML = "Question 5";
                question_undertitle.innerHTML = this.questions[4];
                answer_text_submission.type = "text";
                break;
            case 6:
                question_title.innerHTML = "Question 6";
                question_undertitle.innerHTML = this.questions[5];
                answer_text_submission.type = "text";
                break;
        }
    },

    answer: function(){

        if(this.stage == 0 || this.stage > 6){
            console.error("Quiz failed");
            return;
        }

        let answer = answer_text_submission.value;
        let quiz_answer = this.answers[this.stage - 1];

        if(answer == "" || answer == 0){
            alert("No answer inputted");
        } else{
            if(typeof(answer) == "string"){
                answer = answer.toLowerCase;
                quiz_answer = quiz_answer.toLowerCase;
            };
            if(answer == quiz_answer){
                console.info("Right answer!");
                user.points++;
                btn.right(this.stage);
            } else{
                console.error("Wrong answer!");
                btn.wrong(this.stage);
            }
            this.stage++
            this.question(this.stage);
        }
    },

    finish: function(){
        alert("You got",user.points,"points");
    }
}

function getName(){
    let name = prompt("Please enter your name");

    if(name == null){
        getName()
    } else if(name == ""){ 
        getName()
    } else if(name != ""){
        user.name = name;

        alert("Hello " + user.name + " to my quiz");
    } else{
        getName()
    }
}

let btn ={
    not_accesed: function(x){
        query = "question_" + x;
        document.getElementById(query).classList.add("btn-secondary");
        document.getElementById(query).classList.remove("btn-success");
        document.getElementById(query).classList.remove("btn-warning");
        document.getElementById(query).classList.remove("btn-info");
    },
    right: function(x){
        query = "question_" + x;
        document.getElementById(query).classList.remove("btn-secondary");
        document.getElementById(query).classList.add("btn-success");
        document.getElementById(query).classList.remove("btn-warning");
        document.getElementById(query).classList.remove("btn-info");
    },
    wrong: function(x){
        query = "question_" + x;
        document.getElementById(query).classList.remove("btn-secondary");
        document.getElementById(query).classList.remove("btn-success");
        document.getElementById(query).classList.add("btn-danger");
        document.getElementById(query).classList.remove("btn-info");
    },
    info: function(x){
        query = "question_" + x;
        document.getElementById(query).classList.remove("btn-secondary");
        document.getElementById(query).classList.remove("btn-success");
        document.getElementById(query).classList.remove("btn-danger");
        document.getElementById(query).classList.add("btn-info");
    }
}

//user_box.classList.add("d-none");
question_box.classList.add("d-none");

begin_button.addEventListener("click", function(){
    quiz.start();
});