var score = 0;
var gamers = document.getElementById("gamers")

let x = prompt('How many players are playing');

let players = [];

for (let i=0; i<x; i++){
    players.push(prompt("Give player "+ (i*1+1) + "'s nimi"));
}

for (let i=0; i<players.length; i++){
    document.write('Player ' + (i*1+1) + ': ' + players[i] + '<br>');
}

players[i] = '<span style="color:red">' + players[i] + '</span>';

function rollDice() {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    var snakeEyes = 25;
    var doubles = diceTotal * 2;

    if (d1 == 1 && d2 == 1){
        status.innerHTML = "Snake eyes! You get "+snakeEyes+" points!";
        score = score + 25;
    } else if (d1 == d2){
        status.innerHTML = "You rolled "+diceTotal+".";
        status.innerHTML += " DOUBLES! You get "+doubles+" points!";
        score = score + doubles;
    } else if (d1 == 1 || d2 == 1) {
        status = turnOver();
        score = 0;
    } else {
        status.innerHTML = "You rolled "+diceTotal+".";
        score = score + diceTotal;
    }
    gameScore()
}

function gameScore() {
    var gameScore = document.getElementById("gameScore");
    gameScore.innerHTML = "Score: " + score;

}

function endTurn() {
    var status = document.getElementById("status");
    status.innerHTML = "You ended your turn. You got " + score + " points!";
    score = 0;
}

function turnOver() {
    var status = document.getElementById("status");
    status.innerHTML = "Turn over! You got 0 points this round.";
}