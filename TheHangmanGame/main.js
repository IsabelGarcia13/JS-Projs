'use strict';

//Definig first variables
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const player0Score = document.getElementById('player-0-score');
const player1Score = document.getElementById('player-1-score');

const btnStartScreen = document.querySelector('.btn-remove-screen');
const btnNew0 = document.getElementById('new0');
const btnNew1 = document.getElementById('new1');
const btnNew2 = document.getElementById('new2');
const btnWordInput = document.querySelector('.btn-word-input');
const btnCloseModal = document.querySelector('.close-modal');
const submitWord = document.getElementById('submit-word');
const submitBtn = document.querySelector('.btn-submit');

const startScreen = document.querySelector('.start');
let themeDisplay = document.querySelector('.theme-display');
let displayWord = document.querySelector('.display-word');
let displayLetters = document.querySelector('.display-letters');
const modal = document.querySelector('.modal');
const gameOverHidden = document.querySelector('.game-over');
const gameWonHidden = document.querySelector('.game-won');
const overlay = document.querySelector('.overlay');
const hangPicture = document.getElementById('image-forca');

let inputGuess = document.querySelector('#input-guess');
const inputWord = document.getElementById('input-word');
const inputTheme = document.getElementById('input-theme');

let maxTries = 6;
let tries = 0;
let playing = true;
let arrCharacters = [];
let arrDisplay = [];
let activePlayer = 0;



//Starting conditions
const startGame = function () {
    gameOverHidden.classList.add('hidden');
    gameWonHidden.classList.add('hidden');
    player0.classList.toggle('player-active');
    player1.classList.toggle('player-active');
    overlay.classList.add('hidden');
    player0Score.textContent = 0;
    player1Score.textContent = 0;
    themeDisplay.textContent = '';
    displayWord.textContent = '';
    displayLetters.textContent = '';
    inputGuess.value = '';
    inputGuess.disabled = true;
    submitBtn.disabled = true;
    maxTries = 6;
    tries = 0;
    playing = true;
    arrCharacters = [];
    arrDisplay = [];
    hangPicture.src = `imgs/hangman-${tries}.png`;
    activePlayer = 0;
    console.log('started game');
}


//Starting game
startGame();


const gameOver = function() {
    //show game over screen and New Game Button
    gameOverHidden.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
}
const gameWon = function() {
    //show game won screen and New Game button
    gameWonHidden.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//active player function
const switchPlayer = function() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player-active');
    player1.classList.toggle('player-active');
    console.log(`player ${activePlayer + 1} playing`);
}

const addScore = function(){
    if (activePlayer === 0) {
        player0Score.textContent++;
    } else if (activePlayer === 1) {
        player1Score.textContent++;
    }
    gameWon();
    console.log('score added');
}


//Buttons functionality

btnNew1.addEventListener('click', function(){
    switchPlayer();
    addScore();
    
    gameWonHidden.classList.add('hidden');
    gameOverHidden.classList.add('hidden');
    overlay.classList.add('hidden');
    themeDisplay.textContent = '';
    displayWord.textContent = '';
    displayLetters.textContent = '';
    inputGuess.value = '';
    inputGuess.disabled = true;
    submitBtn.disabled = true;
    maxTries = 6;
    tries = 0;
    playing = true;
    arrCharacters = [];
    arrDisplay = [];
    hangPicture.src = `imgs/hangman-${tries}.png`;
});

btnNew2.addEventListener('click', function(){
    addScore();
    switchPlayer();
    gameWonHidden.classList.add('hidden');
    overlay.classList.add('hidden');
    themeDisplay.textContent = '';
    displayWord.textContent = '';
    displayLetters.textContent = '';
    inputGuess.value = '';
    inputGuess.disabled = true;
    submitBtn.disabled = true;
    maxTries = 6;
    tries = 0;
    playing = true;
    arrCharacters = [];
    arrDisplay = [];
    hangPicture.src = `imgs/hangman-${tries}.png`;
});

btnWordInput.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    // console.log('fechou');
});

submitWord.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    themeDisplay.textContent = inputTheme.value;
    // displayWord.textContent = inputWord.value;
    // console.log(inputTheme.value.length);
    for (let i = 0; i < inputWord.value.length; i++) {
        // console.log(index);
        displayWord.innerText += ' _ ';
        arrDisplay[i] = '_';
        // console.log(arrDisplay);
    }
    //seperate input word into an array
    arrCharacters = Array.from(inputWord.value.toLowerCase());

    inputGuess.disabled = false;
    submitBtn.disabled = false;
});


//Start Guessing
submitBtn.addEventListener('click', function () {
    inputGuess.value = inputGuess.value.toLowerCase();
    if (inputGuess.value.length === 1) {
        //Guessing a letter 
        //testing
        console.log(arrCharacters);
        console.log('1 letra');
        //Does the guessed letter match any index in the array?
        let letterExists = false;

        for (let i = 0; i <= arrCharacters.length; i++) {
            if (inputGuess.value === arrCharacters[i]) {
                console.log('sim');
                letterExists = true;
            }
        }

        if (letterExists) {
            //Calculate the correct letter in the correct position
            for (let i = 0; i <= arrCharacters.length - 1; i++) {
                if (inputGuess.value === arrCharacters[i]) {
                    arrDisplay[i] = arrCharacters[i];
                }
            }            
        }
        else {
            //Display the wrong letter and add a body part
            displayLetters.innerText += ' ' + inputGuess.value;
            tries++;
            hangPicture.src = `imgs/hangman-${tries}.png`;
            
            if(tries >= maxTries) {
                gameOver();
                console.log('sim perdeu');
            }
        }

        displayWord.innerText = '';
        for (let i = 0; i < arrDisplay.length; i++) {
            displayWord.innerText += ' ' + arrDisplay[i] + ' ';
        }

        let hasWon = true;
        for (let i = 0; i <= arrDisplay.length - 1; i++) {
            if(arrDisplay[i] === '_') {
                hasWon = false;
            }   
        }       
        if(hasWon){
            gameWon();
            console.log('sim ganhou');
        }
    }
    else {
        //Guessing a word
        console.log('palavra');
        //if its right
        if(inputGuess.value === inputWord.value) {
            gameWon();
        }
        //if its wrong
        else {
            displayLetters.innerText += ' ' + inputGuess.value;
            tries++;
            hangPicture.src = `imgs/hangman-${tries}.png`
            if(tries >= maxTries) {
                gameOver();
            }
        }
    }
});


