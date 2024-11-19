let choices = ["rock", "paper", "scissors"];
const result = document.getElementById("resultimg");
const ccc = document.getElementById("cimg");

// Function to get computer choice
function getComputerChoice() {
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// Function to play a round
function playRound(userChoice) {
    let computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        result.src = "images/draw.png";
        ccc.src = `images/${computerChoice}.png`;
        console.log("Draw");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result.src = "images/win.png";
        ccc.src = `images/${computerChoice}.png`;
        console.log("You Win");
    } else {
        result.src = "images/lost.png";
        ccc.src = `images/${computerChoice}.png`;
        console.log("You Lose");
    }
}

// Event listeners
document.getElementById("rock").addEventListener("click", function() {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors");
});
