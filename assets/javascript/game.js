// **** Select a random letter ****
// This generates a random number between 0 and 25, and slices the string to obtain a single letter
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var index = Math.floor(Math.random() * alphabet.length);
var answer = alphabet[index];

//console.log(answer); // checking to make sure the answer was generated 
//Debugging purposes - I'm not gonna give someone the answer if they're clever enough to look!

// **** Initializing important variables ****
var win = 0; //counts number of wins
var lose = 0; //counts number of losses
var guessesLeft = 9; // Number of guesses the player has left
var guesses = []; // Player's guesses will get added to this string
document.getElementById("guessesLeft").innerHTML = guessesLeft; //Update screen


document.onkeyup = function (event) {
    // Get Input from User
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
            guesses = [];
        }
        //If the user guesses incorrectly and it was their last turn 
        //Also, don't penalize players for guessing the same letter twice
        else if (guessesLeft === 1 && !guesses.includes(input)) {
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
            guesses = [];
        }
        // If the user guesses incorrectly and they can guess again
        // Also, don't penalize players if they guess the same letter again
        else {
            if (!guesses.includes(input)) {
                guessesLeft = guessesLeft - 1; //decrement guessesLeft
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
                //print their guess to the screen
                guesses.push(input);
                document.getElementById("guesses").innerHTML = guesses.join(", ");
            }
        }
    }
};