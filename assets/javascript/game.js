'use strict';

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// assign each alphabetical character their corresponding browser keycode
var keyCodes = {
    "a": 65,
    "b": 66,
    "c": 67,
    "d": 68,
    "e": 69,
    "f": 70,
    "g": 71,
    "h": 72,
    "i": 73,
    "j": 74,
    "k": 75,
    "l": 76,
    "m": 77,
    "n": 78,
    "o": 79,
    "p": 80,
    "q": 81,
    "r": 82,
    "s": 83,
    "t": 84,
    "u": 85,
    "v": 86,
    "w": 87,
    "x": 88,
    "y": 89,
    "z": 90
};

// start game with default 0 wins, losses and 9 guesses.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerGuess = "";
var usedLetters = [];
var validLetter = true;

function newGame() {
    guessesLeft = 9;
    usedLetters = [];
    validLetter = true;
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
}

//randomly generate "a-z" character for computers hidden letter to guess

//user guess is empty before any key is pressed
var userGuess = "";
newGame();

// when a key is pressed
document.onkeypress = function (e) {
    // user guess is set to pressed key
    userGuess = e.key;

    if (!e.metaKey) {
        e.preventDefault();
    }

//    debugger
//    // if user guess is not a letter
//    if (e.keyCode < 65 || e.keyCode > 122) {
//        alert("letters only, please...");
//        validLetter = false;
//        userGuess = e.key;
//        }

    // if user guess is uppercase letter
    else if (userGuess === userGuess.toUpperCase()) {
        // user guess is converted to lower case
        userGuess = userGuess.toLowerCase();
        }

    // if user guess is same as character value from randomized computer letter...
    if (userGuess === computerGuess && validLetter === true) {
        alert("You win, winner!");
        wins = wins + 1;
        newGame();
    }

    // when user guess is wrong...
    else if (userGuess != computerGuess && validLetter === true){
        alert("wrong answer!")
        // add user guess to end of used letters array and decrease guesses left by 1
        usedLetters.push(userGuess);
        guessesLeft = guessesLeft  - 1;
        }

    // when guessesLeft is equal to 0, game over alert.
    if (guessesLeft === 0)
        {
        alert("You lose, loser!");
        losses = losses + 1;
        newGame();
        }

//    // display all variables and input to debug
//    document.getElementById("randomLetter").innerHTML = computerGuess;
//    document.getElementById("randomLetterKeycode").innerHTML = keyCodes[computerGuess];
//    document.getElementById("inputLetter").innerHTML = userGuess;
//    document.getElementById("inputKeycode").innerHTML = keyCodes[userGuess];
//

    // display pertinent game information
    var winsDisplay = document.getElementById("winsGame");
    winsDisplay.innerHTML = wins;

    var lossesDisplay = document.getElementById("lossesGame");
    lossesDisplay.innerHTML = losses;

    var guessesDisplay = document.getElementById("guessesLeft");
    guessesDisplay.innerHTML = guessesLeft;

    var usedLettersDisplay = document.getElementById("usedLetters");
    usedLettersDisplay.innerHTML = usedLetters;
}
