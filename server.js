
const express = require('express');
const { randomSelect, guess, gameState, html} = require('./index.js');
const app = express();


const PORT = 7100;
app.use(express.json());

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

// PLAYER NAME curl link curl http://localhost:7100/playerName?name="

app.get("/playerName", (req, res) => {
  let name = req.query.name;
  gameState.name = name;
  res.send(
    `Hello ${name},<br>
    <input id="string" required />
    <a id="link"><button>Go</button></a>
    <script> let stringInput = document.getElementById('string')
        stringInput.addEventListener('keyup', (e)=>{
            let link = document.getElementById('link')
            link.setAttribute('href','http://localhost:7100/playerName?name='+e.target.value)})</script><br> Welcome to the Hangman Game :<a href = "http://localhost:7100/startGame">Start Game</a>`
  );
});

// CODE FOR STARTING THE GAME curl http://localhost:7100/startGame

app.get('/startGame', (req, res) => {
  theScore = 0;
  let randomWord = randomSelect();
  res.send(
    `Here is your First Word ${randomWord}: guess the letter ${html}`
  );
});

// CODE FOR HANDLING A GUESS

app.get('/enterGuess', (req, res) => {
  let userGuess = req.query.guess;
  let response = guess(userGuess);
  res.send(response);
});

// SCORE FOR A GUESS link curl http://localhost:7100/score

app.get('/score', (req, res) => {
  let theScore = gameState.theScore;
  let name = gameState.name;
  res.send(`the score is: ${theScore}, name is ${name}: To continue the Game: <a href= "http://localhost:7100/startGame">Play Again</a>`);
});

app.get('/restart', (req, res) => {
  res.send(`To continue the Game: <a href= "http://localhost:7100/startGame">play Again</a> `);
});