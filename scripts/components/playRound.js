import { gameBoard } from "./gameBoard.js";
import { playerWin } from "./playerWin.js";
import { validateCoordenates } from "./validateCoordenate.js";

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