// my global vars
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var char = "abcdefghijklmnopqrstuvwxyz";
var guessedLetters = [];
var randomLetter = null;

// updating the random letter
function updateRandom() {
   randomLetter = char.split('')[(Math.floor(Math.random() * 26 ))];
};
// updating guesses left
function updateGuesses() {
    document.getElementById("guesses").innerHTML = guessesLeft;
}
// show guessed letters
function showGuessed() {
    document.getElementById("guessed").innerHTML = guessedLetters.join(", ");
}
// rest our game!
function resetGame() {
    guessesLeft = 10;
    guessedLetters = [];
    updateRandom();
    updateGuesses();
    showGuessed();
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

    // pushing the valid userInput to
    // the guessedLetters array
    guessedLetters.push(userInput);

    // update our guesses left and already guessed
    updateGuesses();
    showGuessed();
    
    // let's see if it's a winner winner chicken dinner
    if ( userInput === randomLetter) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("😱 dude, you got it right.. kinda scary 🔮");
        resetGame();
    } else if ( guessesLeft === 0){
        losses++;
        document.getElementById("losses").innerHTML = losses;
        alert("you lost to a computer smh");
        resetGame();
    }

}
