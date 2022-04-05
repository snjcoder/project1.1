let RandomItem;
let UnderScore = [];
let GuessesLeft = 9;
let LettersGuessed = new Set();

const gameState = {
  theScore: 0,
  name: "",
};

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let buttonArray = [];
for (let i = 0; i < letters.length; i++) {
  let button = `<a href="http://localhost:7100/enterGuess?guess=${letters[i]}">
    <button>${letters[i]}</button>
    </a>`;
  buttonArray.push(button);

}
let html = buttonArray.join("");

let MyWords = [
  "arrays",
  "booleans",
  "break",
  "comparisons",
  "const",
  "datatype",
  "functions",
  "loop",
  "math",
  "modules",
  "objects",
  "operators",
  "random",
  "strings",
  "switch",
  "variables",
];

let levels = [
 `<pre> --------<br>   
    |      |<br>
           |<br>
           |<br>
           |<br>
           |<br>`,

 `<pre> --------<br>   
    |      |<br>
    0      |<br>
           |<br>
           |<br>
           |<br>`,

 `<pre> --------<br>   
    |      |<br>
    0      |<br>
    |      |<br>
           |<br>
           |<br>`,

 `<pre> --------<br>   
    |      |<br>
    0      |<br>
    |      |<br>
    |      |<br>
           |<br>`,

 `<pre> --------<br>   
    |      |<br>
    0      |<br>
    |      |<br>
    |      |<br>
    |      |<br>`,

 `<pre> --------<br>   
    |      |<br>
    0      |<br>
   /|      |<br>
    |      |<br>
    |      |<br>`,

 `<pre> --------<br>   
    |      |<br>
    0      |<br>
   /|\\     |<br>
    |      |<br>
    |      |<br>`,

 `<pre> --------<br>   
    |      |<br>
    0      |<br>
   /|\\     |<br>
    |      |<br>
   \\|      |<br>`,

 `<pre> --------<br>   
    |      |<br>
    0      |<br>
   /|\\     |<br>
    |      |<br>
   \\|/     |<br>`,
];

console.log(levels);

function randomSelect() {
  LettersGuessed = new Set();
  GuessesLeft = 9;
  let randomIndex = Math.floor(Math.random() * MyWords.length);
  RandomItem = MyWords[randomIndex];
  console.log("RandomItem is", RandomItem);
  let underScore = generateUnderscore();

  return underScore;
}

let generateUnderscore = () => {
  UnderScore = [];
  for (let i = 0; i < RandomItem.length; i++) {
    let u = "_";
    UnderScore.push(u);
  }
  console.log("UnderScore is", UnderScore);
  return UnderScore;
};

/**
 * Check if the given guess:
 *  - has not been used before
 *  - is a single letter
 *
 * @param {*} letter
 * @returns NULL if not used & is single letter, otherwise return message string
 */

function validateGuess(letter) {
  if (letter.length === 1) {
    if (!LettersGuessed.has(letter)) {
      LettersGuessed.add(letter);
      return null;
    } else {
      return "Letter has already been guessed!";
    }
  } else {
    return "You can only guess one letter at a time!";
  }
}

function guess(userGuess) {
  let validResponse = validateGuess(userGuess);
  if (validResponse !== null) {
    return validResponse;
  }
  let matches = RandomItem.matchAll(userGuess);
  let found = false;
  for (let match of matches) {
    UnderScore[match.index] = userGuess;
    found = true;
  }
  if (found) {
    if (UnderScore.includes("_")) {
      return `You Guessed the correct letter ${UnderScore}.<br> <br>${html}  You have ${GuessesLeft} strikes left.<br>${
        levels[9-GuessesLeft]
      }`;
    } else {
      gameState.theScore = gameState.theScore + 1; 
      return `You guessed it!!! ${UnderScore}. YOU WIN!!!, <a href = "http://localhost:7100/score">The Score</a>`;
      
    }
  } else {
    GuessesLeft = GuessesLeft - 1;
    if (GuessesLeft <= 0) {
      gameState.theScore = gameState.theScore - 1;
      return `You lose!  ${UnderScore}. The word was ${RandomItem}, <a href = "http://localhost:7100/score">The Score</a>`;
    } else {
      console.log(GuessesLeft, levels[9-GuessesLeft]);
      return `You guessed the incorrect letter. You have ${GuessesLeft} strikes left.  ${UnderScore}.<br> <br>${html}.<br>${
        levels[9-GuessesLeft]
      }`;
    }
  }
}

module.exports = { guess, randomSelect, gameState, html};



