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
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnof de script.js[?1l>[?2004l
]2;node script.js]1;node[
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
    question: [32m'How many cores does the Intel i7-6950X have?'[39m,
    correct_answer: [32m'10'[39m,
    incorrect_answers: [ [32m'12'[39m, [32m'8'[39m, [32m'4'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'Which of these programming languages is a low-level language?'[39m,
    correct_answer: [32m'Assembly'[39m,
    incorrect_answers: [ [32m'Python'[39m, [32m'C#'[39m, [32m'Pascal'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'Approximately how many Apple I personal computers were created?'[39m,
    correct_answer: [32m'200'[39m,
    incorrect_answers: [ [32m'100'[39m, [32m'500'[39m, [32m'1000'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'Whistler was the codename of this Microsoft Operating System.'[39m,
    correct_answer: [32m'Windows XP'[39m,
    incorrect_answers: [ [32m'Windows 2000'[39m, [32m'Windows 7'[39m, [32m'Windows 95'[39m ]
  }
]
Formatted Question: {
  question: [32m'When did the online streaming service &quot;Mixer&quot; launch?'[39m,
  answer: [33m1[39m
}
Answer Choices: [ [32m'2016'[39m, [32m'2013'[39m, [32m'2009'[39m, [32m'2011'[39m ]
Formatted Question: { question: [32m'How many cores does the Intel i7-6950X have?'[39m, answer: [33m4[39m }
Answer Choices: [ [32m'12'[39m, [32m'8'[39m, [32m'4'[39m, [32m'10'[39m ]
Formatted Question: {
  question: [32m'Which of these programming languages is a low-level language?'[39m,
  answer: [33m3[39m
}
Answer Choices: [ [32m'Python'[39m, [32m'C#'[39m, [32m'Assembly'[39m, [32m'Pascal'[39m ]
Formatted Question: {
  question: [32m'Approximately how many Apple I personal computers were created?'[39m,
  answer: [33m2[39m
}
Answer Choices: [ [32m'100'[39m, [32m'200'[39m, [32m'500'[39m, [32m'1000'[39m ]
Formatted Question: {
  question: [32m'Whistler was the codename of this Microsoft Operating System.'[39m,
  answer: [33m1[39m
}
Answer Choices: [ [32m'Windows XP'[39m, [32m'Windows 2000'[39m, [32m'Windows 7'[39m, [32m'Windows 95'[39m ]
Question: How many cores does the Intel i7-6950X have?
/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:62
        const option = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
                                           ^

TypeError: currentQuestion.incorrect_answers is not iterable
    at newQuestion [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:62:44[90m)[39m
    at startGame [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:46:5[90m)[39m
    at [90m/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:37:9
[90m    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode script.js[?1l>[?2004l
]2;node script.js]1;node[
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'In programming, what do you call functions with the same name but different implementations?'[39m,
    correct_answer: [32m'Overloading'[39m,
    incorrect_answers: [ [32m'Overriding'[39m, [32m'Abstracting'[39m, [32m'Inheriting'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'In computing terms, typically what does CLI stand for?'[39m,
    correct_answer: [32m'Command Line Interface'[39m,
    incorrect_answers: [
      [32m'Common Language Input'[39m,
      [32m'Control Line Interface'[39m,
      [32m'Common Language Interface'[39m
    ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'Laserjet and inkjet printers are both examples of what type of printer?'[39m,
    correct_answer: [32m'Non-impact printer'[39m,
    incorrect_answers: [ [32m'Impact printer'[39m, [32m'Daisywheel printer'[39m, [32m'Dot matrix printer'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'What was the first Android version specifically optimized for tablets?'[39m,
    correct_answer: [32m'Honeycomb'[39m,
    incorrect_answers: [ [32m'Eclair'[39m, [32m'Froyo'[39m, [32m'Marshmellow'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'Which of these programming languages is a low-level language?'[39m,
    correct_answer: [32m'Assembly'[39m,
    incorrect_answers: [ [32m'Python'[39m, [32m'C#'[39m, [32m'Pascal'[39m ]
  }
]
Formatted Question: {
  question: [32m'In programming, what do you call functions with the same name but different implementations?'[39m,
  answer: [33m4[39m
}
Answer Choices: [ [32m'Overriding'[39m, [32m'Abstracting'[39m, [32m'Inheriting'[39m, [32m'Overloading'[39m ]
Formatted Question: {
  question: [32m'In computing terms, typically what does CLI stand for?'[39m,
  answer: [33m2[39m
}
Answer Choices: [
  [32m'Common Language Input'[39m,
  [32m'Command Line Interface'[39m,
  [32m'Control Line Interface'[39m,
  [32m'Common Language Interface'[39m
]
Formatted Question: {
  question: [32m'Laserjet and inkjet printers are both examples of what type of printer?'[39m,
  answer: [33m4[39m
}
Answer Choices: [
  [32m'Impact printer'[39m,
  [32m'Daisywheel printer'[39m,
  [32m'Dot matrix printer'[39m,
  [32m'Non-impact printer'[39m
]
Formatted Question: {
  question: [32m'What was the first Android version specifically optimized for tablets?'[39m,
  answer: [33m2[39m
}
Answer Choices: [ [32m'Eclair'[39m, [32m'Honeycomb'[39m, [32m'Froyo'[39m, [32m'Marshmellow'[39m ]
Formatted Question: {
  question: [32m'Which of these programming languages is a low-level language?'[39m,
  answer: [33m3[39m
}
Answer Choices: [ [32m'Python'[39m, [32m'C#'[39m, [32m'Assembly'[39m, [32m'Pascal'[39m ]
Question: What was the first Android version specifically optimized for tablets?
/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:62
        const option = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
                                           ^

TypeError: currentQuestion.incorrect_answers is not iterable
    at newQuestion [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:62:44[90m)[39m
    at startGame [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:46:5[90m)[39m
    at [90m/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:37:9
[90m    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode script.js[?1l>[?2004l
]2;node script.js]1;node[
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'Unix Time is defined as the number of seconds that have elapsed since when?'[39m,
    correct_answer: [32m'Midnight, January 1, 1970'[39m,
    incorrect_answers: [
      [32m'Midnight, July 4, 1976'[39m,
      [32m'Midnight on the creator of Unix&#039;s birthday'[39m,
      [32m'Midnight, July 4, 1980'[39m
    ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'What does RAID stand for?'[39m,
    correct_answer: [32m'Redundant Array of Independent Disks'[39m,
    incorrect_answers: [
      [32m'Rapid Access for Indexed Devices'[39m,
      [32m'Range of Applications with Identical Designs'[39m,
      [32m'Randomized Abstract Identification Description'[39m
    ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'What did the name of the Tor Anonymity Network orignially stand for?'[39m,
    correct_answer: [32m'The Onion Router'[39m,
    incorrect_answers: [ [32m'The Only Router'[39m, [32m'The Orange Router'[39m, [32m'The Ominous Router'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'How many cores does the Intel i7-6950X have?'[39m,
    correct_answer: [32m'10'[39m,
    incorrect_answers: [ [32m'12'[39m, [32m'8'[39m, [32m'4'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'.at is the top-level domain for what country?'[39m,
    correct_answer: [32m'Austria'[39m,
    incorrect_answers: [ [32m'Argentina'[39m, [32m'Australia'[39m, [32m'Angola'[39m ]
  }
]
Formatted Question: {
  question: [32m'Unix Time is defined as the number of seconds that have elapsed since when?'[39m,
  answer: [33m2[39m
}
Answer Choices: [
  [32m'Midnight, July 4, 1976'[39m,
  [32m'Midnight, January 1, 1970'[39m,
  [32m'Midnight on the creator of Unix&#039;s birthday'[39m,
  [32m'Midnight, July 4, 1980'[39m
]
Formatted Question: { question: [32m'What does RAID stand for?'[39m, answer: [33m4[39m }
Answer Choices: [
  [32m'Rapid Access for Indexed Devices'[39m,
  [32m'Range of Applications with Identical Designs'[39m,
  [32m'Randomized Abstract Identification Description'[39m,
  [32m'Redundant Array of Independent Disks'[39m
]
Formatted Question: {
  question: [32m'What did the name of the Tor Anonymity Network orignially stand for?'[39m,
  answer: [33m1[39m
}
Answer Choices: [
  [32m'The Onion Router'[39m,
  [32m'The Only Router'[39m,
  [32m'The Orange Router'[39m,
  [32m'The Ominous Router'[39m
]
Formatted Question: { question: [32m'How many cores does the Intel i7-6950X have?'[39m, answer: [33m2[39m }
Answer Choices: [ [32m'12'[39m, [32m'10'[39m, [32m'8'[39m, [32m'4'[39m ]
Formatted Question: {
  question: [32m'.at is the top-level domain for what country?'[39m,
  answer: [33m3[39m
}
Answer Choices: [ [32m'Argentina'[39m, [32m'Australia'[39m, [32m'Austria'[39m, [32m'Angola'[39m ]
Question: What does RAID stand for?
/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:62
        const option= [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];
                                                                          ^

TypeError: currentQuestion.incorrect_answers is not iterable
    at newQuestion [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:62:75[90m)[39m
    at startGame [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:46:5[90m)[39m
    at [90m/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:37:9
[90m    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode script.js[?1l>[?2004l
]2;node script.js]1;node[
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'Which one of these is not an official development name for a Ubuntu release?'[39m,
    correct_answer: [32m'Mystic Mansion'[39m,
    incorrect_answers: [ [32m'Trusty Tahr'[39m, [32m'Utopic Unicorn'[39m, [32m'Wily Werewolf'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'Generally, which component of a computer draws the most power?'[39m,
    correct_answer: [32m'Video Card'[39m,
    incorrect_answers: [ [32m'Hard Drive'[39m, [32m'Processor'[39m, [32m'Power Supply'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'Which of these people was NOT a founder of Apple Inc?'[39m,
    correct_answer: [32m'Jonathan Ive'[39m,
    incorrect_answers: [ [32m'Steve Jobs'[39m, [32m'Ronald Wayne'[39m, [32m'Steve Wozniak'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'When was the programming language &quot;C#&quot; released?'[39m,
    correct_answer: [32m'2000'[39m,
    incorrect_answers: [ [32m'1998'[39m, [32m'1999'[39m, [32m'2001'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'What did the name of the Tor Anonymity Network orignially stand for?'[39m,
    correct_answer: [32m'The Onion Router'[39m,
    incorrect_answers: [ [32m'The Only Router'[39m, [32m'The Orange Router'[39m, [32m'The Ominous Router'[39m ]
  }
]
Formatted Question: {
  question: [32m'Which one of these is not an official development name for a Ubuntu release?'[39m,
  answer: [33m1[39m
}
Answer Choices: [ [32m'Mystic Mansion'[39m, [32m'Trusty Tahr'[39m, [32m'Utopic Unicorn'[39m, [32m'Wily Werewolf'[39m ]
Formatted Question: {
  question: [32m'Generally, which component of a computer draws the most power?'[39m,
  answer: [33m2[39m
}
Answer Choices: [ [32m'Hard Drive'[39m, [32m'Video Card'[39m, [32m'Processor'[39m, [32m'Power Supply'[39m ]
Formatted Question: {
  question: [32m'Which of these people was NOT a founder of Apple Inc?'[39m,
  answer: [33m3[39m
}
Answer Choices: [ [32m'Steve Jobs'[39m, [32m'Ronald Wayne'[39m, [32m'Jonathan Ive'[39m, [32m'Steve Wozniak'[39m ]
Formatted Question: {
  question: [32m'When was the programming language &quot;C#&quot; released?'[39m,
  answer: [33m2[39m
}
Answer Choices: [ [32m'1998'[39m, [32m'2000'[39m, [32m'1999'[39m, [32m'2001'[39m ]
Formatted Question: {
  question: [32m'What did the name of the Tor Anonymity Network orignially stand for?'[39m,
  answer: [33m2[39m
}
Answer Choices: [
  [32m'The Only Router'[39m,
  [32m'The Onion Router'[39m,
  [32m'The Orange Router'[39m,
  [32m'The Ominous Router'[39m
]
Question: Which one of these is not an official development name for a Ubuntu release?
Question: Which of these people was NOT a founder of Apple Inc?
Question: What did the name of the Tor Anonymity Network orignially stand for?
Question: When was the programming language &quot;C#&quot; released?
Question: Generally, which component of a computer draws the most power?
Game Over
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;32m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode script.js[?1l>[?2004l
]2;node script.js]1;node[
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'In CSS, which of these values CANNOT be used with the &quot;position&quot; property?'[39m,
    correct_answer: [32m'center'[39m,
    incorrect_answers: [ [32m'static'[39m, [32m'absolute'[39m, [32m'relative'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'How many bytes are in a single Kibibyte?'[39m,
    correct_answer: [32m'1024'[39m,
    incorrect_answers: [ [32m'2400'[39m, [32m'1000'[39m, [32m'1240'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'Which of the following is a personal computer made by the Japanese company Fujitsu?'[39m,
    correct_answer: [32m'FM-7'[39m,
    incorrect_answers: [ [32m'PC-9801'[39m, [32m'Xmillennium '[39m, [32m'MSX'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'How many bits make up the significand portion of a single precision floating point number?'[39m,
    correct_answer: [32m'23'[39m,
    incorrect_answers: [ [32m'8'[39m, [32m'53'[39m, [32m'15'[39m ]
  },
  {
    type: [32m'multiple'[39m,
    difficulty: [32m'medium'[39m,
    category: [32m'Science: Computers'[39m,
    question: [32m'The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?'[39m,
    correct_answer: [32m'Taiwan'[39m,
    incorrect_answers: [ [32m'United States'[39m, [32m'Germany'[39m, [32m'China (People&#039;s Republic of)'[39m ]
  }
]
Formatted Question: {
  question: [32m'In CSS, which of these values CANNOT be used with the &quot;position&quot; property?'[39m,
  answer: [33m3[39m
}
Answer Choices: [ [32m'static'[39m, [32m'absolute'[39m, [32m'center'[39m, [32m'relative'[39m ]
Formatted Question: { question: [32m'How many bytes are in a single Kibibyte?'[39m, answer: [33m4[39m }
Answer Choices: [ [32m'2400'[39m, [32m'1000'[39m, [32m'1240'[39m, [32m'1024'[39m ]
Formatted Question: {
  question: [32m'Which of the following is a personal computer made by the Japanese company Fujitsu?'[39m,
  answer: [33m3[39m
}
Answer Choices: [ [32m'PC-9801'[39m, [32m'Xmillennium '[39m, [32m'FM-7'[39m, [32m'MSX'[39m ]
Formatted Question: {
  question: [32m'How many bits make up the significand portion of a single precision floating point number?'[39m,
  answer: [33m2[39m
}
Answer Choices: [ [32m'8'[39m, [32m'23'[39m, [32m'53'[39m, [32m'15'[39m ]
Formatted Question: {
  question: [32m'The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?'[39m,
  answer: [33m1[39m
}
Answer Choices: [
  [32m'Taiwan'[39m,
  [32m'United States'[39m,
  [32m'Germany'[39m,
  [32m'China (People&#039;s Republic of)'[39m
]
Question: In CSS, which of these values CANNOT be used with the &quot;position&quot; property?
/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:63
      const questionElement = document.getElementById('quesion');
                              ^

ReferenceError: document is not defined
    at newQuestion [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:63:31[90m)[39m
    at startGame [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:46:5[90m)[39m
    at [90m/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:37:9
[90m    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004httocuh image image  image  image u imagec imageh image[?1l>[?2004l
]2;touch image]1;touch[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;32m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hccd image[?1l>[?2004l
]2;cd image]1;cdcd: not a directory: image
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hlls[?1l>[?2004l
]2;ls -G]1;lsREADME.md  image      index.html play.css   play.html  script.js  style.css
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;32m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hiimage[?1l>[?2004l
]2;image]1;imagezsh: command not found: image
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode script.js[?1l>[?2004l
]2;node script.js]1;node/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:16
         const.formattedQuestion ={
              ^

SyntaxError: Unexpected token '.'
[90m    at internalCompileFunction (node:internal/vm:73:18)[39m
[90m    at wrapSafe (node:internal/modules/cjs/loader:1274:20)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1320:27)[39m
[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1197:32)[39m
[90m    at Module._load (node:internal/modules/cjs/loader:1013:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)[39m
[90m    at node:internal/main/run_main_module:28:49[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode script.js[?1l>[?2004l
]2;node script.js]1;node/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:32
});
 ^

SyntaxError: missing ) after argument list
[90m    at internalCompileFunction (node:internal/vm:73:18)[39m
[90m    at wrapSafe (node:internal/modules/cjs/loader:1274:20)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1320:27)[39m
[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1197:32)[39m
[90m    at Module._load (node:internal/modules/cjs/loader:1013:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)[39m
[90m    at node:internal/main/run_main_module:28:49[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode script .js[?1l>[?2004l
]2;node script.js]1;node/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:40
newQuestion():
             ^

SyntaxError: Unexpected token ':'
[90m    at internalCompileFunction (node:internal/vm:73:18)[39m
[90m    at wrapSafe (node:internal/modules/cjs/loader:1274:20)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1320:27)[39m
[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1197:32)[39m
[90m    at Module._load (node:internal/modules/cjs/loader:1013:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)[39m
[90m    at node:internal/main/run_main_module:28:49[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode script.js[?1l>[?2004l
]2;node script.js]1;node/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:1
const options = Array.from(document.getElementsByClassName('text'));
                           ^

ReferenceError: document is not defined
    at Object.<anonymous> [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:1:28[90m)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1356:14)[39m
[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1197:32)[39m
[90m    at Module._load (node:internal/modules/cjs/loader:1013:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)[39m
[90m    at node:internal/main/run_main_module:28:49[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode script.js[?1l>[?2004l
]2;node script.js]1;node/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:1
const options = Array.from(question.getElementsByClassName('text'));
                           ^

ReferenceError: question is not defined
    at Object.<anonymous> [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:1:28[90m)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1356:14)[39m
[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1197:32)[39m
[90m    at Module._load (node:internal/modules/cjs/loader:1013:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)[39m
[90m    at node:internal/main/run_main_module:28:49[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004hnnode script.js[?1l>[?2004l
]2;node script.js]1;node/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/script.js:1
const options = document.getElementsByClassName('text');
                ^

ReferenceError: document is not defined
    at Object.<anonymous> [90m(/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app/[39mscript.js:1:17[90m)[39m
[90m    at Module._compile (node:internal/modules/cjs/loader:1356:14)[39m
[90m    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)[39m
[90m    at Module.load (node:internal/modules/cjs/loader:1197:32)[39m
[90m    at Module._load (node:internal/modules/cjs/loader:1013:12)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)[39m
[90m    at node:internal/main/run_main_module:28:49[39m

Node.js v18.19.0
[1m[7m%[27m[1m[0m                                                                                                                                                            ]2;michie@Michigans-Air:~/sebpt-0116/projects/mini-pop-quiz-project-app]1;..z-project-app]7;file://Michigans-Air.grandenetworks.net/Users/michie/sebpt-0116/projects/mini-pop-quiz-project-app\[0m[27m[24m[J[01;31m➜  [36mmini-pop-quiz-project-app[00m [01;34mgit:([31mmain[34m) [33m✗[00m [K[?1h=[?2004h