"use strict";

import { championDatabase } from "./championDatabase.js";

let questionsDatabase = [];
let secondQuestionsDatabase = [];
let secondSeriesDatabase = [];
let thirdSeriesDatabase = [];

let i = 0; // will probably remove for the text (will do in CSS)

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

    gameStarts();
  });
}

//
//
//
// phase two
// game starts

function gameStarts() {
  function restartTheGame() {
    // game restarts
    restartButton.removeEventListener("click", restartTheGame);
    restartButton.remove();

    answersBox.appendChild(buttonYes);
    answersBox.appendChild(buttonMaybe);
    answersBox.appendChild(buttonNo);

    buttonYes.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", firstSeriesNo);

    gameStarts();
  }

  function liar() {
    // if the options for possible answers are exhausted the game restarts
    jhinTextBoxTwo.innerHTML =
      "Your champion doesn't exist! Click restart to play again.";
    answersBox.appendChild(restartButton);
    restartButton.addEventListener("click", restartTheGame, { once: true });
  }

  //
  //
  // first shuffle
  function firstShuffleQuestions() {
    let championSorted = championDatabase.sort(() => Math.random() - 0.5);
    let questionRegion = championSorted[0].Key_region;
    let questionAttackType = championSorted[0].Adaptive_type;
    let questionSex = championSorted[0].Sex;
    let questionTypicalLane = championSorted[0].Typical_lane;
    // let questionTypicalLaneTwo = championSorted[0].Typical_lane_two; this is something to filter for, not directly ask
    let questionClass = championSorted[0].Class;
    let questionResource = championSorted[0].Resource_type;
    let questionRace = championSorted[0].Race;
    let questionFaction = championSorted[0].Faction;
    let questionCharRel = championSorted[0].Key_Character_rel;

    let questions = [
      {
        questionRegion: `Does your champion have anything to do with ${questionRegion}?`,
      },
      {
        questionAdaptiveType: `Is your champion's primary source of damage ${questionAttackType.toLowerCase()}?`,
      },
      {
        questionSex: `Is your champion ${questionSex.toLowerCase()}?`,
      },
      {
        questionTypicalLane: `Does your champion get commonly played in ${questionTypicalLane.toLowerCase()}?`,
      },
      {
        questionClass: `Is your champion a ${questionClass.toLowerCase()} champion?`,
      },
      {
        questionResource: `Does your champion use ${questionResource.toLowerCase()}?`,
      },
      {
        questionRace: `Is your champion a ${questionRace}?`,
      },
      {
        questionFaction: `Is your champion affiliated with ${questionFaction}?`,
      },
      {
        questionKeyCharRel: `Does your character have anything in common with ${questionCharRel}?`,
      },
    ];

    questions.push(questions.shift());

    const objectFromQuestions = Object.values(questions)[0];
    const value = Object.keys(objectFromQuestions);

    const randomQuestion = questions.sort(() => Math.random() - 0.5);
    const randomQuestionDefined = randomQuestion[0];
    const randomQuestionFurtherDefined = Object.values(
      randomQuestionDefined
    )[0];

    questionsDatabase.unshift(randomQuestionDefined);

    if (questionsDatabase.length === 0) {
      questionsDatabase.unshift(randomQuestionDefined);
    } else {
      questionsDatabase.length = 0;
      questionsDatabase.unshift(randomQuestionDefined);
    }
  }

  firstShuffleQuestions();
  const askedQuestion = questionsDatabase[0];
  const chosenQuestion = Object.values(askedQuestion)[0];
  console.log(questionsDatabase);
  // const chosenTwo = Object.values(chosen)[0];
  // const chosenThree = Object.values(chosenTwo)[0];
  firstSeriesQuestions(chosenQuestion);

  function firstSeriesQuestions(chosenQuestion) {
    jhinTextBoxTwo.innerHTML = chosenQuestion;
    buttonYes.addEventListener("click", secondSeries, { once: true }); // if yes, second series
    buttonNo.addEventListener("click", firstSeriesNo, { once: true }); // if no, removes options from first series one by one until yes OR restart
  }

  function firstSeriesNo() {
    firstShuffleQuestions();
    const askedQuestion = questionsDatabase[0];
    const chosenQuestion = Object.values(askedQuestion)[0];
    firstSeriesQuestions(chosenQuestion);
  }

  // if first series succeeds, second series

  function secondSeries() {
    let pickOne = questionsDatabase[0];
    let convert = Object.keys(pickOne);
    let pick = convert.toString();
    console.log(pick);

    if (pick === "questionRegion") {
      championDatabase.filter((value) => {
        if (championDatabase[0].Key_region === value.Key_region) {
          secondSeriesDatabase.push(value);
          console.log(secondSeriesDatabase);
          return value;
        } else {
          return false;
        }
      });
    }

    if (pick === "questionAdaptiveType") {
      championDatabase.filter((value) => {
        if (championDatabase[0].Adaptive_type === value.Adaptive_type) {
          secondSeriesDatabase.push(value);
          console.log(secondSeriesDatabase);
          return value;
        } else {
          return false;
        }
      });
    }

    if (pick === "questionSex") {
      championDatabase.filter((value) => {
        if (championDatabase[0].Sex === value.Sex) {
          secondSeriesDatabase.push(value);
          console.log(secondSeriesDatabase);
          return value;
        } else {
          return false;
        }
      });
    }

    if (pick === "questionTypicalLane") {
      championDatabase.filter((value) => {
        if (championDatabase[0].Typical_lane === value.Typical_lane) {
          secondSeriesDatabase.push(value);
          console.log(secondSeriesDatabase);
          return value;
        } else {
          return false;
        }
      });
    }

    if (pick === "questionClass") {
      championDatabase.filter((value) => {
        if (championDatabase[0].Class === value.Class) {
          secondSeriesDatabase.push(value);
          console.log(secondSeriesDatabase);
          return value;
        } else {
          return false;
        }
      });
    }

    if (pick === "questionResource") {
      championDatabase.filter((value) => {
        if (championDatabase[0].Resource_type === value.Resource_type) {
          secondSeriesDatabase.push(value);
          console.log(secondSeriesDatabase);
          return value;
        } else {
          return false;
        }
      });
    }

    if (pick === "questionRace") {
      championDatabase.filter((value) => {
        if (championDatabase[0].Race === value.Race) {
          secondSeriesDatabase.push(value);
          console.log(secondSeriesDatabase);
          return value;
        } else {
          return false;
        }
      });
    }

    if (pick === "questionFaction") {
      championDatabase.filter((value) => {
        if (championDatabase[0].Faction === value.Faction) {
          secondSeriesDatabase.push(value);
          console.log(secondSeriesDatabase);
          return value;
        } else {
          return false;
        }
      });
    }

    if (pick === "questionKeyCharRel") {
      championDatabase.filter((value) => {
        if (championDatabase[0].Key_Character_rel === value.Key_Character_rel) {
          secondSeriesDatabase.push(value);
          console.log(secondSeriesDatabase);
          return value;
        } else {
          return false;
        }
      });
    }

    function secondShuffleQuestions() {
      console.log("shuffled!!!");
      let championSorted = secondSeriesDatabase.sort(() => Math.random() - 0.5);
      let questionRegion = championSorted[0].Key_region;
      let questionAttackType = championSorted[0].Adaptive_type;
      let questionSex = championSorted[0].Sex;
      let questionTypicalLane = championSorted[0].Typical_lane;
      let questionClass = championSorted[0].Class;
      let questionResource = championSorted[0].Resource_type;
      let questionRace = championSorted[0].Race;
      let questionFaction = championSorted[0].Faction;
      let questionCharRel = championSorted[0].Key_Character_rel;

      let questions = [
        {
          questionRegion: `Does your champion have anything to do with ${questionRegion}?`,
        },
        {
          questionAdaptiveType: `Is your champion's primary source of damage ${questionAttackType.toLowerCase()}?`,
        },
        {
          questionSex: `Is your champion ${questionSex.toLowerCase()}?`,
        },
        {
          questionTypicalLane: `Does your champion get commonly played in ${questionTypicalLane.toLowerCase()}?`,
        },
        {
          questionClass: `Is your champion a ${questionClass.toLowerCase()} champion?`,
        },
        {
          questionResource: `Does your champion use ${questionResource.toLowerCase()}?`,
        },
        {
          questionRace: `Is your champion a ${questionRace}?`,
        },
        {
          questionFaction: `Is your champion affiliated with ${questionFaction}?`,
        },
        {
          questionKeyCharRel: `Does your character have anything in common with ${questionCharRel}?`,
        },
      ];

      questions.push(questions.shift());
      console.log("shifted!");

      const objectFromQuestions = Object.values(questions)[0];
      const value = Object.keys(objectFromQuestions);
      console.log(value);

      const randomQuestion = questions.sort(() => Math.random() - 0.5);
      const randomQuestionDefined = randomQuestion[0];
      const randomQuestionFurtherDefined = Object.values(
        randomQuestionDefined
      )[0];

      secondQuestionsDatabase.unshift(randomQuestionDefined);

      if (secondQuestionsDatabase.length === 0) {
        secondQuestionsDatabase.unshift(randomQuestionDefined);
        console.log(secondQuestionsDatabase);
      } else {
        secondQuestionsDatabase.length = 0;
        secondQuestionsDatabase.unshift(randomQuestionDefined);
        console.log(secondQuestionsDatabase);
      }
    }

    secondShuffleQuestions();
    const secondAskedQuestion = secondQuestionsDatabase[0];
    const secondChosenQuestion = Object.values(secondAskedQuestion)[0];
    console.log(secondQuestionsDatabase);

    secondSeriesQuestions(secondChosenQuestion);
    buttonYes.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", gameStarts);
    buttonNo.removeEventListener("click", secondSeries);
    buttonNo.removeEventListener("click", firstSeriesNo);

    // if no in second series
    function secondSeriesNo() {
      secondShuffleQuestions();
      const askedQuestion = secondQuestionsDatabase[0];
      const chosenQuestion = Object.values(askedQuestion)[0];
      secondSeriesQuestions(chosenQuestion);
    }

    // if yes in second series, then second series questions
    function secondSeriesQuestions(chosenQuestion) {
      jhinTextBoxTwo.innerHTML = chosenQuestion;
      buttonYes.addEventListener("click", thirdSeries, { once: true }); // if yes, second series
      buttonNo.addEventListener("click", secondSeriesNo, { once: true }); // if no, removes options from first series one by one until yes OR restart
    }

    // if second series succeeds, third series
    function thirdSeries() {
      // okay so we're at here now
      let pickOne = secondQuestionsDatabase[0];
      let convert = Object.keys(pickOne);
      let pick = convert.toString();
      console.log(pick);

      if (pick === "questionRegion") {
        for (let i = 0; i < secondSeriesDatabase.length; i++) {
          if (
            secondSeriesDatabase[0].Key_region ===
            secondSeriesDatabase[i].Key_region
          ) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          }
        }
      }

      // this is working but I have a feeling its to do with the matching value from which the question is taken that's the issue

      if (pick === "questionAdaptiveType") {
        for (let i = 0; i < secondSeriesDatabase.length; i++) {
          if (
            secondSeriesDatabase[0].Adaptive_type ===
            secondSeriesDatabase[i].Adaptive_type
          ) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          }
        }
      }

      if (pick === "questionSex") {
        for (let i = 0; i < secondSeriesDatabase.length; i++) {
          if (secondSeriesDatabase[0].Sex === secondSeriesDatabase[i].Sex) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          }
        }
      }

      if (pick === "questionTypicalLane") {
        for (let i = 0; i < secondSeriesDatabase.length; i++) {
          if (
            secondSeriesDatabase[0].Typical_lane ===
            secondSeriesDatabase[i].Typical_lane
          ) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          }
        }
      }

      if (pick === "questionClass") {
        for (let i = 0; i < secondSeriesDatabase.length; i++) {
          if (secondSeriesDatabase[0].Class === secondSeriesDatabase[i].Class) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          }
        }
      }

      if (pick === "questionResource") {
        for (let i = 0; i < secondSeriesDatabase.length; i++) {
          if (
            secondSeriesDatabase[0].Resource_type ===
            secondSeriesDatabase[i].Resource_type
          ) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          }
        }
      }

      if (pick === "questionRace") {
        for (let i = 0; i < secondSeriesDatabase.length; i++) {
          if (secondSeriesDatabase[0].Race === secondSeriesDatabase[i].Race) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          }
        }
      }

      if (pick === "questionFaction") {
        for (let i = 0; i < secondSeriesDatabase.length; i++) {
          if (
            secondSeriesDatabase[0].Faction === secondSeriesDatabase[i].Faction
          ) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          }
        }
      }

      if (pick === "questionKeyCharRel") {
        for (let i = 0; i < secondSeriesDatabase.length; i++) {
          if (
            secondSeriesDatabase[0].Key_Character_rel ===
            secondSeriesDatabase[i].Key_Character_rel
          ) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          }
        }
      }

      buttonYes.removeEventListener("click", thirdSeries);
      buttonNo.removeEventListener("click", thirdSeries);
      buttonNo.removeEventListener("click", secondSeriesNo);

      // EUREKA! WORKS UP TO HERE.
    }

    // at this point the answer needs to be narrowed down.
    // before I do that, I need to make sure that:
    // 1. The same question cannot be asked twice;
    // -- this requires removing it from the possible question pool the second time around.
    // 2. There's a bug where the jhintext isn't swapped immediately and the prior text lingers

    function thirdSeriesQuestions(ChosenQuestion) {
      jhinTextBoxTwo.innerHTML = ChosenQuestion;
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
      // needs to be changed
      buttonYes.removeEventListener("click", jhinGuess);
    }
  }
}

/*
    if (pick === "questionAdaptiveType") {
      for (let i = 0; i < secondSeriesDatabase.length; i++) {
        for (let i = 0; i < championDatabase.length; i++) {
          if (
            secondSeriesDatabase[i].Adaptive_type ===
            championDatabase[i].Adaptive_type
          ) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase); // works but only one value...
          } else {
            return false;
          }
        }
      }
    }

    if (pick === "questionSex") {
      for (let i = 0; i < secondSeriesDatabase.length; i++) {
        for (let i = 0; i < championDatabase.length; i++) {
          if (secondSeriesDatabase[i].Sex === championDatabase[i].Sex) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          } else {
            return false;
          }
        }
      }
    }

    if (pick === "questionTypicalLane") {
      for (let i = 0; i < secondSeriesDatabase.length; i++) {
        for (let i = 0; i < championDatabase.length; i++) {
          if (
            secondSeriesDatabase[i].Typical_lane ===
            championDatabase[i].Typical_lane
          ) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          } else {
            return false;
          }
        }
      }
    }

    if (pick === "questionClass") {
      for (let i = 0; i < secondSeriesDatabase.length; i++) {
        for (let i = 0; i < championDatabase.length; i++) {
          if (secondSeriesDatabase[i].Class === championDatabase[i].Class) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          } else {
            return false;
          }
        }
      }
    }

    if (pick === "questionResource") {
      for (let i = 0; i < secondSeriesDatabase.length; i++) {
        for (let i = 0; i < championDatabase.length; i++) {
          if (
            secondSeriesDatabase[i].Resource_type ===
            championDatabase[i].Resource_type
          ) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          } else {
            return false;
          }
        }
      }
    }

    if (pick === "questionRace") {
      for (let i = 0; i < secondSeriesDatabase.length; i++) {
        for (let i = 0; i < championDatabase.length; i++) {
          if (secondSeriesDatabase[i].Race === championDatabase[i].Race) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          } else {
            return false;
          }
        }
      }
    }

    if (pick === "questionFaction") {
      for (let i = 0; i < secondSeriesDatabase.length; i++) {
        for (let i = 0; i < championDatabase.length; i++) {
          if (secondSeriesDatabase[i].Faction === championDatabase[i].Faction) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          } else {
            return false;
          }
        }
      }
    }

    if (pick === "questionKeyCharRel") {
      for (let i = 0; i < secondSeriesDatabase.length; i++) {
        for (let i = 0; i < championDatabase.length; i++) {
          if (
            secondSeriesDatabase[i].Key_Character_rel ===
            championDatabase[i].Key_Character_rel
          ) {
            thirdSeriesDatabase.push(secondSeriesDatabase[i]);
            console.log(thirdSeriesDatabase);
          } else {
            return false;
          }
        }
      }
    } */
