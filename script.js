fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple')
// fetched the questions from my open triva api and paste it
.then(response => response.json())
// the .then method converts the response into JSON format. 
    .then(data => {
        // processing the data
        const questions = data.results;
        console.log(questions);

        const formattedQuestions = questions.map(question => {
            const formattedQuestion = {
                question: question.question
            };
            const answerChoices = [...question.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 5) + 1;
            answerChoices.splice(formattedQuestion.answer - 1, 0, question.correct_answer);
            // the splice method is used. The 0 is saying I am not removing anything
            // from the array. Since the index starts of at 0 but since I have my questions
            // number as option 1 option 2.. I put the -1 to match the zero based index array. This ensures the answer option is aligned appropriate postion.
            // For example if the formmatedQuestion.answer is 1, substacting one give us 0
            // so the correct answer will be inserted at index 0, which is the first postion in the array.
            console.log("Formatted Question:", formattedQuestion);
            console.log("Answer Choices:", answerChoices);
            
            answerChoices.forEach((choice, index) => {
                formattedQuestion["choice" + (index + 1)] = choice;
            });

            return formattedQuestion;
        });
        
        startGame(formattedQuestions);
    });

const Max_Questions = 5;

function startGame(questions) {
    let questionNumber = 0;
    let availableQuestions = [...questions];
    newQuestion();

    function newQuestion() {
        if (availableQuestions.length === 0 || questionNumber >= Max_Questions) {
            console.log("Game Over");
            return;
        }
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const currentQuestion = availableQuestions[randomIndex];

        console.log("Question:", currentQuestion.question);

        const option = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];

        console.log("Options:", option);
        questionNumber++;

        availableQuestions.splice(randomIndex, 1);
        newQuestion();
    }
}



// // variables
// // pause per question to let the person answer
// let currentQuestions= {};
// let awaitingAnswers= true;
// // score board starts of at 0
// let score= 0;
// // numbering the question so you know what question you are on
// let=questionNumber= 0;

// // If you answer the question correctly you will get 2pt per right answer
// const correctanswer= 2; 

