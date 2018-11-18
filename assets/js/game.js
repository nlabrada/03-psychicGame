// my vars
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var char = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = (char).split('')[(Math.floor(Math.random() * 26 ))];
var guessedLetters = [];

// when user wins
function updateLosses() {
    wins++
}

// when user loses
function updateLosses() {
    losses++
}

// show guessed letters
function showGuessed() {
    document.getElementById("guesses").innerHTML = guessedLetters.join(", ");
}

// run this when they keyboard is clicked!
document.onkeyup = function(event) {
    // make the user input lowercase
    var userInput = String.fromCharCode(event.which).toLowerCase();

    // checking that the userInput is valid
    if (userInput != "/^[A-Z]+$/i") {
        alert("please choose a letter");
    } else {
        // pushing the valid userInput to
        // the guessedLetters array
        guessedLetters.push(userInput);
        // for wins
        // for losses


    }
}