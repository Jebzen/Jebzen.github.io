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