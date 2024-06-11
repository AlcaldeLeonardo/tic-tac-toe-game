import { gameBoard } from "./gameBoard.js";

export function playRound(player1,player2){
    let activePlayer = null;
    let coordenates, x, y;
    
    
    function switchPlayer() {
        if (activePlayer == null) {
            activePlayer = player1
        }else {
            activePlayer = activePlayer == player1 ? player2 : player1;
        }
    
        console.log(`Es el turno de ${activePlayer.name}`);
    }

    function validateCoordenates(x,y){
        const board = gameBoard.getBoard();
        if(board[x][y] == null && x < 3 && y < 3) {
            return true;
        }else {
            alert("Valores invalidos");
            return false;
        }
    }

    function playerWin(player){
        const board = gameBoard.getBoard();
        const marker = player.marker;

        for (let row of board) {
            if(row[0] == row[1] && row[1] == row[2] && row[0] == marker) return true;
        }

        for (let col = 0; col < 3; col++) {
            if (board[0][col] == board[1][col] && board[1][col] == board[2][col] && board[0][col] == marker) {
                return true;
            }
        }

        if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] == marker) {
            return true;
        }
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] == marker) {
            return true;
        }

        return false;

    }
    
    while(!playerWin(player1) && !playerWin(player2)){
        switchPlayer();
        do {
            coordenates = prompt(`${activePlayer.name}, dime las coordenadas (XY): `)
            x = Number(coordenates[0]);
            y = Number(coordenates[1]);

        } while (!validateCoordenates(x,y));
        
        gameBoard.setBoard(activePlayer.marker, x, y);
        gameBoard.showBoard();
        }
    console.log(`¡${activePlayer.name} ha ganado!`);
}