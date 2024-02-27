Script started on Mon Feb 26 22:45:35 2024
[oh-my-zsh] Would you like to update? [Y/n] q
[oh-my-zsh] You can update manually by running `omz update`
ui[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;32m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004huuiu  lls[?1l>[?2004l
]2;ls -G]1;lsREADME.md  index.html play.css   play.html  script.js  style.css
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;32m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode script.js[?1l>[?2004l
]2;node script.js]1;node[
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'What does the term MIME stand for, in regards to computing?'[39m,
    correct_answer: [32m'Multipurpose Internet Mail Extensions'[39m,
    incorrect_answers: [
      [32m'Mail Internet Mail Exchange'[39m,
      [32m'Multipurpose Interleave Mail Exchange'[39m,
      [32m'Mail Interleave Method Exchange'[39m
    ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'.rs is the top-level domain for what country?'[39m,
    correct_answer: [32m'Serbia'[39m,
    incorrect_answers: [ [32m'Romania'[39m, [32m'Russia'[39m, [32m'Rwanda'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'On which day did the World Wide Web go online?'[39m,
    correct_answer: [32m'December 20, 1990'[39m,
    incorrect_answers: [ [32m'December 17, 1996'[39m, [32m'November 12, 1990'[39m, [32m'November 24, 1995'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'When did the online streaming service &quot;Mixer&quot; launch?'[39m,
    correct_answer: [32m'2016'[39m,
    incorrect_answers: [ [32m'2013'[39m, [32m'2009'[39m, [32m'2011'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'What is the correct term for the metal object in between the CPU and the CPU fan within a computer system?'[39m,
    correct_answer: [32m'Heat Sink'[39m,
    incorrect_answers: [ [32m'CPU Vent'[39m, [32m'Temperature Decipator'[39m, [32m'Heat Vent'[39m ]
  }
]
/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:13
    const answerQuestions = [ ...moreQuestions.incorrect_answer];
                                               ^

TypeError: moreQuestions.incorrect_answer is not iterable
    at [90m/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:13:48
    at Array.map (<anonymous>)
    at [90m/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:9:27
[90m    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode sch ript.js[?1l>[?2004l
]2;node script.js]1;nodeQuestion: The teapot often seen in many 3D modeling applications is called what?
/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:29
const option = [ ...currentQuestion.incorrect_answer,currentQuestion.correct_answer];
                                    ^

TypeError: currentQuestion.incorrect_answer is not iterable
    at newQuestion [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:29:37[90m)[39m
    at startGame [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:17:5[90m)[39m
    at [90m/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:8:5
[90m    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode d scripy t.jd s[?1l>[?2004l
]2;node script.js]1;nodeQuestion: What was the name given to Android 4.3?
/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:29
const option = [ ...currentQuestion.incorrect_answer,currentQuestion.correct_answer];
                                    ^

TypeError: currentQuestion.incorrect_answer is not iterable
    at newQuestion [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:29:37[90m)[39m
    at startGame [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:17:5[90m)[39m
    at [90m/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:8:5
[90m    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004h