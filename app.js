'use strict';

// * buttons
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdGame = document.querySelector('.btn--hold');

// * main score
let scoreOne = document.getElementById('score--0');
let scoreTwo = document.getElementById('score--1');

// * current scores
let currentScoreOne = document.getElementById('current--0');
let currentScoreTwo = document.getElementById('current--1');

// * Dice image
let diceImg = document.querySelector('.dice');

// * Players profile
const sectionOne = document.querySelector('.player--0');
const sectionTwo = document.querySelector('.player--1');

// * Array with 6 diffrent image source
var newImage = [
  'images/dice-1.png',
  'images/dice-2.png',
  'images/dice-3.png',
  'images/dice-4.png',
  'images/dice-5.png',
  'images/dice-6.png',
];

// * Players score which adds at main element
let playerOneScore = 0;
let playerTwoScore = 0;
// * Players scores that adds in current element
let addingScoreOne = 0;
let addingScoreTwo = 0;

// * To know which player is active
let playerInSectionOne = true;

rollDice.addEventListener('click', () => {


  // ! Checking if player one is active or not
  if (playerInSectionOne == true) {
    // ! To check if the main score of the player one reaches to 100
    if (playerOneScore >= 100) {
      sectionOne.classList.add('player--winner');
      scoreOne.textContent = 100;
    }
    // ! If main score not reaches to 100 this portion is execute
    else {
      // ! This is where the dice image and dice number will generate
      diceImg.classList.remove('hidden');
      var randomImage = Math.floor(Math.random() * newImage.length);
      diceImg.src = newImage[randomImage];
      let diceValue = newImage.indexOf(newImage[randomImage]) + 1;
      // console.log(diceValue); to check if the dice image and number are matching

      // * To check if the numbers is 1 or not
      if (diceValue == 1) {
        // ! number is one player is now switching
        currentScoreOne.textContent = 0;
        addingScoreOne = 0;
        sectionOne.classList.remove('player--active');
        sectionTwo.classList.add('player--active');
        // * here the value is setting for false so the main else part of the code can execute in next dice roll
        playerInSectionOne = false;
      }
      // ! if dice roll gives other number then 1 this will execute
      else {
        // ! addingScore is used so we can reset it to 0 everytime player change. Because the playeronescore has to added evertime
        addingScoreOne = addingScoreOne + diceValue;
        currentScoreOne.textContent = addingScoreOne;
      }
    }
  }


  //   ! else part start where value is false and game is shifted to player 2
  else {

    // ! same checking if players has reached to 100 or not
    if (playerTwoScore >= 100) {
      sectionTwo.classList.add('player--winner');
      scoreTwo.textContent = 100;
    }
    // ! player still has not win so this part is going to execute
    else {
      // ! dice image and number part
      diceImg.classList.remove('hidden');
      var randomImage = Math.floor(Math.random() * newImage.length);
      diceImg.src = newImage[randomImage];
      let diceValue = newImage.indexOf(newImage[randomImage]) + 1;

      // ! same cheking if the dice got 1 or not, if it got 1 then the switching part will happen next which is below
      if (diceValue == 1) {
        currentScoreTwo.textContent = 0;
        addingScoreTwo = 0;
        sectionTwo.classList.remove('player--active');
        sectionOne.classList.add('player--active');
        // * setting this value to true so the active tag will pass to player one again
        playerInSectionOne = true;
      }
      // ! if player get other numbers rather then 1
      else {
        addingScoreTwo = addingScoreTwo + diceValue;
        currentScoreTwo.textContent = addingScoreTwo;
      }
    }
  }
});


//  * Hold the game button use

holdGame.addEventListener('click', () => {

  // ! checking which side the player--active tag is
  // * if the tag is in player one this code work
  if (playerInSectionOne == true) {
    // ! here the main score will adding up at the time of cliking the hold button. And this will remain their untill the game ends
    playerOneScore = playerOneScore + addingScoreOne;
    scoreOne.textContent = playerOneScore;

    // ! again checking if the player wins or not in the time of clicking the hold and main score updating.
    if (playerOneScore >= 100) {
      sectionOne.classList.add('player--winner');
      scoreOne.textContent = 100;
    }
    // ! and if the player one still not win this part will run
    else {
      currentScoreOne.textContent = 0;
      addingScoreOne = 0;
      sectionOne.classList.remove('player--active');
      sectionTwo.classList.add('player--active');
      // * making the value false again so the section player get active tag in next dice roll, because the main work of hold button is to change players and update the main score
      playerInSectionOne = false;
    }
  }


  //   ! if the active tag is in second player
  else {
    playerTwoScore = playerTwoScore + addingScoreTwo;
    scoreTwo.textContent = playerTwoScore;

    if (playerTwoScore >= 100) {
      sectionTwo.classList.add('player--winner');
      scoreTwo.textContent = 100;
    } else {
      currentScoreTwo.textContent = 0;
      addingScoreTwo = 0;
      sectionTwo.classList.remove('player--active');
      sectionOne.classList.add('player--active');
      //  * making it true so in next dice roll player one code will execute.
      playerInSectionOne = true;
    }
  }
});

// * New game button use

newGame.addEventListener('click', () => {
  if (playerInSectionOne == true) {
    currentScoreOne.textContent = 0;
    currentScoreTwo.textContent = 0;
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    addingScoreOne = 0;
    addingScoreTwo = 0;
    diceImg.classList.add('hidden');
    sectionOne.classList.remove('player--winner');
    sectionTwo.classList.remove('player--winner');
  } else {
    currentScoreOne.textContent = 0;
    currentScoreTwo.textContent = 0;
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    addingScoreOne = 0;
    addingScoreTwo = 0;
    diceImg.classList.add('hidden');
    sectionOne.classList.remove('player--winner');
    sectionTwo.classList.remove('player--winner');
    // ! becasue whenever the new game will start the active tag start with player one.
    sectionOne.classList.add('player--active');
    sectionTwo.classList.remove('player--active');
  }
});
