//Function to generate a random number
function randomNumber() {
    return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 7);

    if (num >= 1 && num <= 6) {
          resolve(num);
    } else {
          reject("Invalid random number generated");
    }
    });
}

//function of actual game
function playGame() {
    return new Promise((resolve, reject) => {
    let points = 0;

function makeGuess() {
  const guess = parseInt(prompt("Enter a number between 1 and 6"));
  randomNumber()
    .then(num => {
      console.log("Random number is", num);

      if (guess === num) {
        points += 2;
        console.log("Congratulations! You guessed correctly, 2 points");
      } else if (Math.abs(guess - num) === 1) {
        points += 1;
        console.log("Incorrect, You get 1 point.");
      } else {
        console.log("Sorry, you didn't guess correctly. 0 points.");
      }

      const playAgain = confirm("Do you want to play again?");

      if (playAgain) {
        makeGuess();
      } else {
        resolve(`Game over, total score: ${points}`);
      }
    })
    .catch(error => {
      reject(error); 
    });
}

makeGuess();
});
}
// calling the main function
playGame()
.then(result => {
console.log(result);
})
.catch(error => {
console.log(error);
});
