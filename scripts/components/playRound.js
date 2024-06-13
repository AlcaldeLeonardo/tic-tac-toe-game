import { gameBoard } from "./gameBoard.js";
import { playerWin, validateTie } from "./gameoverCondition.js";
import { renderBoard } from "./renderModules/renderBoard.js";
import { validateCoordenates } from "./validateCoordenate.js";

export function playRound(player1, player2) {
    let activePlayer = null;
    let coordenates, x, y;

    function switchPlayer() {
        if (activePlayer == null) {
            activePlayer = player1;
        } else {
            activePlayer = activePlayer == player1 ? player2 : player1;
        }

        console.log(`Es el turno de ${activePlayer.name}`);
    }

    function showGameResult() {
        if (!validateTie()) {
            console.log(`¡${activePlayer.name} Win!`);
        } else {
            console.log(`Tie, press F5 to restart`);
        }
    }

    renderBoard();

    // while (!playerWin(player1) && !playerWin(player2) && !validateTie()) {
    //     switchPlayer();
    //     do {
    //         coordenates = prompt(
    //             `${activePlayer.name}, Tell me the coordinates (XY): `
    //         );
    //         x = Number(coordenates[0]);
    //         y = Number(coordenates[1]);
    //     } while (!validateCoordenates(x, y));

    //     gameBoard.setBoard(activePlayer.marker, x, y);
    //     gameBoard.showBoard();
    // }

    showGameResult();
}
