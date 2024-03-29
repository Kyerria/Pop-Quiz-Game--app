


const choiceButtons = document.querySelectorAll('.choice-prefix');
// const options = document.getElementsByClassName('text');
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
    // updates the choices for the current question 
    choiceButtons.forEach((button, index) => {
        // updates each the answers content of each choice button
        button.textContent = choices['choice' + (index + 1)];
        //object is choice. array index starts at 0. so choice + 0+1= choice1
        button.addEventListener('click', function () {
        
            const selectedChoice = button.textContent;
            //takes the text of the choice to the current button
            const correctChoice = currentQuestion.correct_answer;
            
            //to get the correct answer for the current question
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
    //Code 5: Rate Limit Too many requests have occurred. Each IP can only access the API once every 5 seconds.
    console.log('Rate limit exceeded. Waiting for 5 seconds...');
    return new Promise(resolve => setTimeout(resolve, 5000))
    .then(fetchQuestions);
}
return response.json();
})

.then(questions => {
    console.log(questions);
    const formattedQuestions = questions.results.map(question => {
        //Array of formmated questions by mapping over each question
        const formattedQuestion = {
            question: question.question,
            correct_answer: question.correct_answer,
            answers: [...question.incorrect_answers, question.correct_answer]
        };
    return formattedQuestion;
    });

  formattedQuestions.forEach(question => {
    question.choices = {};
    //go through each answer in the array of questions.
    question.answers.forEach((choice, index) => {
        //assign answer to the choice 1 , 2 ,3, and 4.
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
    //catches any error from the API and logs them in to the console.
    console.log('error occured:',error);
});

const MaxQuestions = 5;

const nextQuestion = () => {
    //display the next question after clicking next button up to 5 then the game is over.
    if(availableQuestions.length === 0 || questionNumber >= 5) { 
console.log("Game Over");
return;
    }

questionNumber++;
const questionIndex = Math.floor(Math.random() * availableQuestions.length);

//question index range from 0 number to 4 number. 
currentQuestion = availableQuestions[questionIndex];
questionElement.textContent = currentQuestion.question;
//connect to the html to represent the current question.
console.log("Question:", currentQuestion.question);
console.log("choices:", currentQuestion.choices);

nextUpdate(currentQuestion.choices);

availableQuestions.splice(questionIndex, 1);
//this function stops the questions from repeating in the rounds of the game.
//splice remove or replace existing or new element. 

};


document.querySelector('.button').addEventListener('click', nextQuestion);
//Adds an event to the next button when clicked on




