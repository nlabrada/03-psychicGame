// my global vars
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var char = "abcdefghijklmnopqrstuvwxyz";
var guessedLetters = [];
var randomLetter = null;

// updating the random letter
function updateRandom() {
   randomLetter = (char).split('')[(Math.floor(Math.random() * 26 ))];
};
// updating guesses left
function updateGuesses() {
    document.getElementById("guesses").innerHTML = guessesLeft;
}
// show guessed letters
function showGuessed() {
    document.getElementById("guesses").innerHTML = guessedLetters.join(", ");
}
// checking for a winner
function checkGuess() {
    if ( userInput === randomLetter) {
        wins++
        alert("😱 dude you got it right.. kinda scary 🔮");
        resetGame();
    } else if( guessesLeft >= 1 ){
        alert("you've got one try left!");
        updateRandom();
    } else if ( guessesLeft === 0){
        losses++
        alert("you lost to a computer smh");
        resetGame();
    }
}
// rest our game!
function resetGame() {
    guessesLeft = 10;
    guessedLetters = [];
    updateRandom();
    updateGuesses();
}

// run when document loads
updateRandom();
updateGuesses();

// run this when they keyboard is clicked!
document.onkeyup = function(event) {
    // take off a guess
    guessesLeft--

    // make the user input lowercase
    var userInput = String.fromCharCode(event.which).toLowerCase();

    // checking that the userInput is valid
    if (userInput === "/^[A-Z]+$/i") {
        // pushing the valid userInput to
        // the guessedLetters array
        guessedLetters.push(userInput);
        // let's see if it's a winner winner chicken dinner
        checkGuess();
    } else {
        // tell user to try valid input
        alert("please choose a letter");
    }

}
