
// Generate a random number between 1 and 40
let previousGuesses = {}; // Object to store previous guesses for each player

function playGame() {
    let secretNumber = Math.floor(Math.random() * 40) + 1;
    const playerName = prompt('What is your name?');
    let numberOfGuesses = 0;
    let playerGuess;
    let isCorrect = false;

    while (!isCorrect) {
        playerGuess = parseInt(prompt('Guess a number between 1 and 40:'));
        numberOfGuesses++;

        if (isNaN(playerGuess)) {
            alert('Please enter a valid number.');
        } else if (playerGuess < secretNumber) {
            alert(`Sorry ${playerName}, guess higher.`);
        } else if (playerGuess > secretNumber) {
            alert(`Sorry ${playerName}, guess lower.`);
        } else {
            isCorrect = true;
            alert(`Congratulations ${playerName}! You guessed the number ${secretNumber} correctly in ${numberOfGuesses} guesses.`);

            // Check if the player has played before
            if (previousGuesses[playerName]) {
                const previousGuessCount = previousGuesses[playerName];
                if (numberOfGuesses < previousGuessCount) {
                    alert(`You beat your previous best by ${previousGuessCount - numberOfGuesses} fewer guesses.`);
                } else if (numberOfGuesses > previousGuessCount) {
                    alert(`You did better in your last game by ${numberOfGuesses - previousGuessCount} fewer guesses.`);
                } else {
                    alert(`You matched your previous best score.`);
                }
            }

            // Update or record the player's best score
            if (!previousGuesses[playerName] || numberOfGuesses < previousGuesses[playerName]) {
                previousGuesses[playerName] = numberOfGuesses;
            }
        }
    }

    const playAgain = confirm('Do you want to play again?');
    if (playAgain) {
        playGame();
    }
}

playGame();

