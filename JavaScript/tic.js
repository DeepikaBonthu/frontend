document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const cells = document.querySelectorAll(".cell");
    const message = document.getElementById("message");
    let currentPlayer = "X";
    let gameEnded = false;

    cells.forEach(cell => {
        cell.addEventListener("click", () => {
            if (!cell.textContent && !gameEnded) {
                cell.textContent = currentPlayer;
                if (checkWinner()) {
                    message.textContent = `Player ${currentPlayer} wins!`;
                    gameEnded = true;
                } else if ([...cells].every(cell => cell.textContent !== "")) {
                    message.textContent = "It's a draw!";
                    gameEnded = true;
                } else {
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                }
            }
        });
    });

    function checkWinner() {
        const winningCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombination.some(combination => {
            const [a, b, c] = combination;
            return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
        });
    }
});