import { gameBoard } from "../gameBoard.js";
import { getCell } from "./cell.js";
import { getMarker } from "./markers.js";

export function updateBoard() {
    const boardDOM = document.querySelector(`.board`)
    let matrix = gameBoard.getBoard();
    boardDOM.innerHTML = "";

    matrix = matrix.flat();

    let i = 0;
    matrix.forEach(element => {
        
        boardDOM.appendChild(getCell(element, i));

        i++;
    });
}