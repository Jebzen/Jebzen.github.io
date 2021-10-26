//Page switch
    const toDoPage = document.getElementById("toDo_page");
    const quizPage = document.getElementById("quiz_page");

    const toDoBtn = document.getElementById("toDo_btn");
    const quizBtn = document.getElementById("quiz_btn");

    let page = {
        current: "toDo"
    };

    quizBtn.addEventListener('click',  () =>{
        switchPage(1)
    });

    toDoBtn.addEventListener('click', () => {
        switchPage(2)
    });

    function switchPage(x){

        if(x == 1){
            //page.current = "toDo";
            //console.log(page.current);

            toDoPage.classList.add('d-none');
            toDoBtn.classList.remove('active');

            quizPage.classList.remove('d-none');
            quizBtn.classList.add('active');

        } else if (x == 2){
            page.current = "quiz";
            console.log(page.current);

            toDoPage.classList.remove('d-none');
            toDoBtn.classList.add('active');

            quizBtn.classList.remove('active');
            quizPage.classList.add('d-none');

        }
    }

//Quiz
    const correctAnswers = ['A', 'B', 'C', 'C'];
    const form = document.querySelector('.quiz-form');
    const result = document.querySelector('.result');

    form.addEventListener('submit', e => {
        e.preventDefault();

        let score = 0;
        const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

        // check the answers
        userAnswers.forEach((answer, index) => {
            if (answer === correctAnswers[index]){
                score += 25;
            }
        });

        // show the result
        scrollTo(0, 0);
        result.classList.remove('d-none');

        let output = 0;
        const timer = setInterval(() => {
            result.querySelector('span').textContent = `${output}%`;
            if(output === score){
                clearInterval(timer);
            } else {
                output++;
            }
        }, 10);

        window.scrollTo({ top: 0, behavior: 'smooth'});
    });

//To do
    const addForm = document.querySelector('.add');
    const search = document.querySelector('.search input');
    const list = document.querySelector('.todos');

    const generateTemplate = todo => {
        const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete text-danger">Delete</i>
            </li>
        `;
        list.innerHTML += html;
    };

    const filterTodos = term => {

    // add filtered class
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    // remove filtered class
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));

    };

    // add todos event
    addForm.addEventListener('submit', e => {
        e.preventDefault();
        const todo = addForm.add.value.trim();

        if(todo.length){
            generateTemplate(todo);
            addForm.reset();
        }

    });

    // delete todos event
    list.addEventListener('click', e => {
        if(e.target.classList.contains('delete')){
            e.target.parentElement.remove();
        }
    });

    // filter todos event
    search.addEventListener('keyup', () => {
        const term = search.value.trim().toLowerCase();
        filterTodos(term);
    });