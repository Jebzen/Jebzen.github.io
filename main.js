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
    user.name = username_input.value;
    quiz_data.answers[0] = username_input.value;

    quiz(1);
});

username_input.addEventListener("change", function(){

});