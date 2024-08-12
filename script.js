// Even or Odd Game (function declaration)
let playerName = "";
let wins = 0;
let losses = 0;

function playGame() {
  playerName = prompt("Welcome to Even or Odd! What is your name?");
    let playerChoice = prompt(`Hello ${playerName}! Do you choose even or odd?`).toLowerCase();

    // Validate player input
    while (playerChoice !== "even" && playerChoice !== "odd") {
        playerChoice = prompt("Invalid choice. Please type 'even' or 'odd' (e.g., 'even')").toLowerCase();
    }

    // Generate two random numbers between 1 and 4
    let randomNum1 = Math.floor(Math.random() * 4) + 1;
    let randomNum2 = Math.floor(Math.random() * 4) + 1;
    let sum = randomNum1 + randomNum2;
    let result = sum % 2 === 0 ? "even" : "odd";
    let winMessage = "";

    // Determine if the player wins or loses
    if (playerChoice === result) {
        winMessage = `Congratulations ${playerName}, you chose ${playerChoice}, the sum was ${sum}, which is an ${result} number. You win!`;
        wins++;
    } else {
        winMessage = `Sorry ${playerName}, you chose ${playerChoice}, the sum was ${sum}, which is an ${result} number. You lose.`;
        losses++;
    }

    // Display game result and win/loss record
    alert(`${winMessage}\nThat's ${wins} win(s) and ${losses} loss(es)!`);

    let playAgain = confirm("Would you like to play again?");
    if (playAgain) {
        playGame();
    }
}

//Guessing Game (arrow function)
const playGuess = () => {
    let repeat = "y";
    while (repeat.toLowerCase() === "y") {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        let guess = prompt("Guess a number between 1 and 10.");
        let count = 1;

        while (true) {
            if (guess > randomNumber) {
                guess = prompt("Too high, guess again.");
                count++;
            } else if (guess < randomNumber) {
                guess = prompt("Too low, guess again.");
                count++;
            } else if (guess == randomNumber) {
                alert(`You guessed the number in ${count} tries.`);
                break;
            } else {
                alert("Invalid input");
                break;
            }
        }
        repeat = prompt("Would you like to play again? yes/no").charAt(0);
    }
};

// Bear Hunter Ninja Game (function expression)
const bearHunterNinja = function() {
    let again;
    do {
        let playerName = prompt("Welcome to Bear Hunter Ninja! Please enter your name to get started:");

        if (playerName) {
            alert(`Hi ${playerName}! Let's play!!`);

            // Choose character
            let playerChoice = prompt("Who are you: Bear, Ninja, or Hunter?");

            if (playerChoice) {
                // Define choices in Array
                const choice = ["Bear", "Ninja", "Hunter"];

                // Traverse the Array to extract computer choice using random
                let computerChoice = choice[Math.floor(Math.random() * choice.length)];

                // Print choice result 
                let choiceMessage = `${playerName}, you picked ${playerChoice}! \nThe computer picked ${computerChoice}!`;

                // Display result
                alert(choiceMessage);

                if (playerChoice === computerChoice) {
                    // Tie
                    alert(`Nobody wins, it's a Tie!`);
                } else if ((playerChoice === "Bear" && computerChoice === "Ninja") ||
                    (playerChoice === "Ninja" && computerChoice === "Hunter") ||
                    (playerChoice === "Hunter" && computerChoice === "Bear")) {
                    // You win cases
                    alert(`You Win!`);
                } else {
                    // Computer win cases
                    alert("Computer Wins!");
                }
            } else {
                alert("You did not make a choice. Please refresh the page to start the game.");
            }
        }
        again = prompt("Do you want to play again? (Yes/No)");
    } while (again.toLowerCase() === "yes");
};