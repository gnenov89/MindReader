var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var answer = letters[Math.floor(Math.random() *25 + 1)];
var wins = 0;
var losses = 0;
var GuessesLeft = 9;
var guesses = []; 
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("losses");
var GuessesLeftHTML= document.getElementById("guessesLeft");
var guessesHTML = document.getElementById("guesses");
console.log("The answer is:" + answer+ ".");
window.addEventListener("keyup", (guess) => {
	if (GuessesLeft <= 0) {
		losses ++;
       alert("Game over!!!No more guesses aloowed!Wanna try again?");
       answer = letters[Math.floor(Math.random() * 25 + 1)];
       guessesLeft = 9;
       console.log("The answer is" + answer + ".");

	} else {
      if (guess.key < "a" || guess.key > "z") {
        alert("You know that's not a letter, right? Try again, and guess a letter (in lower case) this time!");
      } else if (guess.key.toUpperCase() === answer){
          wins ++;
          alert("RIGHT! How did you know I was thinking of the letter " + guess.key.toUpperCase() + "? Let's play again! Try to guess the new letter I'm thinking of now.")
          answer = letters[Math.floor(Math.random() * 25 + 1)];
          guessesLeft = 9;
          console.log("The new answer is " + answer + ".");
        } else {
            guessesLeft --;
            alert("WRONG! I'm not thinking of the letter " + guess.key.toUpperCase() + ". Keep trying!");
          }
    }
});


