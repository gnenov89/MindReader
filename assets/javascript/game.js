var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var answer = letters[Math.floor(Math.random() * 25 + 1)];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("losses");
var guessesLeftHTML = document.getElementById("guessesLeft")
var guessesHTML = document.getElementById("guesses");
console.log("Answer Key: The answer is " + answer + ".");
window.addEventListener("keyup", (guess) => {
  //First condition: Check whether the player still has tries left.
  if (guessesLeft <= 0) {
    losses ++;
    lossesHTML.innerHTML = losses;
    alert("Negative, Captain! I encourage you to try again!");
    answer = letters[Math.floor(Math.random() * 25 + 1)];
    guessesLeft = 9;
    console.log("Answer Key: The new answer is " + answer + ".");
    guessesLeftHTML.innerHTML = "10";
    guesses = [];
    guessesHTML.innerHTML = "None"
  } else {
      if (guess.key < "a" || guess.key > "z") {
        alert("Not a letter! We do the letter game - no numbers!");
      } else if (guess.key.toUpperCase() === answer){
        //Second condition: Check whether the player pressed a letter key.
          wins ++;
          winsHTML.innerHTML = wins;
          alert("Big Success, " + guess.key.toUpperCase() + ", high five!.")
          answer = letters[Math.floor(Math.random() * 25 + 1)];
          guessesLeft = 9;
          console.log("Answer Key: The new answer is " + answer + ".");
          guessesLeftHTML.innerHTML = "10";
          guesses = [];
          guessesHTML.innerHTML = "None"
        } else {
            guessesLeft --;
            guesses.push(guess.key.toUpperCase());
            guessesHTML.innerHTML = guesses.join(" ");
            guessesLeftHTML.innerHTML = (guessesLeft + 1);
            alert("No more  " + guess.key.toUpperCase() + ", attempts. It's been a quite a journey!");
          }
    }
});