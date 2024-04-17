document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("colorBox");
    const colorInput = document.getElementById("colorInput");
    const checkButton = document.getElementById("checkBtn");
    const message = document.getElementById("message");

    function generateRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let targetColor = generateRandomColor();
    colorBox.style.backgroundColor = targetColor;

    checkButton.addEventListener("click", () => {
        const userColor = colorInput.value.toUpperCase();
        if (userColor === targetColor) {
            message.textContent = "Congratulations! You guessed the correct color!";
            message.style.color = "green";
        } else {
            message.textContent = "Wrong guess. Try again!";
            message.style.color = "red";
        }
    });
});
