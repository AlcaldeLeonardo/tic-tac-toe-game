import { gameBoard } from "./gameBoard.js";

export function validateCoordenates(x,y){
    const board = gameBoard.getBoard();
    if(board[x][y] == null){
            return true;
    }else {
        alert("Invalid values");
        return false;
    }
}