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
    } else if(d1 == d2){
        status.innerHTML = "You rolled "+diceTotal+".";
        status.innerHTML += " DOUBLES! You get "+doubles+" points!";
    } else if (d1 || d2) {
        status.innerHTML = "You rolled "+diceTotal+"."
    } else if (d1 || d2 == 1){
        status.innerHTML = "Turn over! You got 0 points."
    }
}

function endTurn() {
    var status = document.getElementById("status");
    status.innerHTML = "You ended your turn. You got points!";
}
