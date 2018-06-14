// **** Select a random letter ****
// This generates a random number between 0 and 25, and slices the string to obtain a single letter
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var index = Math.floor(Math.random() * alphabet.length);
var answer = alphabet[index];

console.log(answer); // checking to make sure the answer was generated

// **** Initializing important variables
var win = 0;
var lose = 0;
var guessesLeft = 9; // Number of guesses the player has left
var guesses = ""; // Player's guesses will get added to this string
document.getElementById("guessesLeft").innerHTML = guessesLeft;


document.onkeyup = function (event) {
    // **** Get Input from User ****
    var input = event.key;
    if (alphabet.includes(input)) {
        //If the player guesses the letter correctly
        if (input === answer) {
            // Increment win
            win = win + 1;
            document.getElementById("wins").innerHTML = win;
            //start a new round
            guessesLeft = 9;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            document.getElementById("guesses").innerHTML = "";
            //Select new letter
            index = Math.floor(Math.random() * alphabet.length);
            answer = alphabet[index];
        }
        //If the user guesses incorrectly and it was their last turn
        else if (guessesLeft === 1) {
            //increment Lose
            lose = lose + 1;
            document.getElementById("losses").innerHTML = lose;
            // start a new round
            guessesLeft = 9;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            document.getElementById("guesses").innerHTML = "";
            //select new letter
            index = Math.floor(Math.random() * alphabet.length);
            answer = alphabet[index];
        }
        // If the user guesses incorrectly and they can guess again
        else {
            guessesLeft = guessesLeft - 1; //decrement guessesLeft
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            //print their guess to the screen
            if (guessesLeft === 8) {
                guesses = input;
                document.getElementById("guesses").innerHTML = guesses;
            } else {
                guesses = guesses + ", " + input;
                document.getElementById("guesses").innerHTML = guesses;
            }
        }
    }
};