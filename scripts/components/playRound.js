import { gameBoard } from "./gameBoard.js";
import { playerWin, validateTie } from "./gameoverCondition.js";
import { getMarker } from "./renderModules/markers.js";
import { renderBoard } from "./renderModules/renderBoard.js";
import { validateCoordenates } from "./validateCoordenate.js";

export function playRound(player1, player2) {
    let activePlayer = player1;

    function switchPlayer() {
        if (activePlayer == null) {
            activePlayer = player1;
        } else {
            activePlayer = activePlayer == player1 ? player2 : player1;
        }

        console.log(`Es el turno de ${activePlayer.name}`);
    }

    renderBoard();

    const cellsBtn = document.querySelectorAll(`.cell`);
    cellsBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
            let coordenates, x, y;
            coordenates = btn.id;
            x = coordenates[0];
            y = coordenates[1];

            if(validateCoordenates(x,y)){
                gameBoard.setBoard(activePlayer.marker, x, y);
                btn.appendChild(getMarker(activePlayer.marker));

                if (!playerWin(activePlayer)) {
                    if (validateTie()) {
                        console.log("Tie");
                        renderBoard();//to remove eventListener in this case
                    } else switchPlayer(); 
                } else {
                    console.log(`${activePlayer.name} Win!!`);
                    renderBoard();//to remove eventListener in this case
                }
            }

        });
    });
}
