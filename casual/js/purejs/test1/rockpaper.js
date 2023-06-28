let stats = JSON.parse(localStorage.getItem('stats'));

if(stats === null){
    stats = {
        playercount: 0,
        computercount: 0,
        ties: 0
    }
}
updateValues();

function getComputerMove() {
    let computerMove = "";
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = "rock";
    }else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = "paper";
    }
    else {
        computerMove = "scissors";
    }
    return computerMove;
}

function compareMoves(userMove) {
    let result = "";
    const computerMove = getComputerMove();
    if(computerMove === userMove){
        result = "tie";
    }else if(computerMove === "paper" && userMove === "rock"){
        result = "you lose";
    }else if(computerMove === "rock" && userMove === "paper"){
        result = "you win";
    }else if(computerMove === "scissors" && userMove === "rock"){
        result = "you win";
    }else if(computerMove === "scissors" && userMove === "paper"){
        result = "you lose";
    }else if(computerMove === "rock" && userMove === "scissors"){
        result = "you lose";
    }else if(computerMove === "paper" && userMove === "scissors"){
        result = "you win";
    }

    if(result === "you win"){
        stats.playercount++;
    }else if(result === "you lose"){
        stats.computercount++;
    }else if(result === "tie"){
        stats.ties++;
    }
    
    localStorage.setItem('stats', JSON.stringify(stats));
    alert(`You picked ${userMove}, Computer picked ${computerMove}. ${result}`);
}

function updateValues() {
    document.getElementById("results").innerText = `Playerwins: ${stats.playercount}, Computerwins: ${stats.computercount}, Ties: ${stats.ties}`;
}
    
document.getElementById("rock").onclick = function() {compareMoves("rock"); updateValues();};

document.getElementById("paper").onclick = function() {compareMoves("paper"); updateValues();};

document.getElementById("scissors").onclick = function() {compareMoves("scissors"), updateValues();};

document.getElementById("reset").onclick = function() {stats.computercount = 0; stats.playercount = 0; stats.ties = 0; updateValues(); localStorage.removeItem('stats');}