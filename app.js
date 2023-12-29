let random = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let round = 1;
let resetButton;
guessField.focus();

function checkGuess() {
  const user = Number(guessField.value);

  if (round === 1) {
    guesses.textContent = "Previous Guess:";
  }

  guesses.textContent = `${guesses.textContent} ${user}`;

  if (user === random) {
    lastResult.textContent = "Congratulation! You Win";
    lowOrHi.textContent = "";
    gameOver();
  } else if (round === 10) {
    lastResult.textContent = "You lost! Game Over";
    lowOrHi.textContent = "";
    gameOver();
  } else {
    lastResult.textContent = "Wrong! Try again";
    if (user > random) {
      lowOrHi.textContent = "Ow! It's too high!";
    } else {
      lowOrHi.textContent = "It's too low!";
    }
  }
  round++;
  guessField.value = "";
  guessField.focus();
}

function gameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", newGame);
}

function newGame() {
  round = 1;

  const resetPara = document.querySelectorAll(".resultParas p");
  for (const reset of resetPara) {
    reset.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);
