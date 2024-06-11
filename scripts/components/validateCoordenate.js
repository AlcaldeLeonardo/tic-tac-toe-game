import { gameBoard } from "./gameBoard.js";

export function validateCoordenates(x,y){
    const board = gameBoard.getBoard();
    if(board[x][y] == null && x < 3 && y < 3) {
        return true;
    }else {
        alert("Valores invalidos");
        return false;
    }
}