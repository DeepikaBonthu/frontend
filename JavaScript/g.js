document.addEventListener("DOMContentLoaded", () => {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const guessInput = document.getElementById("guess");
    const checkButton = document.getElementById("checkBtn");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    checkButton.addEventListener("click", () => {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (userGuess === secretNumber) {
            message.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
            message.style.color = "green";
            guessInput.disabled = true;
            checkButton.disabled = true;
        } else if (userGuess < secretNumber) {
            message.textContent = "Try a higher number.";
            message.style.color = "red";
        } else {
            message.textContent = "Try a lower number.";
            message.style.color = "red";
        }

        attemptsDisplay.textContent = `Attempts: ${attempts}`;
    });
});
