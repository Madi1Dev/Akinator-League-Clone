"use strict";

// declare the elements outside of functions, then append the child inside the function.
// DO THIS FOR ELEMENTS WITH MULTIPLE INTERACTIONS

// the database of questions to which the answer was "No"

const askedQuestionsDatabase = [
  {
    // 0
    question: "",
    followupQuestions: [
      {
        question: "",
        answer: {
          name: "",
        },
      },
      {
        question: "",
        answer: {
          name: "",
        },
      },
      {
        question: "",
        answer: {
          name: "",
        },
      },
    ],
  },
  {
    // 1
    question: "",
    followupQuestions: [
      {
        question: "",
        answer: {
          name: "",
        },
      },
      {
        question: "",
        answer: {
          name: "",
        },
      },
      {
        question: "",
        answer: {
          name: "",
        },
      },
    ],
  },
  {
    // 2
    question: "",
    followupQuestions: [
      {
        question: "",
        answer: {
          name: "",
        },
      },
      {
        question: "",
        answer: {
          name: "",
        },
      },
      {
        question: "",
        answer: {
          name: "",
        },
      },
    ],
  },
];

const startButton = document.querySelector(".start_button");
const nextButton = document.createElement("button");
nextButton.classList.add("nextButton");
nextButton.innerText = "Next";

const restartButton = document.createElement("button");
restartButton.classList.add("restart_Button");
restartButton.innerText = "Restart Game";

const main = document.getElementById("main");
const body = document.getElementById("body");

const jhinTextBox = document.createElement("div");
jhinTextBox.classList.add("jhin_text_box");

const fogIntro = document.createElement("div");
fogIntro.classList.add("fog");

const akinatorFirstElement = document.createElement("div");
akinatorFirstElement.classList.add("akinatorFirstElement");

const jhinPhase1 = document.createElement("div");
jhinPhase1.classList.add("jhin_phase1");

let i = 0; // for some reason if I declare this inside the function it doesn't work

const akinatorSecondElement = document.createElement("div");
akinatorSecondElement.classList.add("akinatorSecondElement");

const jhinPhase2 = document.createElement("div");
jhinPhase2.classList.add("jhin_phase2");

const jhinTextBoxTwo = document.createElement("div");
jhinTextBoxTwo.classList.add("jhin_text_box_two");

const buttonYes = document.createElement("button");
buttonYes.classList.add("button_Yes");
buttonYes.innerText = "Yes";

const buttonNo = document.createElement("button");
buttonNo.classList.add("button_No");
buttonNo.innerText = "No";

const buttonMaybe = document.createElement("button");
buttonMaybe.classList.add("button_Maybe");
buttonMaybe.innerText = "Maybe";

const answersBox = document.createElement("div");
answersBox.classList.add("answers_Box");

//
//
// phase one

// akinator starts:
startButton.addEventListener("click", function () {
  startButton.remove();
  fogIntroduction();
});

function text1() {
  const text = "...";
  const speed = 400;
  if (i < text.length) {
    jhinTextBox.innerHTML += text.charAt(i);
    i++;
    setTimeout(text1, speed);
  }
}

function text2() {
  const text = "HmmHmm?"; // why just question mark? Oh, it doesn't reset properly...
  const speed = 80;
  if (i < text.length) {
    jhinTextBox.innerHTML += text.charAt(i);
    i++;
    setTimeout(text2, speed);
  }
}

// first function:
function fogIntroduction() {
  main.appendChild(fogIntro);
  main.appendChild(nextButton);
  fogIntro.appendChild(jhinTextBox);

  text1();

  // nextButton starts the game and remains until akinator starts asking questions:
  nextButton.addEventListener("click", function () {
    text2();
    setNextOne();
  });
}

function setNextOne() {
  nextButton.addEventListener("click", function () {
    nextButton.remove(); // Removing and appending repeatedly to get it lined up properly in the div (else the button appears above the image, not below)
    fogIntro.remove();
    akinatorIntroduction();
  });
}

function text3() {
  const text = "Why Why Why hello there"; // doesn't reset properly. Will return to this later. Ductape mix.
  const speed = 100;
  if (i < text.length) {
    jhinTextBox.innerHTML += text.charAt(i);
    i++;
    setTimeout(text3, speed);
  }
}

function akinatorIntroduction() {
  main.appendChild(akinatorFirstElement);
  main.appendChild(nextButton);
  akinatorFirstElement.appendChild(jhinPhase1);
  jhinPhase1.appendChild(jhinTextBox);

  text3();

  nextButton.addEventListener("click", function () {
    nextButton.remove();
    setNextTwo();
  });
}

function text4() {
  console.log("triggered");

  const text = "Shall we play?";
  const speed = 100;
  if (i < text.length) {
    jhinTextBox.innerHTML += text.charAt(i);
    i++;
    setTimeout(text4, speed);
  }
}

function setNextTwo() {
  main.appendChild(nextButton);
  nextButton.innerHTML = "PLAY";
  console.log("woah");

  text4(); // function triggers but the text isn't working. Come back later. Maybe just CSS.

  nextButton.addEventListener("click", function () {
    nextButton.remove();
    akinatorFirstElement.remove();
    main.appendChild(akinatorSecondElement);

    akinatorSecondElement.appendChild(jhinPhase2);
    jhinPhase2.appendChild(jhinTextBoxTwo);

    akinatorSecondElement.appendChild(answersBox);
    answersBox.appendChild(buttonYes);
    answersBox.appendChild(buttonMaybe);
    answersBox.appendChild(buttonNo);

    firstSeries();
  });
}

//
//
//
// phase two
// game starts

function firstSeries() {
  // QUESTIONS AND ANSWERS

  const questionsDatabase = [
    {
      // 0
      question: "Is your champion from Demacia?", // console log to check for what this actually is
      followupQuestionsOne: [
        {
          question: "Is your champion somehow related to magic?",
          followupQuestionsTwo: [
            {
              question: "Was your champion imprisoned for over a decade?",
              answer: {
                name: "Sylas",
              },
            },
            {
              question: "Is your champion related to Garen?",
              answer: {
                name: "Lux",
              },
            },
            {
              question: "Is your champion a golem?",
              answer: {
                name: "Galio",
              },
            },
          ],
        },
        {
          question: "Does your champion have a connection with dragons?",
          followupQuestionsTwo: [
            {
              question: "Is your champion a dragon?",
              answer: {
                name: "Shyvana",
              },
            },
            {
              question:
                "Has your championed recruited a dragon into their service?",
              answer: {
                name: "Jarvan IV",
              },
            },
          ],
        },
        {
          question: "Does your champion have wings?",
          followupQuestionsTwo: [
            {
              question: "Does your champion represent divine justice?",
              answer: {
                name: "Kayle",
              },
            },
            {
              question: "Is your champion a fallen angel?",
              answer: {
                name: "Morgana",
              },
            },
          ],
        },
      ],
    },
    {
      // 1
      question: "Is your champion from the Shadow Isles?",
      followupQuestionsOne: [
        {
          question: "Is your champion tied to Isolde?",
          followupQuestionsTwo: [
            {
              question: "Is your champion a doll?",
              answer: {
                name: "Gwen",
              },
            },
            {
              question: "Was your champion a king?",
              answer: {
                name: "Viego",
              },
            },
          ],
        },
        {
          question: "Was your champion in the service of King Viego?",
          followupQuestionsTwo: [
            {
              question: "Does your champion throw spears?",
              answer: {
                name: "Kalista",
              },
            },
            {
              question: "Is your champion half steed-half human?",
              answer: {
                name: "Hecarim",
              },
            },
          ],
        },
        {
          question: "Is your champion magic oriented?",
          followupQuestionsTwo: [
            {
              question: "Is your champion's ultimate global?",
              answer: {
                name: "Karthus",
              },
            },
            {
              question: "Is your champion a yordle?",
              answer: {
                name: "Vex",
              },
            },
          ],
        },
      ],
    },
    {
      // 2
      question: "Is your champion from Noxus?",
      followupQuestionsOne: [
        {
          question: "Does your champion have a sister?",
          followupQuestionsTwo: [
            {
              question:
                "Does your champion use daggers as their primary weapon?",
              answer: {
                name: "Katarina",
              },
            },
            {
              question: "Has your character turned into a snake?",
              answer: {
                name: "Cassiopeia",
              },
            },
          ],
        },
        {
          question: "Does your champion have a brother?",
          followupQuestionsTwo: [
            {
              question: "Does your champion need an ego check?",
              answer: {
                name: "Draven",
              },
            },
            {
              question:
                "Has your champion been broken for the past 5 years and still hasn't gotten a nerf?",
              answer: {
                name: "Darius",
              },
            },
          ],
        },
        {
          question:
            "Has your champion come back to the corporeal realm in one way or another?",
          followupQuestionsTwo: [
            {
              question:
                "Is your champion trapped beneath the Immortal Bastion?",
              answer: {
                name: "Mordekaiser",
              },
            },
            {
              question:
                "Has your champion been irrelevant until Babus became popular?",
              answer: {
                name: "Sion",
              },
            },
          ],
        },
      ],
    },
    {
      // 3
      question: "Is your champion from Shurima?",
      followupQuestionsOne: [
        {
          question: "Is your champion tied to the ascendant?",
          followupQuestionsTwo: [
            {
              question:
                "Was your champion the Shuriman Emperor thousands of years ago?",
              answer: {
                name: "Azir",
              },
            },
            {
              question: "Is your champion a traitor?",
              answer: {
                name: "Xerath",
              },
            }, // this is where the tree would deepen for Nasus and Reneketon into followupQuestionsThree
          ],
        },
        {
          question: "Is your champion human?",
          followupQuestionsTwo: [
            {
              question: "Does your champion weave stones?",
              answer: {
                name: "Taliyah",
              },
            },
            {
              question: "Is your champion a mercenary?",
              answer: {
                name: "Sivir",
              },
            },
          ],
        },
        {
          question: "Is your champion relatively small?",
          followupQuestionsTwo: [
            {
              question:
                "Is your champion really, really, really sad, all the time?",
              answer: {
                name: "Amumu",
              },
            },
            {
              question: "Does your character know only one word?",
              answer: {
                name: "Rammus",
              },
            },
          ],
        },
      ],
    },
  ];

  function restartTheGame() {
    // game restarts at first series
    restartButton.removeEventListener("click", restartTheGame);
    restartButton.remove();

    answersBox.appendChild(buttonYes);
    answersBox.appendChild(buttonMaybe);
    answersBox.appendChild(buttonNo);

    buttonYes.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", firstSeriesNo);

    firstSeries();
  }

  function liar() {
    // if the options for possible answers are exhausted the game restarts
    jhinTextBoxTwo.innerHTML =
      "Your champion doesn't exist! Click restart to play again.";
    answersBox.appendChild(restartButton);
    restartButton.addEventListener("click", restartTheGame, { once: true });
  }

  const shuffledQuestions = questionsDatabase.sort(() => Math.random() - 0.5);
  firstSeriesQuestions(shuffledQuestions[0]);

  function firstSeriesQuestions(questions) {
    jhinTextBoxTwo.innerHTML = questions.question;
    buttonYes.addEventListener("click", secondSeries, { once: true }); // if yes, second series
    buttonNo.addEventListener("click", firstSeriesNo, { once: true }); // if no, removes options from first series one by one until yes OR restart
  }

  function firstSeriesNo() {
    {
      if (questionsDatabase.length > 1) {
        questionsDatabase.shift();
        console.log(questionsDatabase);
        const shuffledQuestions = questionsDatabase.sort(
          () => Math.random() - 0.5
        );
        firstSeriesQuestions(shuffledQuestions[0]);
      } else {
        jhinTextBoxTwo.innerHTML =
          "Your champion isn't real! Click restart to play again.";
        buttonYes.remove();
        buttonNo.remove();
        buttonMaybe.remove();
        answersBox.appendChild(restartButton);
        restartButton.addEventListener("click", restartTheGame, { once: true });
      }
    }
  }

  // if first series succeeds, second series
  function secondSeries() {
    console.log("woo!");
    buttonYes.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", firstSeries);
    buttonNo.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", firstSeriesNo);

    if (questionsDatabase[0].followupQuestionsOne.length === 0) {
      liar(); // if all the possible answers are exhausted
    } else {
      const shuffledQuestions = questionsDatabase[0].followupQuestionsOne.sort(
        () => Math.random() - 0.5
      );
      secondSeriesQuestions(shuffledQuestions[0]);
    }
  }

  // if no in second series
  function secondSeriesNo() {
    {
      if (questionsDatabase[0].followupQuestionsOne.length > 1) {
        questionsDatabase[0].followupQuestionsOne.shift();
        console.log(questionsDatabase[0].followupQuestionsOne);
        const shuffledQuestions =
          questionsDatabase[0].followupQuestionsOne.sort(
            () => Math.random() - 0.5
          );
        secondSeriesQuestions(shuffledQuestions[0]);
      } else {
        jhinTextBoxTwo.innerHTML =
          "Your champion isn't real! Click restart to play again.";
        buttonYes.remove();
        buttonNo.remove();
        buttonMaybe.remove();
        answersBox.appendChild(restartButton);
        restartButton.addEventListener("click", restartTheGame, { once: true });
      }
    }
  }

  // if yes in second series, then second series questions
  function secondSeriesQuestions(questions) {
    jhinTextBoxTwo.innerHTML = questions.question;
    buttonYes.addEventListener("click", thirdSeries, { once: true }); // if yes, second series
    buttonNo.addEventListener("click", secondSeriesNo, { once: true }); // if no, removes options from first series one by one until yes OR restart
  }

  // if second series succeeds, third series
  function thirdSeries() {
    console.log("getting there!");
    buttonYes.removeEventListener("click", thirdSeries);
    buttonNo.removeEventListener("click", thirdSeries);
    buttonNo.removeEventListener("click", secondSeriesNo);

    if (
      questionsDatabase[0].followupQuestionsOne[0].followupQuestionsTwo
        .length === 0
    ) {
      liar();
    } else {
      const shuffledQuestions =
        questionsDatabase[0].followupQuestionsOne[0].followupQuestionsTwo.sort(
          // this works just fine
          () => Math.random() - 0.5
        );
      thirdSeriesQuestions(shuffledQuestions[0]);
    }
  }

  function thirdSeriesQuestions(questions) {
    jhinTextBoxTwo.innerHTML = questions.question;
    buttonYes.addEventListener("click", jhinGuess, { once: true });
    buttonNo.addEventListener(
      "click",
      function () {
        questionsDatabase[0].followupQuestionsOne[0].followupQuestionsTwo.shift();
        console.log(
          questionsDatabase[0].followupQuestionsOne[0].followupQuestionsTwo
        );

        thirdSeries(); // questionable
      },
      { once: true }
    );
  }

  function jhinGuess() {
    // jhin attempts to guess the answer
    console.log("jhinGuess");
    console.log(questionsDatabase);
    jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestionsOne[0].followupQuestionsTwo[0].answer.name}!`;
    // answer sometimes returns as undefined for whatever reason, doesn't seem to cause an issue at all though
    // probably because jhinGuess is triggered pre-emptively somewhere
    buttonYes.removeEventListener("click", jhinGuess);
  }
}

//
//
//
//
//
//
//
//
//
//
/* WORKING VERSION THREE
function firstSeries() {
  // QUESTIONS AND ANSWERS

  const questionsDatabase = [
    {
      // 0
      question: "Is your champion from Demacia?", // console log to check for what this actually is
      followupQuestionsOne: [
        {
          question: "Is your champion somehow related to magic?",
          followupQuestionsTwo: [
            {
              question: "Was your champion imprisoned for over a decade?",
              answer: {
                name: "Sylas",
              },
            },
            {
              question: "Is your champion related to Garen?",
              answer: {
                name: "Lux",
              },
            },
            {
              question: "Is your champion a golem?",
              answer: {
                name: "Galio",
              },
            },
          ],
        },
        {
          question: "Does your champion have a connection with dragons?",
          followupQuestionsTwo: [
            {
              question: "Is your champion a dragon?",
              answer: {
                name: "Shyvana",
              },
            },
            {
              question:
                "Has your championed recruited a dragon into their service?",
              answer: {
                name: "Jarvan IV",
              },
            },
          ],
        },
        {
          question: "Does your champion have wings?",
          followupQuestionsTwo: [
            {
              question: "Does your champion represent divine justice?",
              answer: {
                name: "Kayle",
              },
            },
            {
              question: "Is your champion a fallen angel?",
              answer: {
                name: "Morgana",
              },
            },
          ],
        },
      ],
    },
    {
      // 1
      question: "Is your champion from the Shadow Isles?",
      followupQuestionsOne: [
        {
          question: "Is your champion tied to Isolde?",
          followupQuestionsTwo: [
            {
              question: "Is your champion a doll?",
              answer: {
                name: "Gwen",
              },
            },
            {
              question: "Was your champion a king?",
              answer: {
                name: "Viego",
              },
            },
          ],
        },
        {
          question: "Was your champion in the service of King Viego?",
          followupQuestionsTwo: [
            {
              question: "Does your champion throw spears?",
              answer: {
                name: "Kalista",
              },
            },
            {
              question: "Is your champion half steed-half human?",
              answer: {
                name: "Hecarim",
              },
            },
          ],
        },
        {
          question: "Is your champion magic oriented?",
          followupQuestionsTwo: [
            {
              question: "Is your champion's ultimate global?",
              answer: {
                name: "Karthus",
              },
            },
            {
              question: "Is your champion a yordle?",
              answer: {
                name: "Vex",
              },
            },
          ],
        },
      ],
    },
    {
      // 2
      question: "Is your champion from Noxus?",
      followupQuestionsOne: [
        {
          question: "Does your champion have a sister?",
          followupQuestionsTwo: [
            {
              question:
                "Does your champion use daggers as their primary weapon?",
              answer: {
                name: "Katarina",
              },
            },
            {
              question: "Has your character turned into a snake?",
              answer: {
                name: "Cassiopeia",
              },
            },
          ],
        },
        {
          question: "Does your champion have a brother?",
          followupQuestionsTwo: [
            {
              question: "Does your champion need an ego check?",
              answer: {
                name: "Draven",
              },
            },
            {
              question:
                "Has your champion been broken for the past 5 years and still hasn't gotten a nerf?",
              answer: {
                name: "Darius",
              },
            },
          ],
        },
        {
          question:
            "Has your champion come back to the corporeal realm in one way or another?",
          followupQuestionsTwo: [
            {
              question:
                "Is your champion trapped beneath the Immortal Bastion?",
              answer: {
                name: "Mordekaiser",
              },
            },
            {
              question:
                "Has your champion been irrelevant until Babus became popular?",
              answer: {
                name: "Sion",
              },
            },
          ],
        },
      ],
    },
    {
      // 3
      question: "Is your champion from Shurima?",
      followupQuestionsOne: [
        {
          question: "Is your champion tied to the ascendant?",
          followupQuestionsTwo: [
            {
              question:
                "Was your champion the Shuriman Emperor thousands of years ago?",
              answer: {
                name: "Azir",
              },
            },
            {
              question: "Is your champion a traitor?",
              answer: {
                name: "Xerath",
              },
            }, // this is where the tree would deepen for Nasus and Reneketon into followupQuestionsThree
          ],
        },
        {
          question: "Is your champion human?",
          followupQuestionsTwo: [
            {
              question: "Does your champion weave stones?",
              answer: {
                name: "Taliyah",
              },
            },
            {
              question: "Is your champion a mercenary?",
              answer: {
                name: "Sivir",
              },
            },
          ],
        },
        {
          question: "Is your champion relatively small?",
          followupQuestionsTwo: [
            {
              question:
                "Is your champion really, really, really sad, all the time?",
              answer: {
                name: "Amumu",
              },
            },
            {
              question: "Does your character know only one word?",
              answer: {
                name: "Rammus",
              },
            },
          ],
        },
      ],
    },
  ];

  function restartTheGame() {
    // game restarts at first series
    restartButton.removeEventListener("click", restartTheGame);
    restartButton.remove();

    answersBox.appendChild(buttonYes);
    answersBox.appendChild(buttonMaybe);
    answersBox.appendChild(buttonNo);

    buttonYes.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", firstSeriesNo);

    firstSeries();
  }

  function liar() {
    // if the options for possible answers are exhausted the game restarts
    jhinTextBoxTwo.innerHTML =
      "Your champion doesn't exist! Click restart to play again.";
    answersBox.appendChild(restartButton);
    restartButton.addEventListener("click", restartTheGame, { once: true });
  }

  const shuffledQuestions = questionsDatabase.sort(() => Math.random() - 0.5);
  firstSeriesQuestions(shuffledQuestions[0]);

  function firstSeriesQuestions(questions) {
    jhinTextBoxTwo.innerHTML = questions.question;
    buttonYes.addEventListener("click", secondSeries, { once: true }); // if yes, second series
    buttonNo.addEventListener("click", firstSeriesNo, { once: true }); // if no, removes options from first series one by one until yes OR restart
  }

  function firstSeriesNo() {
    {
      if (questionsDatabase.length > 1) {
        questionsDatabase.shift();
        console.log(questionsDatabase);
        const shuffledQuestions = questionsDatabase.sort(
          () => Math.random() - 0.5
        );
        firstSeriesQuestions(shuffledQuestions[0]);
      } else {
        jhinTextBoxTwo.innerHTML =
          "Your champion isn't real! Click restart to play again.";
        buttonYes.remove();
        buttonNo.remove();
        buttonMaybe.remove();
        answersBox.appendChild(restartButton);
        restartButton.addEventListener("click", restartTheGame, { once: true });
      }
    }
  }

  // if first series succeeds, second series
  function secondSeries() {
    console.log("woo!");
    buttonYes.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", firstSeries);
    buttonNo.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", firstSeriesNo);

    if (questionsDatabase[0].followupQuestionsOne.length === 0) {
      liar(); // if all the possible answers are exhausted
    } else {
      const shuffledQuestions = questionsDatabase[0].followupQuestionsOne.sort(
        () => Math.random() - 0.5
      );
      secondSeriesQuestions(shuffledQuestions[0]);
    }
  }

  // if no in second series
  function secondSeriesNo() {
    {
      if (questionsDatabase[0].followupQuestionsOne.length > 1) {
        questionsDatabase[0].followupQuestionsOne.shift();
        console.log(questionsDatabase[0].followupQuestionsOne);
        const shuffledQuestions =
          questionsDatabase[0].followupQuestionsOne.sort(
            () => Math.random() - 0.5
          );
        secondSeriesQuestions(shuffledQuestions[0]);
      } else {
        jhinTextBoxTwo.innerHTML =
          "Your champion isn't real! Click restart to play again.";
        buttonYes.remove();
        buttonNo.remove();
        buttonMaybe.remove();
        answersBox.appendChild(restartButton);
        restartButton.addEventListener("click", restartTheGame, { once: true });
      }
    }
  }

  // if yes in second series, then second series questions
  function secondSeriesQuestions(questions) {
    jhinTextBoxTwo.innerHTML = questions.question;
    buttonYes.addEventListener("click", thirdSeries, { once: true }); // if yes, second series
    buttonNo.addEventListener("click", secondSeriesNo, { once: true }); // if no, removes options from first series one by one until yes OR restart
  }

  // if second series succeeds, third series
  function thirdSeries() {
    console.log("getting there!");
    buttonYes.removeEventListener("click", thirdSeries);
    buttonNo.removeEventListener("click", thirdSeries);
    buttonNo.removeEventListener("click", secondSeriesNo);

    if (
      questionsDatabase[0].followupQuestionsOne[0].followupQuestionsTwo
        .length === 0
    ) {
      liar();
    } else {
      const shuffledQuestions =
        questionsDatabase[0].followupQuestionsOne[0].followupQuestionsTwo.sort(
          // this works just fine
          () => Math.random() - 0.5
        );
      thirdSeriesQuestions(shuffledQuestions[0]);
    }
  }

  function thirdSeriesQuestions(questions) {
    jhinTextBoxTwo.innerHTML = questions.question;
    buttonYes.addEventListener("click", jhinGuess, { once: true });
    buttonNo.addEventListener(
      "click",
      function () {
        questionsDatabase[0].followupQuestionsOne[0].followupQuestionsTwo.shift();
        console.log(
          questionsDatabase[0].followupQuestionsOne[0].followupQuestionsTwo
        );

        thirdSeries(); // questionable
      },
      { once: true }
    );
  }

  function jhinGuess() {
    // jhin attempts to guess the answer
    console.log("jhinGuess");
    console.log(questionsDatabase);
    jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestionsOne[0].followupQuestionsTwo[0].answer.name}!`;
    // answer sometimes returns as undefined for whatever reason, doesn't seem to cause an issue at all though
    // probably because jhinGuess is triggered pre-emptively somewhere
    buttonYes.removeEventListener("click", jhinGuess);
  }
}
*/

//
//
//
//
/* WORKING VERSION TWO


function gameStarts() {
  // QUESTIONS AND ANSWERS

  const questionsDatabase = [
    {
      // 0
      question: "Is your champion from Demacia?", // console log to check for what this actually is
      followupQuestions: [
        {
          question: "Does your champion fight with chains?",
          answer: {
            name: "Sylas",
          },
        },
        {
          question: "Does your champion breathe fire?",
          answer: {
            name: "Shyvana",
          },
        },
        {
          question: "Does your champion always camp bushes?",
          answer: {
            name: "Garen",
          },
        },
      ],
    },
    {
      // 1
      question: "Is your champion from the Shadow Isles?",
      followupQuestions: [
        {
          question: "Does your champion fight with chains?",
          answer: {
            name: "Thresh",
          },
        },
        {
          question: "Did your champion ride a steed in life?",
          answer: {
            name: "Hecarim",
          },
        },
        {
          question: "Is your champion's ultimate global?",
          answer: {
            name: "Karthus",
          },
        },
      ],
    },
    {
      // 2
      question: "Is your champion from Noxus?",
      followupQuestions: [
        {
          question: "Is your champion considered an exile?",
          answer: {
            name: "Riven",
          },
        },
        {
          question: "Does your champion need an ego check?",
          answer: {
            name: "Draven",
          },
        },
        {
          question: "Was your champion too angry to die?",
          answer: {
            name: "Mordekaiser",
          },
        },
      ],
    },
  ];

  const shuffledQuestions = questionsDatabase.sort(() => Math.random() - 0.5);
  firstSeries(shuffledQuestions[0]);

  function firstSeries(questions) {
    jhinTextBoxTwo.innerHTML = questions.question;
    buttonYes.addEventListener("click", secondSeries, { once: true }); // if yes, second series
    buttonNo.addEventListener("click", firstSeriesNo, { once: true }); // if no, removes options from first series one by one until yes OR restart
  }

  function firstSeriesNo() {
    {
      if (questionsDatabase.length > 1) {
        questionsDatabase.shift();
        console.log(questionsDatabase);
        const shuffledQuestions = questionsDatabase.sort(
          () => Math.random() - 0.5
        );
        firstSeries(shuffledQuestions[0]);
      } else {
        jhinTextBoxTwo.innerHTML =
          "Your champion isn't real! Click restart to play again.";
        buttonYes.remove();
        buttonNo.remove();
        buttonMaybe.remove();
        answersBox.appendChild(restartButton);
        restartButton.addEventListener("click", restartTheGame, { once: true });
      }
    }
  }

  function restartTheGame() {
    // this fixes it thank christ
    restartButton.removeEventListener("click", restartTheGame);
    restartButton.remove();

    answersBox.appendChild(buttonYes);
    answersBox.appendChild(buttonMaybe);
    answersBox.appendChild(buttonNo);

    buttonYes.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", firstSeriesNo);

    gameStarts();
  }

  function secondSeries() {
    console.log("woo!");
    buttonYes.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", gameStarts);
    buttonNo.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", firstSeriesNo);

    if (questionsDatabase[0].followupQuestions.length === 0) {
      liar(); // if all the questions relative to the first question are exhausted
    } else {
      const shuffledQuestions = questionsDatabase[0].followupQuestions.sort(
        () => Math.random() - 0.5
      );
      secondSeriesQuestions(shuffledQuestions[0]);
    }
  }

  function liar() {
    // if the options for possible answers are exhausted the game restarts
    jhinTextBoxTwo.innerHTML =
      "Your champion doesn't exist! Click restart to play again.";
    answersBox.appendChild(restartButton);
    restartButton.addEventListener("click", restartTheGame, { once: true });
  }

  function jhinGuess() {
    // jhin attempts to guess the answer
    console.log("jhinGuess");
    console.log(questionsDatabase);
    jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestions[0].answer.name}!`;
    // answer sometimes returns as undefined for whatever reason, doesn't seem to cause an issue at all though
    buttonYes.removeEventListener("click", jhinGuess);
  }

  function secondSeriesQuestions(questions) {
    jhinTextBoxTwo.innerHTML = questions.question;
    buttonYes.addEventListener("click", jhinGuess, { once: true });
    buttonNo.addEventListener(
      "click",
      function () {
        questionsDatabase[0].followupQuestions.shift();
        console.log(questionsDatabase[0].followupQuestions);

        secondSeries(); // questionable
      },
      { once: true }
    );
  }
}

*/

//
//
//
//
//
//
//
//
//
// WORKING SECOND PROTOTYPE
/*
function gameStarts() {
  const shuffledQuestions = questionsDatabase.sort(() => Math.random() - 0.5);
  let currentQuestionIndex = 0;
  firstSeries(shuffledQuestions[currentQuestionIndex]);
}

function firstSeries(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      console.log(questionsDatabase);
      secondSeries();
    },
    {
      once: true,
    }
  );

  buttonNo.addEventListener(
    "click",
    gameStarts, // this event is removed later to prevent the math random from sorting the first choice, thereby breaking the tree process
    { once: true }
  );
}

// work with this
// 1. reduce to boiler necessities
// 2. remove asked question from array

function secondSeries() {
  buttonYes.removeEventListener("click", secondSeries);
  buttonNo.removeEventListener("click", gameStarts);

  const shuffledQuestions = questionsDatabase[0].followupQuestions.sort(
    () => Math.random() - 0.5
  );
  let currentQuestionIndex = 0;
  secondSeriesQuestions(shuffledQuestions[currentQuestionIndex]);
}

function secondSeriesQuestions(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestions[0].answer.name}!`;
    },
    { once: true }
  );

  buttonNo.addEventListener(
    "click",
    function () {
      secondSeries();
    },
    { once: true }
  );
}
*/

//
//
//
//

// FIRST VERSION.
/*
function startQuestions(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      console.log(questionsDatabase);
      if (jhinTextBoxTwo.innerHTML === questionsDatabase[0].question) {
        demaciaFirstRound(); // Demacia first round --
      } else if (jhinTextBoxTwo.innerHTML === questionsDatabase[1].question) {
        shadowIslesFirstRound(); // Shadow Isles first round --
      } else if (jhinTextBoxTwo.innerHTML === questionsDatabase[2].question) {
        noxusFirstRound(); // Noxus first round --
      }
    },
    { once: true }
  );

  buttonNo.addEventListener(
    "click",
    gameStarts, // this event is removed later to prevent the math random from sorting the first choice, thereby breaking the tree process
    { once: true }
  );
}

// --> Demacia first round
function demaciaFirstRound() {
  const shuffledQuestions = questionsDatabase[0].followupQuestions.sort(
    () => Math.random() - 0.5
  );
  let currentQuestionIndex = 0;
  questionDemacia(shuffledQuestions[currentQuestionIndex]);
}

function questionDemacia(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestions[0].answer.name}!`;
    },
    { once: true }
  );

  buttonNo.removeEventListener("click", gameStarts);
  buttonNo.addEventListener(
    "click",
    function () {
      demaciaFirstRound();
    },
    { once: true }
  );
}

// --> Shadow Isles first round
function shadowIslesFirstRound() {
  const shuffledQuestions = questionsDatabase[1].followupQuestions.sort(
    () => Math.random() - 0.5
  );
  let currentQuestionIndex = 0;
  questionDemacia(shuffledQuestions[currentQuestionIndex]);
}

function questionShadowIsles(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      console.log(questionsDatabase);
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[0].followupQuestions[0].answer.name}!`;
      // why does 0 make no difference here? if 0 instead of 1, still works.
    },
    { once: true }
  );

  buttonNo.removeEventListener("click", gameStarts);
  buttonNo.addEventListener(
    "click",
    function () {
      shadowIslesFirstRound();
    },
    { once: true }
  );
}

// --> Noxus first round
function noxusFirstRound() {
  const shuffledQuestions = questionsDatabase[2].followupQuestions.sort(
    () => Math.random() - 0.5
  );
  let currentQuestionIndex = 0;
  questionNoxus(shuffledQuestions[currentQuestionIndex]);
}

function questionNoxus(questions) {
  jhinTextBoxTwo.innerHTML = questions.question;

  buttonYes.addEventListener(
    "click",
    function () {
      jhinTextBoxTwo.innerHTML = `Your champion is ${questionsDatabase[2].followupQuestions[0].answer.name}!`;
      // why does 0 make no difference here? if 0 instead of 2, still works.
    },
    { once: true }
  );

  buttonNo.removeEventListener("click", gameStarts);
  buttonNo.addEventListener(
    "click",
    function () {
      noxusFirstRound();
    },
    { once: true }
  );
}

*/
