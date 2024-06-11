import { gameBoard } from "./gameBoard.js";

export function validateCoordenates(x,y){
    const board = gameBoard.getBoard();
    if(x < 3 && y < 3){
        if(board[x][y] == null) {
            return true;
    }
    }else {
        alert("Invalid values");
        return false;
    }
    return false
}