var score = 0;

let x = prompt('How many players are playing?');

let players = [];
let roundScore = 0
let turn = 0;

for (let i=0; i<x; i++){
    let player = { name: "", points: 0 }
    player.name = prompt("Give player "+ (i*1+1) + "'s name");
    players.push(player);
}

let goal = prompt('How many points to win the game?');

function rollDice() {
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    document.getElementById("diceImg1").src = "photos/Die"+d1+".png"
    document.getElementById("diceImg2").src = "photos/Die"+d2+".png"
    var snakeEyes = 25;
    var doubles = diceTotal * 2;

    if (d1 == 1 && d2 == 1) {
        status.innerHTML = "Snake eyes! You get "+snakeEyes+" points!";
        score = score + 25;
    } else if (d1 == d2) {
        status.innerHTML = "You rolled "+diceTotal+".";
        status.innerHTML += " DOUBLES! You get "+doubles+" points!";
        score = score + doubles;
    } else if (d1 == 1 || d2 == 1) {
        score = 0;
        status = turnOver();
    } else  {
        status.innerHTML = "You rolled "+diceTotal+".";
        score = score + diceTotal;
    } if (score >= goal) {
        status = gameWon();
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
    endRound()
    printScore();
}

function turnOver() {
    var status = document.getElementById("status");
    status.innerHTML = "Turn over! You got 0 points this round.";
    endRound()
    printScore()
}

function gameWon() {
    var status = document.getElementById("status");
    status.innerHTML = "You Win!";
    printScore()
}

function endRound() {
    players[turn].points += score;
    turn++;
    if (turn >=players.length) {
        turn = 0;
    }
    score = 0;
}

function printScore() {
    let html = "";
    for(let i in players){
        let x = Number(i)+1;
        html += `Player ${x}: ${players[i].name}  points: ${players[i].points} <br>`;
    }
    document.getElementById('players').innerHTML = html;
}