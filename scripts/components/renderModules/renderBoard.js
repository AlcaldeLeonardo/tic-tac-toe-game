import { gameBoard } from "../gameBoard.js";
import { BoardElements } from "./DOMelements.js";
import { getCell } from "./cell.js";

const board = BoardElements.boardDOM;

export function renderBoard() {
    let matrix = gameBoard.getBoard();
    board.innerHTML = "";

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            board.appendChild(getCell(matrix[i][j], `${i}${j}`));
        }
    }
}
