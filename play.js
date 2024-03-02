
const question = document.getElementById('question');
// const choice = document.getElementsByClassName("text");
const choiceButtons = document.querySelectorAll('.option .text');
const options = document.getElementsByClassName('text');
const nextButton = document.querySelector('.button');
let currentQuestion = {}; //object
let acceptAnswers = true;
let questionNumber = 0;
let availableQuestions = [];

// let question = [];

function startGame(){
    console.log('Game started');
}

function nextUpdate(choices) {
    choiceButtons.forEach((button, index) => {
        button.textContent = choices['choice' + (index + 1)];
        button.addEventListener('click', function (){
            const selectedChoice = choices[index].textContent;
            const correctChoice = currentQuestion.correct_answer;
            if(selectedChoice === correctChoice) {
                button.classList.add('correct-answer');
                console.log('Correct!');
            } else {
                console.log('umm wrong, try again!');
            }
        })
    });
}
fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple')
// fetched the questions from my open triva api and paste it
.then(response => {
if(response.status === 429){
    console.log('Rate limit exceeded. Waiting for 5 seconds...');
    return new Promise(resolve => setTimeout(resolve, 5000))
    .then(fetchQuestions);
}
return response.json();
})

.then(loadedQuestions => {
    console.log(loadedQuestions);
    const formattedQuestions = loadedQuestions.results.map(loadedQuestion => {
        const formattedQuestion = {
            question: loadedQuestion.question,
            correct_answer: loadedQuestion.correct_answer,
            answers: [...loadedQuestion.incorrect_answers, loadedQuestion.correct_answer]
        };
    return formattedQuestion;
    });

  formattedQuestions.forEach(question => {
    question.choices = {};
    question.answers.forEach((choice, index) => {
        question.choices['choice' + (index + 1)] = choice;
    });
  });
 
  console.log(formattedQuestions);
  startGame();
  nextUpdate(formattedQuestions[0].choices);

  

    availableQuestions = [...formattedQuestions];
    nextQuestion();
   
})

.catch (error => {
    console.log('error occured:',error);
});

const Max_Questions = 5;

const nextQuestion = () => {
    if(availableQuestions.length === 0 || questionNumber >= 5) { 
console.log("Game Over");
return;
    }

questionNumber++;
const questionIndex = Math.floor(Math.random() * availableQuestions.length);
currentQuestion = availableQuestions[questionIndex];
questionElement.textContent = currentQuestion.question;
console.log("Question:", currentQuestion.question);
console.log("choices:", currentQuestion.choices);

nextUpdate(currentQuestion.choices);

availableQuestions.splice(questionIndex, 1);


};

document.querySelector('.button').addEventListener('click', nextQuestion);





//cost answerChoices
//formattedQuestions.answer = Math.floor(Math.random() * 5) + 1;
//answerChoices.splice(formatedQuestion.answer - 1, 0, 
//loadedQuestion.correct_answer);
//})

