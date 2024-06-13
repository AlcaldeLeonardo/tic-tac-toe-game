import { gameBoard } from "./gameBoard.js";

const board = gameBoard.getBoard();

export function playerWin(player) {
    const marker = player.marker;

    // rows verification
    for (let row of board) {
        if (row[0] == row[1] && row[1] == row[2] && row[0] == marker)
            return true;
    }

    // columns verification
    for (let col = 0; col < 3; col++) {
        if (
            board[0][col] == board[1][col] &&
            board[1][col] == board[2][col] &&
            board[0][col] == marker
        ) {
            return true;
        }
    }

    // diagonals verification
    if (
        board[0][0] == board[1][1] &&
        board[1][1] == board[2][2] &&
        board[0][0] == marker
    ) {
        return true;
    }
    if (
        board[0][2] == board[1][1] &&
        board[1][1] == board[2][0] &&
        board[0][2] == marker
    ) {
        return true;
    }

    return false;
}

export function validateTie() {
    if (board.flat().includes(null)) {
        return false;
    } else {
        return true;
    }
}
