import { gameBoard } from "../gameBoard.js";
import { getCell } from "./cell.js";
import { getMarker } from "./markers.js";

export function renderBoard() {
    const boardDOM = document.querySelector(`.board`)
    let matrix = gameBoard.getBoard();
    boardDOM.innerHTML = "";

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            boardDOM.appendChild(getCell(matrix[i][j], `${i}${j}`));
            
        }
        
    }

    // matrix = matrix.flat();

    // let i = 0;
    // matrix.forEach(element => {
        
    //     boardDOM.appendChild(getCell(element, i));

    //     i++;
    // });
}